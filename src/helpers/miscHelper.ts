export default {
    getImageSrc(name: string, folder?: string) {
        try {
            if (folder) {
                return new URL(`/src/assets/banner/${name}`, import.meta.url)
                    .href;
            }

            return new URL(`/src/assets/${name}`, import.meta.url).href;
        } catch (e) {
            return new URL("/src/assets/placeholder.jpeg", import.meta.url)
                .href;
        }
    },

    parsePossibleJSON(value: string) {
        try {
            const parsedValue = JSON.parse(value);

            if (Array.isArray(parsedValue)) {
                return parsedValue[0];
            }

            return parsedValue;
        } catch (error) {
            return value;
        }
    },

    formatPrice(price: number) {
        const numberFormat = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        });

        return numberFormat.format(price);
    },
};
