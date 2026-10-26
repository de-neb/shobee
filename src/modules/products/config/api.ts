import serviceHelper from "@/helpers/serviceHelper";
import { CATEGORY_SELECT } from "@/modules/home/config/api";

const PRODUCT_SELECT = `id,title,slug,price,description,images,creationAt:created_at,updatedAt:updated_at,category:categories(${CATEGORY_SELECT})`;

interface PlatziProductParams {
    offset?: number;
    limit?: number;
    title?: string;
    categoryId?: string | number;
    price_min?: number;
    price_max?: number;
}

const isSet = (value: unknown) =>
    value !== undefined &&
    value !== null &&
    value !== "" &&
    !Number.isNaN(value);

const toPostgrestParams = (params: PlatziProductParams) => {
    const query: Record<string, string | number> = {
        select: PRODUCT_SELECT,
        order: "id.asc",
    };

    if (isSet(params.offset)) query.offset = params.offset!;
    if (isSet(params.limit)) query.limit = params.limit!;
    if (isSet(params.title)) query.title = `ilike.*${params.title}*`;
    if (isSet(params.categoryId)) query.category_id = `eq.${params.categoryId}`;

    const priceFilters = [];
    if (isSet(params.price_min)) priceFilters.push(`price.gte.${params.price_min}`);
    if (isSet(params.price_max)) priceFilters.push(`price.lte.${params.price_max}`);
    if (priceFilters.length) query.and = `(${priceFilters.join(",")})`;

    return query;
};

export default {
    getProducts(params: PlatziProductParams = {}) {
        return serviceHelper({
            url: "products",
            method: "get",
            params: toPostgrestParams(params),
        });
    },

    getProductById(id: string) {
        return serviceHelper({
            url: "products",
            method: "get",
            params: {
                select: PRODUCT_SELECT,
                id: `eq.${id}`,
            },
            headers: { Accept: "application/vnd.pgrst.object+json" },
        });
    },
};
