async  function getdata(){
  const response = await fetch("products.json");
  const myObject = await response.json();
  return myObject;
}

const out = document.getElementById("app");
const input = document.getElementById("value");


async function display(){
  const data = await getdata();
  // console.log(JSON.parse());
  const search = input.value;
  
  const mapdata = data.products.filter((eventData)=> {
    if(search == ""){return eventData} else if(eventData.Name.toLowerCase() === search.toLowerCase()){
      return eventData;
    }else{
      return false;
    }
  }).map((object) => {
      const {Name , Price, Location } = object;

     return (`<h1>${Name}</h2>
            <h1>${Price}</h1>
            <h1>${Location}</h1>
            <button id ="hello" onClick="{()=>{call(${Name})}}">Submit</button>
            `
            )
            
  }).join(" ");
 

  out.innerHTML = mapdata == false ? "Not found": mapdata; 
}

  // console.log(e.target)
function call(name){
  console.log("hello",name);
}
 

display();

input.addEventListener('change',function getdata(){
  display();
})



