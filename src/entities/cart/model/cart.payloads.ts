export type CartPayloads =
  | Order_Asteroid_Payload
  | Remove_Asteroid_Order_Payload
  | Empty_Payload;

export type Order_Asteroid_Payload = string;
export type Remove_Asteroid_Order_Payload = string;
type Empty_Payload = undefined;
