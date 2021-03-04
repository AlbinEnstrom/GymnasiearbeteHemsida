export class HouseAPIResponse {
    houseList: House[];
}

export class House {
    id: number;
    name: string;
    mainImage:string;
    imageList: string[];
    shortText: string;
    longText: string;
}