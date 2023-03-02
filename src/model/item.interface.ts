export interface Item {
  id: number;
  name: string;
  image: string;
}

export interface sliceItemState {
  value: Item[];
}

export interface User {
    name: string;
    email: string
}

export type DataForm = {
    user: User;
    styleItems: Item[];
    designItems: Item[];
    typoItems: Item[];
};
