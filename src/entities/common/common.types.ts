/** Ошибка данных формы */
export interface ResponseErrorViolation {
    code: string;
    message: string;
    propertyPath: string;
  }

/** Тело ошибки сервера */
export interface ResponseError {
    '@type': 'hydra:Error';
    'hydra:description': string | null;
    'hydra:title': string | null;
    violations?: Array<ResponseErrorViolation>;
  }

export type TLoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';  