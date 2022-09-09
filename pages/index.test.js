import Home from "./index";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Home", () => {
  it("renders...", () => {
    render(<Home />);
  });
});
