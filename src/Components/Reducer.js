export default function reducer(state, action) 
{
  //---------------------> Reducer to Load obtained Data by replacing previous available data
  switch (action.type) {
    case "data":
      return { ...state, data: action.data };
    case "country":
      return { ...state, country: action.data };
    default:
      throw new Error();
  }
}
