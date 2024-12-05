export interface ApiResponse<T> {}

export interface ApiErrorResponse<T> {
  detail: string;
  source: {};
}
