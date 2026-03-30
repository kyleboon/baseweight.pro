import { describe, it, expect, vi, beforeEach } from 'vitest';

// Stub Nitro globals
(globalThis as any).defineEventHandler = (fn: Function) => fn;
(globalThis as any).getRequestHeader = (event: any, name: string) => {
    return event._requestHeaders?.[name.toLowerCase()];
};
(globalThis as any).setResponseHeader = (event: any, name: string, value: string) => {
    event._responseHeaders = event._responseHeaders || {};
    event._responseHeaders[name] = value;
};
(globalThis as any).getRequestURL = (event: any) => {
    return new URL(event._url || 'http://localhost/api/test', 'http://localhost');
};

describe('request logger middleware', () => {
    let handler: Function;
    let mockLogger: { child: ReturnType<typeof vi.fn>; info: ReturnType<typeof vi.fn> };

    beforeEach(async () => {
        vi.resetModules();
        // Mock the logger module to avoid pino-pretty transport issues in tests
        vi.doMock('../../server/utils/logger.js', () => {
            const childFn = {
                info: vi.fn(),
                warn: vi.fn(),
                error: vi.fn(),
                debug: vi.fn(),
                child: vi.fn(),
            };
            mockLogger = {
                child: vi.fn(() => childFn),
                info: vi.fn(),
            };
            return {
                logger: mockLogger,
                createChildLogger: vi.fn(() => childFn),
            };
        });
        const mod = await import('../../server/middleware/00-request-logger.js');
        handler = mod.default;
    });

    function createEvent(overrides: Record<string, any> = {}) {
        const listeners: Record<string, Function[]> = {};
        return {
            _requestHeaders: overrides.requestHeaders || {},
            _responseHeaders: {} as Record<string, string>,
            _url: overrides.url || 'http://localhost/api/library',
            context: {} as Record<string, any>,
            node: {
                req: { method: overrides.method || 'GET' },
                res: {
                    statusCode: 200,
                    on: (eventName: string, fn: Function) => {
                        listeners[eventName] = listeners[eventName] || [];
                        listeners[eventName].push(fn);
                    },
                },
            },
            _listeners: listeners,
        };
    }

    it('generates a requestId when X-Request-Id header is absent', async () => {
        const event = createEvent();
        await handler(event);
        expect(event.context.requestId).toBeDefined();
        expect(typeof event.context.requestId).toBe('string');
        expect(event.context.requestId.length).toBeGreaterThan(0);
    });

    it('reuses X-Request-Id header when present', async () => {
        const event = createEvent({
            requestHeaders: { 'x-request-id': 'my-custom-id-123' },
        });
        await handler(event);
        expect(event.context.requestId).toBe('my-custom-id-123');
    });

    it('sets X-Request-Id response header', async () => {
        const event = createEvent();
        await handler(event);
        expect(event._responseHeaders['X-Request-Id']).toBe(event.context.requestId);
    });

    it('attaches a child logger to event.context.logger', async () => {
        const event = createEvent();
        await handler(event);
        expect(event.context.logger).toBeDefined();
        expect(typeof event.context.logger.info).toBe('function');
    });

    it('logs request start at info level', async () => {
        const event = createEvent({ method: 'GET', url: 'http://localhost/api/library' });
        await handler(event);
        expect(event.context.logger.info).toHaveBeenCalledWith('request start');
    });

    it('calls logger.child with requestId, method, and path bindings', async () => {
        const event = createEvent({ method: 'GET', url: 'http://localhost/api/library' });
        await handler(event);
        expect(mockLogger.child).toHaveBeenCalledWith(
            expect.objectContaining({
                requestId: event.context.requestId,
                method: 'GET',
                path: '/api/library',
            }),
        );
    });

    it('logs request complete on response finish with statusCode and durationMs', async () => {
        const event = createEvent();
        await handler(event);
        const finishCallbacks = event._listeners['finish'];
        expect(finishCallbacks).toBeDefined();
        expect(finishCallbacks.length).toBe(1);

        // Simulate response finish
        finishCallbacks[0]();
        expect(event.context.logger.info).toHaveBeenCalledWith(
            expect.objectContaining({
                statusCode: 200,
                durationMs: expect.any(Number),
            }),
            'request complete',
        );
    });
});
