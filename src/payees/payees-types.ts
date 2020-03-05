export interface ColumnConfig<T> {
    field: string;
    label: string;
}

export interface Payee {
    id: string;
    version: number;
    payeeName: string;
    address: Address;
    categoryId: string;
    image?: string;
    motto?: string;
    active: boolean;
}

export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
}

export interface Account {
    id: string;
    personId: string;
    accountTypeId: string;
    startingBalance: number;
    active: boolean;
}

export interface AccountType {
    id: string;
    accountTypeName: string;
    interestRate: number;
}

export interface Category {
    id: string;
    version: number;
    categoryName: string;
    categoryType: string;
    active: boolean;
}