import {mock} from '@test/mocks';
import {locationValidator} from '@validators/location-validator';

describe('location-validator test', () => {
  it('should be returned true if a valid location address is provided', async () => {
    const result = await locationValidator.isValid(mock.locationValidator);

    expect(result).toEqual(true);
  });

  it('should be returned false a invalid location address is provided', async () => {
    const result = await locationValidator.isValid({});

    expect(result).toEqual(false);
  });
});
