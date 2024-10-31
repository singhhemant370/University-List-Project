let button = document.querySelector("button");

let url = "http://universities.hipolabs.com/search?name=";


button.addEventListener("click", async ()=>{
    let country = document.querySelector("#country").value;
    // let state = document.querySelector("#state").value;
    let list = await getList(country);
    console.log(list.data);
    let listArr = list.data;

    let ul = document.querySelector("ul");
    ul.innerText = "";
    for(list of listArr){
        let li = document.createElement("li");
        li.innerText = list.name;
        ul.appendChild(li);
        console.log(list);
    }
});


async function getList(country) {
    try{
        let res = await axios.get(url+country);
        return res;
    }catch(e){
        console.log("error", e);
    }
}