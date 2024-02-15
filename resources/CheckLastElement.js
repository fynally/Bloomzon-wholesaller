export const isLastElement = (data, val) => {
    const lastIndex = data.length - 1;
    return data.indexOf(val) === lastIndex;
}