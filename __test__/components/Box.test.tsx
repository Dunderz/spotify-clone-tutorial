import React from "react";
import { render } from "@testing-library/react";
import Box from "../../components/Box";

describe("Box component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Box>
        <span>Test Content</span>
      </Box>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom class names", () => {
    const { container } = render(
      <Box className="custom-class">
        <span>Test Content</span>
      </Box>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("applies default class names", () => {
    const { container } = render(
      <Box>
        <span>Test Content</span>
      </Box>
    );
    expect(container.firstChild).toHaveClass(
      "bg-neutral-900 rounded-lg h-fit w-full"
    );
  });

  it("merges custom and default class names", () => {
    const { container } = render(
      <Box className="custom-class">
        <span>Test Content</span>
      </Box>
    );
    expect(container.firstChild).toHaveClass(
      "bg-neutral-900 rounded-lg h-fit w-full custom-class"
    );
  });
});
