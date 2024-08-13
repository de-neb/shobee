export default {
    isNumber(e: any) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    },

    required(value: any) {
        if (!value && value !== 0) {
            return "This field is required";
        }

        return true;
    },

    isEmail(value: string) {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (!isValid) {
            return "This field must be a valid email.";
        }

        return true;
    },
};
