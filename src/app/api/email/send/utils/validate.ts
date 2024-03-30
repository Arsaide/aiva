export const validateString = (value: unknown, maxLength: number) => {
    return !(!value || typeof value !== 'string' || value.length > maxLength);
};
