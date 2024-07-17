import serviceHelper from "@/helpers/serviceHelper";

export default {
    getAllCategories(limit: number | undefined) {
        return serviceHelper({
            url: "categories",
            params: {
                limit,
            },
        });
    },
};
