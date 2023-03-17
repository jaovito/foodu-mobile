import {mock} from '@test/mocks';
import {render} from '@test/utils/test-utils';
import {OptionList} from './option-list';

describe('<OptionList />', () => {
  it('should be defined', () => {
    const optionList = render(<OptionList options={mock.optionList.options} />);

    expect(optionList).toBeDefined();
  });

  it('should be able to find some list', async () => {
    const {findByText} = render(
      <OptionList options={mock.optionList.options} />,
    );

    const text = await findByText(mock.optionList.options[0].name);

    expect(text).toBeTruthy();
  });

  it('should match with snapshot', () => {
    const optionList = render(
      <OptionList options={mock.optionList.options} />,
    ).toJSON();

    expect(optionList).toMatchSnapshot();
  });
});
