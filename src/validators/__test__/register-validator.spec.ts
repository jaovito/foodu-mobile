import {mock} from '@test/mocks';
import {registerValidator} from '@validators/register-validator';

describe('register-validator test', () => {
  it('should be returned true if a valid register fields is provided', async () => {
    const result = await registerValidator.isValid(mock.registerValidator);

    expect(result).toEqual(true);
  });

  it('should be returned false if a invalid register fields is provided', async () => {
    const result = await registerValidator.isValid({});

    expect(result).toEqual(false);
  });
});
