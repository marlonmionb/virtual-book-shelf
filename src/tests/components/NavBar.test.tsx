import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../../components/NavBar/NavBar';

test('Should render children inside the NavBar', () => {
  const { getByText } = render(
    <NavBar>
      <div>Child Component</div>
    </NavBar>
  );

  const childComponent = getByText('Child Component');
  expect(childComponent).toBeInTheDocument();
});