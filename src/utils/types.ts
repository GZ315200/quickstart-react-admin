/**
 * global types
 */
export interface ApiResponse<T> {
  code: number;
  errorMsg: string;
  data: T;
}

type Nullable<T> = T | null;

export type ValueOf<T> = T[keyof T];
