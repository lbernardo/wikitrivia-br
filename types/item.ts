export interface Item {
  description: string;
  id: string;
  image: string;
  year: number;
}

export type PlayedItem = Item & {
  played: {
    correct: boolean;
  };
};
