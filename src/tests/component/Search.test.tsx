import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Search from '../../components/Search/Search'

test("renders search input with placeholder", () => {
    // Renders the Search Component
    const { getByPlaceholderText } = render(<Search placeholder="Search for a book..." />)

    // Veryfies if the input is rendered correctly with the placeholder
    const searchInput = getByPlaceholderText("Search for a book...");
    expect(searchInput).toBeInTheDocument();
});

test("calls onChangeInputData when input value changes", () => {
    // Defines a mock function for the onChangeInputData
    const mockOnChangeInputData = jest.fn();
    
    // Renders the Search component woth the mock function to onChangeInputData
    const { getByPlaceholderText } = render(
      <Search placeholder="Search for a book..." onChangeInputData={mockOnChangeInputData} />)

    // Finds the input by the placeholder
    const searchInput = getByPlaceholderText("Search for a book...");

    // Fires an input change event
    fireEvent.change(searchInput, { target: {value: "test"}});

    // Verifies if the onChangeInputData function was called with the correct value
    expect(mockOnChangeInputData).toHaveBeenCalledWith("test");
});