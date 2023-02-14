import {CustomerInterface} from "@shared/interfaces/customer.interface";

export interface LoginCredentialsInterface {
  email: string;
  password: string;
}
export interface LoginResponseInterface {
  message: string;
  user: CustomerInterface;
  token: string;
}
