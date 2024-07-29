export const FILTER_OPTIONS = [
    {
        title: "From A-Z",
        value: "titleAsc",
        sortBy: "asc",
        sortByProp: "title",
        type: "string",
    },
    {
        title: "From Z-A",
        value: "titleDesc",
        sortBy: "desc",
        sortByProp: "title",
        type: "string",
    },
    {
        title: "Oldest First",
        value: "createdAsc",
        sortBy: "asc",
        sortByProp: "creationAt",
        type: "date",
    },
    {
        title: "Newest First",
        value: "createdDesc",
        sortBy: "desc",
        sortByProp: "creationAt",
        type: "date",
    },
    {
        title: "Cheapest First",
        value: "priceAsc",
        sortBy: "asc",
        sortByProp: "price",
        type: "number",
    },
    {
        title: "Expensive First",
        value: "priceDesc",
        sortBy: "desc",
        sortByProp: "price",
        type: "number",
    },
];
