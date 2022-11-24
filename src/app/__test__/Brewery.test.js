import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Brewery from '../components/Brewery';

it('Brewery renders correctly', () => {
  const Component = render(
    <BrowserRouter>
      <Provider store={store}>
        <Brewery />
      </Provider>
      ,
    </BrowserRouter>,
  );
  expect(Component).toMatchSnapshot();
});
