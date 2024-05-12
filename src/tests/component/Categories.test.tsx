import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Categories from '../../components/Categories/Categories'

describe('Categories Component', () => {
    const initialTags = [
        {
            id: "1",
            value: "romance",
            color: "#FFBDBD"
        },
        {
            id: "2",
            value: "finance",
            color: "#C2DBFF"
          }
    ];

    it('renders categories correctly', () => {
        const { getByText } = render(<Categories tags={initialTags} />);

        expect(getByText('romance')).toBeInTheDocument();
        expect(getByText('finance')).toBeInTheDocument();
    });

    it('adds a new tag on the button click', () => {
        const { getByText, getByRole } = render(<Categories tags={initialTags} editable={true} />);
        const addButton = getByText('+');

        fireEvent.click(addButton);

        expect(getByRole('textbox')).toBeInTheDocument();
    })

    it('adds a new tag on Enter key press', () => {
        const handleUpdateCategories = jest.fn();
        const { getByText, getByRole } = render(<Categories tags={initialTags} editable={true} onUpdateCategories={handleUpdateCategories} />);
        const addButton = getByText('+');
        fireEvent.click(addButton);
        const inputField = getByRole('textbox');
    
        fireEvent.change(inputField, { target: { value: 'new tag' } });
        fireEvent.keyUp(inputField, { key: 'Enter', code: 'Enter' });
    
        expect(handleUpdateCategories).toHaveBeenCalled();
        expect(handleUpdateCategories.mock.calls[0][0].length).toBe(initialTags.length + 1);
      });

      it('deletes a tag on button click', () => {
        const handleUpdateCategories = jest.fn();
        const { getByTestId } = render(
          <Categories tags={initialTags} editable={true} onUpdateCategories={handleUpdateCategories} />
        );
        const deleteButton = getByTestId(`delete-button-${initialTags[0].id}`);
      
        fireEvent.click(deleteButton);
      
        expect(handleUpdateCategories).toHaveBeenCalled();
        expect(handleUpdateCategories.mock.calls[0][0].length).toBe(initialTags.length - 1);
      });
})