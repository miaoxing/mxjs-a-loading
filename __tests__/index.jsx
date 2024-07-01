import {render} from '@testing-library/react';
import {Loading} from '..';

describe('loading', () => {
  test('Loading', () => {
    const result = render(<Loading/>);
    expect(result.container).toMatchSnapshot();
  });
});
