export interface TimeDisplayValues {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const generateTimeDisplay = (targetDate: number): TimeDisplayValues => {
    const timeNow = new Date().getTime();
    const difference = targetDate - timeNow;
    const formattedTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
    return formattedTime;
};
