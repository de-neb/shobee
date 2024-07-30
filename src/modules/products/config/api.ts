import serviceHelper from "@/helpers/serviceHelper";

export default {
    getProducts(params: Object = {}) {
        return serviceHelper({
            url: "products",
            method: "get",
            params,
        });
    },

    getProductById(id: number) {
        return serviceHelper({
            url: `products/${id}`,
            method: "get",
        });
    },
};
