import * as dayjs from 'dayjs';

export function sum(a: number, b: number) {
    return a + b;
}

export interface IRequestMessage {
    a: number;
    b: number;
}

export function getCurrentDatePretty() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
}
