import {AxiosError} from 'axios';

export function getError(err: Error | unknown): AxiosError {
  if (err instanceof AxiosError) {
    return err;
  }

  return err as AxiosError;
}
