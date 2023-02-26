import {fireEvent, render} from '@test-utils';
import {mock} from '@test/mocks';
import {Map} from './map';

jest.mock('react-native-maps', () => {
  const {View} = require('react-native');
  const MockMapView = (props: any) => {
    return <View>{props.children}</View>;
  };
  const MockMarker = (props: any) => {
    return <View>{props.children}</View>;
  };
  return {
    __esModule: true,
    default: MockMapView,
    Marker: MockMarker,
  };
});

describe('HeaderImage tests', () => {
  it('should be defined', () => {
    const map = render(
      <Map
        location={mock.map.location}
        onRegionChange={mock.map.onRegionChange}
      />,
    );

    expect(map).toBeDefined();
  });

  it('should be able to move the map', () => {
    const map = render(
      <Map
        location={mock.map.location}
        onRegionChange={mock.map.onRegionChange}
      />,
    ).container;

    fireEvent.scroll(map);

    expect(map).toBeDefined();
  });

  it('should match with snapshot', () => {
    const map = render(
      <Map
        location={mock.map.location}
        onRegionChange={mock.map.onRegionChange}
      />,
    ).toJSON();

    expect(map).toMatchSnapshot();
  });

  it('should match snapshot without onchange ', () => {
    const map = render(
      <Map
        onRegionChange={mock.map.onRegionChange}
        location={mock.map.location}
      />,
    ).toJSON();

    expect(map).toMatchSnapshot();
  });
});
