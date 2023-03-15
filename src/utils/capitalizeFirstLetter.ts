export function capitalizeFirstLetter(string: string) {
    const [ first, ...rest ] = string;
    return first === undefined ? '' : first.toUpperCase() + rest.join('');
}