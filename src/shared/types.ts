export interface Category {
    id: string;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
}

export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: Category;
    quantity?: number;
    currency?: string;
}

export interface ShippingInformation {
    firstName: string;
    lasttName: string;
    email: string;
    streetAddress: string;
    country: string;
    state: string;
    city: string;
    postcode: string;
    telephone: string;
    shippingMethod: number;
    paymentMethod: string;
}
