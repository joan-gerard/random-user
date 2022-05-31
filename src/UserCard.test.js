import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const fakeUser = [
  {
    name: {
      title: "string",
      first: "string",
      last: "string",
    },
    dob: {
      date: 'string',
      age: 24,
    },
    location: {
      street: {
        number: 222,
        name: 'string',
      },
      city: 'string',
      country: 'string',
      postcode: 12345,
    },
    picture: {
      large: 'string',
    },
  },
];

it("renders learn react link", () => {
  // act(() => {
  //   render(<UserCard users={[]} />, container);
  // });
  // expect(container.textContent).toBe("");
  act(() => {
    render(<UserCard users={fakeUser} />, container);
  });
  expect(container.textContent).toBe("");
});
