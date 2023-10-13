export interface User {
  userId: number;
  name: string;
  password: string;
  permission: number;
}
export interface Item {
  itemId: number;
  description: string;
  userId: number;
}
export interface Cart {
  cartId: number;
  description: string;
}

export interface List {
  listId: number;
  itemId: number;
  cartId: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
