export default {
    generateImgUrl(url: string) {
        return new URL(url, import.meta.url).href;
    },

    getImageSrc(name: string, folder: string) {
        try {
            if (folder) {
                return this.generateImgUrl(`/src/assets/${folder}/${name}`);
            }

            return this.generateImgUrl(`/src/assets/${name}`);
        } catch (e) {
            return this.generateImgUrl("/src/assets/default-product-image.png");
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
