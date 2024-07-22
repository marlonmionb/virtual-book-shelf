import { render, fireEvent } from "@testing-library/react";
import Rating from "../../components/Rating/Rating";

describe("Rating Component", () => {
  it("renders with default number of stars", () => {
    const { getAllByText } = render(<Rating />);
    const stars = getAllByText("★");
    expect(stars).toHaveLength(5); 
  });

  it("calls onRatingChange callback when a star is clicked", () => {
    const mockOnRatingChange = jest.fn();
    const { getAllByText } = render(
      <Rating onRatingChange={mockOnRatingChange} />
    );

    const stars = getAllByText("★");
    fireEvent.click(stars[2]);

    expect(mockOnRatingChange).toHaveBeenCalledWith(3);
  });

  it("renders with specified number of stars", () => {
    const { getAllByText } = render(<Rating totalStars={7} />);
    const stars = getAllByText("★");
    expect(stars).toHaveLength(7);
  });
});
