interface InputsProps {
    name: string;
    number: string;
}

interface ErrorsProps {
    name: string;
    number: string;
}

export const vacanciesValidateForm = (
    inputs: InputsProps,
): { valid: boolean; errors: ErrorsProps } => {
    let valid = true;
    const newErrors: ErrorsProps = {
        name: '',
        number: '',
    };

    if (!inputs.name.trim() || inputs.name.trim().length < 10) {
        newErrors.name = 'ФИО должно содержать не менее 10 символов';
        valid = false;
    }

    if (
        !inputs.number.trim() ||
        inputs.number.replace(/\D/g, '').length !== 11
    ) {
        newErrors.number = 'Введите корректный телефонный номер';
        valid = false;
    }

    return { valid, errors: newErrors };
};
