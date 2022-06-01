import reducer from "../Components/Reducer";

const Loader = {                                  //--------------------------> Providing Initial Data as state
  flag: "",
  todayCases: "",
  cases: "",
  recovered: "",
  todayRecovered: "",
  tests: ""
};

const Holder = {                                    //--------------------------> Providing Final Data for Dispatch 
  cases: "Not Available",
  flag: "",
  todayCases: "",
  recovered: "",
  todayRecovered: "",
  tests: ""
};

it("Testing Reducer success", () => {                 //------------------------->Testing does dispatch is working properly or not
  const result = reducer(
    { country: "", data: Loader },
    { type: "country", data: Holder }
  );
  expect(result.country.cases).toEqual("Not Available");
});
