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
};
