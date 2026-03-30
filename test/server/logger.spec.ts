import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

describe('logger', () => {
    const originalEnv = process.env;

    beforeEach(() => {
        vi.resetModules();
        process.env = { ...originalEnv };
    });

    afterEach(() => {
        process.env = originalEnv;
    });

    it('defaults to info level when no env var or config override', async () => {
        delete process.env.LOG_LEVEL;
        vi.doMock('config', () => ({
            default: {
                has: (key: string) => key === 'logLevel',
                get: (key: string) => {
                    if (key === 'logLevel') return 'info';
                    return '';
                },
            },
        }));

        const { logger } = await import('../../server/utils/logger.js');
        expect(logger.level).toBe('info');
    });

    it('uses LOG_LEVEL env var when set', async () => {
        process.env.LOG_LEVEL = 'debug';
        vi.doMock('config', () => ({
            default: {
                has: (key: string) => key === 'logLevel',
                get: (key: string) => {
                    if (key === 'logLevel') return 'info';
                    return '';
                },
            },
        }));

        const { logger } = await import('../../server/utils/logger.js');
        expect(logger.level).toBe('debug');
    });

    it('uses config logLevel when env var is not set', async () => {
        delete process.env.LOG_LEVEL;
        vi.doMock('config', () => ({
            default: {
                has: (key: string) => key === 'logLevel',
                get: (key: string) => {
                    if (key === 'logLevel') return 'warn';
                    return '';
                },
            },
        }));

        const { logger } = await import('../../server/utils/logger.js');
        expect(logger.level).toBe('warn');
    });

    it('falls back to info when config has no logLevel key', async () => {
        delete process.env.LOG_LEVEL;
        vi.doMock('config', () => ({
            default: {
                has: () => false,
                get: () => {
                    throw new Error('not found');
                },
            },
        }));

        const { logger } = await import('../../server/utils/logger.js');
        expect(logger.level).toBe('info');
    });

    it('exports createChildLogger that returns a child with bindings', async () => {
        delete process.env.LOG_LEVEL;
        vi.doMock('config', () => ({
            default: {
                has: (key: string) => key === 'logLevel',
                get: (key: string) => {
                    if (key === 'logLevel') return 'info';
                    return '';
                },
            },
        }));

        const { createChildLogger } = await import('../../server/utils/logger.js');
        const child = createChildLogger({ module: 'db' });
        expect(child).toBeDefined();
        expect(typeof child.info).toBe('function');
        expect(typeof child.error).toBe('function');
    });
});
