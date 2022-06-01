export default async function Service(url) {

  try{
    console.log("hi");
  const res = await fetch(url);
  const ans = await res.json();
  return ans;
  }

  catch(error)
  {
    console.log("Error Occured in Service.js File"); 
    return "Cannot GET /v2/countrie/I"
    
  }
  
}
