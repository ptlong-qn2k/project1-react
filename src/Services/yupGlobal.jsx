import * as yup from 'yup';

const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z_.\-@]{8,}$/;
const REGEX_ONLY_NUMBER = /^\d+$/;

yup.addMethod(yup.string, 'password', function (message) {
    return this.matches(REGEX_PASSWORD, {
        message,
        excludeEmptyString: true,
    });
});

yup.addMethod(yup.string, 'onlyNumber', function (message) {
    return this.matches(REGEX_ONLY_NUMBER, {
        message,
        excludeEmptyString: true,
    });
});

export default yup;

export const commonSchema = yup.object({
    username: yup
        .string()
        .required('Username is required')
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be at most 20 characters'),

    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),

    confirmPassword: yup
        .string()
        .required('Please confirm your password')
        .oneOf([yup.ref('password')], 'Passwords must match'),

    email: yup.string().required('Email is required').email('Invalid email format'),

    fullName: yup
        .string()
        .required('Full name is required')
        .matches(/^[A-Za-z\s]+$/, 'Full name must contain only letters'),

    age: yup
        .number()
        .typeError('Age must be a number')
        .required('Age is required')
        .min(18, 'You must be at least 18')
        .max(100, 'You must be less than 100'),

    bio: yup.string().max(300, 'Bio cannot exceed 300 characters').nullable(),

    phone: yup
        .string()
        .required('Phone is required')
        .matches(/^\d{9,11}$/, 'Phone must be 9-11 digits'),

    website: yup.string().url('Must be a valid URL').nullable(),

    acceptTerms: yup.boolean().oneOf([true], 'You must accept the terms'),
});
