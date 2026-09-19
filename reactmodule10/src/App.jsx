
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("displays greeting", () => {
    render(<Greeting />);

    expect(screen.getByText("Hello Neeraj")).toBeInTheDocument();
});