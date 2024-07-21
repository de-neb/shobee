export default {
    titleCase(text: string) {
        return text.replace(/\w+/g, function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
    },
};
