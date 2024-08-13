import rules from "@/shared/rules";

export const CART_STORAGE_KEY = "cartStorage";

export const ADDRESS_FIELDS = [
    {
        label: "First Name",
        key: "firstName",
        colWidth: 6,
        type: "text",
        rules: [rules.required],
    },
    {
        label: "Last Name",
        key: "lasttName",
        colWidth: 6,
        type: "text",
        rules: [rules.required],
    },
    {
        label: "Email",
        key: "email",
        colWidth: 12,
        type: "text",
        rules: [rules.required, rules.isEmail],
    },
    {
        label: "Street Address",
        key: "streetAddress",
        colWidth: 12,
        type: "text",
        rules: [rules.required],
    },
    {
        label: "Country",
        key: "country",
        colWidth: 6,
        type: "dropdown",
        rules: [rules.required],
    },
    {
        label: "State",
        key: "state",
        colWidth: 6,
        type: "text",
        rules: [rules.required],
    },
    {
        label: "City",
        key: "city",
        colWidth: 6,
        type: "text",
        rules: [rules.required],
    },
    {
        label: "ZIP/Postcode",
        key: "postcode",
        colWidth: 6,
        type: "number",
        rules: [rules.required],
    },
    {
        label: "Telephone",
        key: "telephone",
        colWidth: 12,
        type: "number",
        rules: [rules.required],
    },
];

export const defaultAddress = {
    firstName: "",
    lasttName: "",
    email: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    postcode: "",
    telephone: "",
};

export const PAYMENT_OPTIONS = ["Cash On Delivery", "Money Transfer"];

export const SHIPPING_OPTIONS = [
    {
        type: "Flat Rate Shipping",
        value: 10,
    },
    {
        type: "Free Shipping",
        value: 0,
    },
];
