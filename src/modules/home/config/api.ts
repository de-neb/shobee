import serviceHelper from "@/helpers/serviceHelper";

export default {
    getAllCategories(limit: number) {
        return serviceHelper({
            url: "categories",
            params: {
                limit,
            },
        });
    },
};
