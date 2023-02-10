import {CustomerInterface} from "@shared/interfaces/customer.interface";

/**
 * Credit properties
 */
export type CreditInterface = {
  _id?: string;
  customer_id?: CustomerInterface;
  amount?: number;
  status?: CreditStatusEnum;
  customer_name?: string;
}

/**
 * Possible credit status
 */
export enum CreditStatusEnum {
  ACTIVE = 'active',
  SETTLED = 'settled',
}
