import { render, screen } from "@testing-library/react"; // Import necessary methods from Testing Library for rendering and querying elements
import "@testing-library/jest-dom"; // Import custom matchers for Jest (like toBeInTheDocument)
import Main from "../components/component/main"; // Import the Main component to test
import { getSuperheroes } from "../api/api"; // Import the getSuperheroes function to mock its behavior

jest.mock("../api/api", () => ({ // Mock the getSuperheroes API function
    getSuperheroes: jest.fn(),
}));

test("renders Main component and fetches superheroes", async () => {
    // Mock the resolved value for getSuperheroes to return a superhero list
    getSuperheroes.mockResolvedValue([{ name: "Spiderman", superpower: "Spin webs", humilityScore: 10 }]);

    render(<Main />); // Render the Main component

    // Find all elements containing "Spiderman" text in the rendered component
    const superheroText = await screen.findAllByText("Spiderman");

    // Verify that all the elements with the name "Spiderman" are found in the document
    superheroText.forEach((element) => {
        expect(element).toBeInTheDocument();
    });
});
