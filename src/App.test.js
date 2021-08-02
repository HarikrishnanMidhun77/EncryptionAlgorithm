import { render, screen } from "@testing-library/react";
//import App from './App';
import {
  mixAndIndex,
  genrateRandom20,
  make2Digits,
  isAlphaNumeric,
} from "./functions/encrypt";
import { decode10to2, decode } from "./functions/decrypt";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test("mixArray", () => {
//   expect(mixAndIndex("abcdefg", "123")).toEqual(3);
//   //expect(mixAndIndex(2, 2)).toEqual(4);
// });
// test("random20", () => {
//   expect(genrateRandom20()).toEqual(3);
//   //expect(mixAndIndex(2, 2)).toEqual(4);
// });
// test("make2Digits", () => {
//   expect(make2Digits([1, 2, 4, 10])).toEqual(3);
//   //expect(mixAndIndex(2, 2)).toEqual(4);
// });

// test("isAlphanumeric", () => {
//   expect(isAlphaNumeric("~")).toEqual(3);
//   //expect(mixAndIndex(2, 2)).toEqual(4);
// });

test("decode10to2", () => {
  expect(decode10to2("12456534")).toEqual(3);
  //expect(mixAndIndex(2, 2)).toEqual(4);
});
test("decode", () => {
  expect(
    decode([
      20, 18, 12, 14, 13, 13, 14, 28, 11, 10, 10, 15, 20, 18, 12, 15, 21, 13,
      14, 17,
    ])
  ).toEqual(3);
  //expect(mixAndIndex(2, 2)).toEqual(4);
});
