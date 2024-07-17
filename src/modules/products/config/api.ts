import serviceHelper from "@/helpers/serviceHelper";

export default {
    getProducts(offset: number, limit: number) {
        return serviceHelper({
            url: "products",
            method: "get",
            params: {
                offset,
                limit,
            },
        });
    },

    getProductsByCategory(categoryId: number) {
        return serviceHelper({
            url: "products",
            method: "get",
            params: {
                categoryId,
            },
        });
    },
};
