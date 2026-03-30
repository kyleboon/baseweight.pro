import pino from 'pino';
import config from 'config';

function resolveLevel(): string {
    if (process.env.LOG_LEVEL) {
        return process.env.LOG_LEVEL;
    }
    if (config.has('logLevel')) {
        return config.get<string>('logLevel');
    }
    return 'info';
}

function createLogger(): pino.Logger {
    const level = resolveLevel();

    if (process.env.NODE_ENV !== 'production') {
        return pino({
            level,
            transport: {
                target: 'pino-pretty',
                options: { colorize: true },
            },
        });
    }

    return pino({ level });
}

export const logger = createLogger();

export function createChildLogger(bindings: pino.Bindings): pino.Logger {
    return logger.child(bindings);
}
