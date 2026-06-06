import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("renders the home page heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByText(/CIITM Desktop v1/i)).toBeInTheDocument();
  });
});
