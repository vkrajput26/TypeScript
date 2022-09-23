interface Object1 {
    title: string;
    status: boolean;
    id: number;
}
declare type object2 = {
    firstname: "virat";
    lastname: "kholi";
};
declare const getName: ({ firstname, lastname }: object2) => void;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    phone: Array<number>;
    addresses: Array<string>;
    firstname: string;
    lastname: string;
    middlename: string;
}
declare type PersonDetailsObj = [
    {
        myname: "vk";
    }
];
declare let arr: string[];
declare const PhoneBook: (PersonDetailsObj: any) => void;
