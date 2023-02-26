import {mock} from '@test/mocks';
import {loginValidator} from '@validators/login-validators';

describe('login-validator test', () => {
  it('should be returned true if a valid login fields is provided', async () => {
    const result = await loginValidator.isValid(mock.loginValidator);

    expect(result).toEqual(true);
  });

  it('should be returned false if a invalid login fields is provided', async () => {
    const result = await loginValidator.isValid({});

    expect(result).toEqual(false);
  });
});
