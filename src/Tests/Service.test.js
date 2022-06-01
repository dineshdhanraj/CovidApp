import Service from "../Service/Service";

it("Api Testing by providing wrong URL", async () => {
  fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          message: "Country not found or doesn't have any cases"
        })
    })
  );
  const url =
    "https://corona.lmao.ninja/v2/countries/I?yesterday=true&strict=true&query";
  expect(await Service(url)).toStrictEqual({
    message: "Country not found or doesn't have any cases"
  });
});

it("Api Testing Clashes", async () => {
      fetch=jest.fn(()=>Promise.reject(
              {
                  json:()=>Promise.reject(),
              }
          ));
          const url="https://api.instantwebtools.net/v/airlines";
          expect(await Service(url)).toStrictEqual("Cannot GET /v2/countrie/I");
               
  });
 


it("Api Testing by providing Right URL", async () => {
  fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          updated: 1641389138533,
          country: "India",
          countryInfo: {
            _id: 356,
            iso2: "IN",
            iso3: "IND",
            lat: 20,
            long: 77,
            flag: "https://disease.sh/assets/img/flags/in.png"
          },
          cases: 35018358,
          todayCases: 58097,
          deaths: 482551,
          todayDeaths: 534,
          recovered: 34321803,
          todayRecovered: 26396,
          active: 214004,
          critical: 8944,
          casesPerOneMillion: 25005,
          deathsPerOneMillion: 345,
          tests: 682428595,
          testsPerOneMillion: 487290,
          population: 1400457794,
          continent: "Asia",
          oneCasePerPeople: 40,
          oneDeathPerPeople: 2902,
          oneTestPerPeople: 2,
          activePerOneMillion: 152.81,
          recoveredPerOneMillion: 24507.56,
          criticalPerOneMillion: 6.39
        })
    })
  );
  const url =
    "https://corona.lmao.ninja/v2/countries/India?yesterday=true&strict=true&query";
  expect(await Service(url)).toStrictEqual({
    updated: 1641389138533,
    country: "India",
    countryInfo: {
      _id: 356,
      iso2: "IN",
      iso3: "IND",
      lat: 20,
      long: 77,
      flag: "https://disease.sh/assets/img/flags/in.png"
    },
    cases: 35018358,
    todayCases: 58097,
    deaths: 482551,
    todayDeaths: 534,
    recovered: 34321803,
    todayRecovered: 26396,
    active: 214004,
    critical: 8944,
    casesPerOneMillion: 25005,
    deathsPerOneMillion: 345,
    tests: 682428595,
    testsPerOneMillion: 487290,
    population: 1400457794,
    continent: "Asia",
    oneCasePerPeople: 40,
    oneDeathPerPeople: 2902,
    oneTestPerPeople: 2,
    activePerOneMillion: 152.81,
    recoveredPerOneMillion: 24507.56,
    criticalPerOneMillion: 6.39
  });
});
