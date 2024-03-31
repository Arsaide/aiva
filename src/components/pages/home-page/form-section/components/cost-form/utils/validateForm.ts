interface InputsProps {
    name: string;
    email: string;
    number: string;
    message: string;
}

interface ErrorsProps {
    name: string;
    email: string;
    number: string;
    message: string;
}

export const validateForm = (
    inputs: InputsProps,
): { valid: boolean; errors: ErrorsProps } => {
    let valid = true;
    const newErrors: ErrorsProps = {
        name: '',
        email: '',
        number: '',
        message: '',
    };

    if (!inputs.name.trim() || inputs.name.trim().length < 10) {
        newErrors.name = 'ФИО должно содержать не менее 10 символов';
        valid = false;
    }

    if (!inputs.email.trim()) {
        newErrors.email = 'Введите вашу почту';
        valid = false;
    } else if (!isValidEmail(inputs.email.trim())) {
        newErrors.email = 'Введите корректную почту';
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
        inputs.message.trim().length > 5000
    ) {
        newErrors.message =
            'Описание перевозки должно содержать от 50 до 5000 символов';
        valid = false;
    }

    return { valid, errors: newErrors };
};

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
