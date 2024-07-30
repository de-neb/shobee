export default {
    isNumber(e: any) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    },
};
