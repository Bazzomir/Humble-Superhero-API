import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Main from "../components/component/main";
import { getSuperheroes } from "../api/api";

jest.mock("../api/api", () => ({
    getSuperheroes: jest.fn(),
}));

test("renders Main component and fetches superheroes", async () => {
    getSuperheroes.mockResolvedValue([{ name: "Spiderman", superpower: "Spin webs", humilityScore: 10 }]);

    render(<Main />);

    const superheroText = await screen.findAllByText("Spiderman");

    superheroText.forEach((element) => {
        expect(element).toBeInTheDocument();
    });
});
