import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Button from '../../components/Button/Button';

test('Should call the function when onClick is clicked', () => {
  const onClickMock = jest.fn();
  const { getByText } = render(<Button onClick={onClickMock}>Test Button</Button>);

  const button = getByText('Test Button');
  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('Must have the right text', () => {
  const { getByText } = render(<Button onClick={() => {}}>Test Button</Button>);
  expect(getByText('Test Button')).toBeInTheDocument();
});