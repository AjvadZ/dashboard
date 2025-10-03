import { Revenue } from './definitions';

export const formatCurrency = (amount: number)=>{
    return (amount / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
        });
}

export const formatDateLocal = (dateStr: string, locale: string = 'en-US') => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };

    const formatter = new Intl.DateTimeFormat(locale, options);
    return formatter.format(date);
}


export const generateYAxis = (revenue: Revenue[]) => {

    const yAxisLabels = []

    const highestRecord = Math.max(...revenue.map((month) => month.revenue))

    const topLabel = Math.ceil( highestRecord / 1000) * 1000

    for (let i = topLabel ; i >= 1000; i -= 1000){
        yAxisLabels.push(`$${i / 1000}K`)
    }

    return {yAxisLabels, topLabel};
}

