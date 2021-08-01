import { render, screen } from "@testing-library/react";
//import App from './App';
import {
  mixAndIndex,
  genrateRandom20,
  make2Digits,
  isAlphaNumeric,
} from "./functions/encrypt";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
test("mixArray", () => {
  expect(mixAndIndex("abcdefg", "123")).toEqual(3);
  //expect(mixAndIndex(2, 2)).toEqual(4);
});
test("random20", () => {
  expect(genrateRandom20()).toEqual(3);
  //expect(mixAndIndex(2, 2)).toEqual(4);
});
test("make2Digits", () => {
  expect(make2Digits([1, 2, 4, 10])).toEqual(3);
  //expect(mixAndIndex(2, 2)).toEqual(4);
});

test("isAlphanumeric", () => {
  expect(isAlphaNumeric("~")).toEqual(3);
  //expect(mixAndIndex(2, 2)).toEqual(4);
});
