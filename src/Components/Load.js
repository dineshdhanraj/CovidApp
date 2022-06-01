import Service from "../Service/Service";

export default async function load(url, dispatch) 
{
  const result = await Service(url);
  if (result.country) {         //Loading the json data into respective variables if country name is found (As Country Name plays Important role in finding)
    const Holder = {
      recovered: result.recovered,
      todayRecovered: result.todayRecovered,
      tests: result.tests,
      flag: result.countryInfo.flag,
      todayCases: result.todayCases,
      cases: result.cases
    };
    dispatch({ type: "data", data: Holder });
  } else {
    const Holder = {
      cases: "Not Available"
    };
    dispatch({ type: "data", data: Holder });
  }
}
