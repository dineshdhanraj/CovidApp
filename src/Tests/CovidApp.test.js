import React from 'react';
import { render } from "@testing-library/react-native";
import CovidApp from "../Components/CovidApp";

it("Test for checking True Condition", () => {    //------------------->Checking "Country_Name" of test id is present or not 
  const wrap = render(<CovidApp />);
  expect(wrap.getByTestId("Country_Name")).toBeTruthy();
});
