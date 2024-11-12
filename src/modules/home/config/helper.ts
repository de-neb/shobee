import defaultImage from "/placeholder.jpeg";

export default {
    getImageUrl(images: string) {
        //images are sometimes returned as JSON
        try {
            const extracted = JSON.parse(images);
            if (!/png|jpg|jpeg|svg|picsum/.test(extracted)) {
                return defaultImage;
            }
            return extracted[0];
        } catch (error) {
            return images[0];
        }
    },

    generateRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
};
