let myTable = document.querySelector("#myTable");
let date = document.querySelector("#date");
let expense = document.querySelector("#number");
let myArray = [];
let select = document.querySelector("#sectorItem");
let btn = document.querySelector("button");
btn.addEventListener("click", setItem);
let data, sector;
let tableData = document.querySelector("tbody");


// setItem in storage
function setItem() {
    let value = expense.value;
    changeDate();
    changeSector();
    
    if(value !== "" && sector !== "" && data !== "") {
    myArray.push(sector);
    myArray.push(value);
    console.log(myArray);
    localStorage.setItem(data,JSON.stringify(myArray));
    }
    location.reload();

    
}
function changeSector() {
    sector = select.value;
    console.log(sector);
}
function changeDate(val) {
    data = date.value
}

function display() {
    
    for(let i = 0; i <=localStorage.length; i++) {
        let keys = localStorage.key(i);
        console.log(keys);
        let value = localStorage.getItem(keys);
        value = JSON.parse(value);
        console.log(value);
        if(keys !== "" && value !== "" && keys!== null && value !== null) {
        let row0 = myTable.insertRow(-1);
        let cell0 = row0.insertCell(0);
        let cell1 = row0.insertCell(1);
        let cell2 = row0.insertCell(2);
        let cell3 = row0.insertCell(3);
        
         cell0.innerHTML = keys;
         cell1.innerHTML = `${value[0]}`;
         cell2.innerHTML = `${value[1]}`;
         cell3.innerHTML = `<button>X</buttton>`
        }
    }

}
display();



function editData() {
 let tableDatas = Array.from(tableData.children);
 tableDatas.forEach((data,index) => {
    
    data.addEventListener("click", ()=> {
        let listing = Array.from(data.children);
        changeSector();
        date.value = listing[0].innerHTML;
        sector.value = select.value;
        expense.value = listing[2].innerHTML;
    })
 })
 
 }

editData();
function Delete() {
    let tableDatas = Array.from(tableData.children);
    tableDatas.forEach((data,index) => {
        
        data.lastElementChild.addEventListener("click", () => {
        localStorage.removeItem(data.firstElementChild.innerHTML)
        data.parentNode.deleteRow(data.rowIndex);

            
        })
    })
}
Delete();
    

