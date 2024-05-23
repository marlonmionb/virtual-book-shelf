import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import UserBar from '../../components/UserBar/UserBar';

test('UserBar renders correctly with provided props', () => {
  const path = '/path/to/image.jpg';
  const alternative = 'User Profile Picture';
  const username = 'John Doe';

  const { getByAltText, getByText } = render(
    <UserBar path={path} alternative={alternative}>
      {username}
    </UserBar>
  );

  const profilePicture = getByAltText(alternative);
  const usernameElement = getByText(username);

  expect(profilePicture).toBeInTheDocument();
  expect(profilePicture).toHaveAttribute('src', path);
  expect(profilePicture).toHaveAttribute('alt', alternative);
  expect(usernameElement).toBeInTheDocument();
  expect(usernameElement).toHaveTextContent(username);
});