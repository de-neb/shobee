import serviceHelper from "@/helpers/serviceHelper";

export const CATEGORY_SELECT =
    "id,name,slug,image,creationAt:created_at,updatedAt:updated_at";

export default {
    getAllCategories(limit: number) {
        return serviceHelper({
            url: "categories",
            params: {
                select: CATEGORY_SELECT,
                order: "id.asc",
                limit,
            },
        });
    },
};
