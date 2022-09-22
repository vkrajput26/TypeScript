declare let First_name: string;
declare let age: number;
declare type isFetching = {
    condition: boolean;
};
declare let arr: number[];
declare let arrofstring: string[];
declare let tuples: [string, boolean];
declare enum group {
    User = 0,
    SuperUser = 1,
    Admin = 2,
    SuperAdmin = 3
}
declare function product(x: number, y: number): number;
declare function divide(x: number, y: number): number;
declare const printName: ({ First_name }: {
    First_name: any;
}) => void;
