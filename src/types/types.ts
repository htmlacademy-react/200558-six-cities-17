
export enum HousingRange {
    apartment = 'Apartment',
    room = 'Room'
}

export type TOffer = {
    id: string;
    price: number;
    title: string;
    type: HousingRange;
    city: City;
    location: Location;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
    favorites?: boolean;

};
export type TOffersProp = {
    offers: TOffer[];
};

export type City = {
    name: string;
    location: Location;
}

export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};
export type TChildrenJsx = { children: JSX.Element };
export type TChildrenString = { children: string };
export type TChildrenStrings = { children: string[] };

export type TOffersCities = Record<string, TOffer[]>;
