export default {
    titleCase(text: string) {
        return text.replace(/\w+/g, function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
    },

    toSnakeCase(text: string) {
        return text
            .replace(/([a-z])([A-Z])/g, "$1-$2")
            .replace(/\s+/g, "-")
            .toLowerCase();
    },
};
