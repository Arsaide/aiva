interface InputsProps {
    name: string;
    number: string;
    message: string;
}

interface ErrorsProps {
    name: string;
    number: string;
    message: string;
}

export const vacanciesValidateForm = (
    inputs: InputsProps,
): { valid: boolean; errors: ErrorsProps } => {
    let valid = true;
    const newErrors: ErrorsProps = {
        name: '',
        number: '',
        message: '',
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

    if (
        !inputs.message.trim() ||
        inputs.message.trim().length < 50 ||
        inputs.message.trim().length > 10000
    ) {
        newErrors.message =
            'Ваше письмо должно содержать от 50 до 10000 символов';
        valid = false;
    }

    return { valid, errors: newErrors };
};
