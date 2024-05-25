import { createHash } from 'crypto';

export const hash = (data: string) => {
    return createHash('sha256').update(data).digest('hex');
}