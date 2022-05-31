import React from "react";
import ReactDOM from "react-dom";
import {
  render,
  screen,
  act,
  fireEvent,
  cleanup,
} from "@testing-library/react";
import App from "./App";
import { sum } from "./utils";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Random User App/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Testing sum", () => {
  it("should equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("also should equal 4", () => {
    expect(sum(2, 2)).toBe(4);
  });
});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        gender: "test",
        email: "test2",
      }),
  })
);

// describe("App", () => {
//   it("loads the data on mount", async () => {});
//   await act(async() => render(<App />))
//   expect(screen.getAllByText("test2")).toBeInTheDocument()
// });

// afterEach(cleanup)

// it('Text in state is changed when button clicked', () => {
//   const { getByText } = render(<App />);

//   expect(getByText(/Initial/i).textContent).toBe("Initial State")

//   fireEvent.click(getByText("State Change Button"))

//   expect(getByText(/Initial/i).textContent).toBe("Initial State Changed")
// })
