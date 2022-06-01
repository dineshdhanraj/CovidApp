import React from 'react';
import { render } from "@testing-library/react-native";
import Home from "../Components/Home";

const data = {
  flag: "https://disease.sh/assets/img/flags/in.png",
  cases: 35708442,
  todayCases: 180438,
  recovered: 34500172,
  todayRecovered: 46569,
  tests: 690034525
};

it("Testing Cases", () => {             //--------------->Testing "Cases" of test id is present or not
  const holder = render(<Home Covid_Details={data} />);
  expect(holder.getByTestId("Cases")).toBeTruthy();      
});

it("Testing Today Cases", () => {      //--------------->Testing "Today Cases" of test id is present or not
  const holder = render(<Home Covid_Details={data} />);
  expect(holder.queryAllByTestId("Today Cases")).toBeTruthy();
});
it("Testing Recovered", () => {       //--------------->Testing "Recovered" of test id is present or not
  const holder = render(<Home Covid_Details={data} />);
  expect(holder.getByTestId("Recovered")).toBeTruthy();
});

it("Testing Today Recovered", () => { //--------------->Testing "Today Recovered" of test id is present or not
  const holder = render(<Home Covid_Details={data} />);
  expect(holder.queryAllByTestId("Today Recovered")).toBeTruthy();
});

it("Testing Tests", () => {            //--------------->Testing "Tests" of test id is present or not
  const holder = render(<Home Covid_Details={data} />);
  expect(holder.getByTestId("Tests")).toBeTruthy();
});

it("Failing Case Test", () => {       
  const holder = render(<Home Covid_Details={data} />);
  expect(holder.queryByTestId("No Data Available")).toBeNull();
});