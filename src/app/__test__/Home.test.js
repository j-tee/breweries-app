import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home';

it('Sould render Home correctly', () => {
  const Component = render(
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
      ,
    </BrowserRouter>,
  );
  expect(Component).toMatchSnapshot();
});
