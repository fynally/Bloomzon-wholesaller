export const isLastElement = (array, element) => {
    const lastIndex = array.length - 1;
    return array[lastIndex] === element;
}

export const formatMoney = (amount) => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD', // You can adjust the currency code as needed
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

export const calculatePercentage = (number, percentage) => {
    if (isNaN(number) || isNaN(percentage)) {
        // Handle cases where either the number or percentage is not a valid number
        return 'Invalid input';
    }

    const result = (percentage / 100) * number;
    return result;
};

export const currencyFunction = (number, locale = 'en-US', currency = 'USD') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(number);
}

//export const formatAsCurrency = currencyFunction(number);