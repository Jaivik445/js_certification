let Cuttent_S = window.localStorage.getItem("loginS");
function logO(){
    window.localStorage.setItem("loginS","false")
    window.location.href="sign_in.html"
}

let tab_new = document.querySelector(".tab2")
if(Cuttent_S =="false"){
    tab_new.style.display="none";
    window.location.href="sign_in.html"


}

const url1 ="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products";

let tableBody1 = document.getElementById("table1_body"); 
function TABLE1(items){
    items.forEach((elements)=>{
        const element11 = document.createElement("tr");
              element11.classList.add("data-row");
              element11.setAttribute("id",elements.id);
              element11.appendChild(createColumn(elements.id, 1));
              element11.appendChild(createColumn(elements.medicineName, 2));
              element11.appendChild(createColumn(elements.medicineBrand, 3));
              element11.appendChild(createColumn(elements.expiryDate, 4));
              element11.appendChild(createColumn(elements.unitPrice, 5));
              element11.appendChild(createColumn(elements.stock, 6));


              tableBody1.appendChild(element11);
            });
}

// console.log(tableBody1)


function getUser(){
    const items = SecinitializeTable();
    $.get(url1, (items) =>{
        TABLE1(items);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0");
        var yyyy = today.getFullYear();

        today= yyyy + "-" + mm + "-" + dd;
        let expire = document.getElementById("expireDate").Checked;
        let lowStock = document.getElementById("lowStock").Checked;
        var tableData;

        if(expire && lowStock){
            document.getElementById("table1_body").innerHTML= "";

            tableData = items.filter(function(element){
                var convertDate = dateFormate(element.expiryDate);
                return convertDate < today || element.stock < 100;
               
            });
             setDataintoTable(tableData);
        }  
        else if(expire){
            document.getElementById("table1_body").innerHTML="";
            tableData = items.filter(function(element){
                var convertDate = dateFormate(element.expiryDate);
                return convertDate < today;
            });
            setDataintoTable(tableData);
        } 
        else if (lowStock){
            document.getElementById("table1_body").innerHTML="";
            tableData = items.filter(function(element){
                var convertDate = dateFormate(element.expiryDate);
                return element.stock < 100;
            });
                setDataintoTable(tableData);
        }


    });
}





function createColumn(data, index){
    const column= document.createElement("td");
    column.classList.add(`column${index}`)
    column.innerText=data;
    return column;
}
function SecinitializeTable(){

     let res;
     return res;
    // $.get(url,(respose) =>{
    //     TABLE(respose);
    // });
}

function dateFormate(date){
    var d = new Date(date);

    month1 = "" + (d.getMonth() + 1);
    day1 = "" + d.getDate();
    year1 = d.getFullYear();

    if (month1.length < 2) month1 = "0" + month1;
    if(day1.length < 2) day1 = "0" + day1;

    return[ year1, month1,day1].join("-");

}

function setDataintoTable(items){
    items.forEach((elements)=>{
        const element11 = document.createElement("tr");
              element11.classList.add("data-row");
              element11.setAttribute("id",elements.id);
              element11.appendChild(createColumn(elements.id, 1));
              element11.appendChild(createColumn(elements.medicineName, 2));
              element11.appendChild(createColumn(elements.medicineBrand, 3));
              element11.appendChild(createColumn(elements.expiryDate, 4));
              element11.appendChild(createColumn(elements.unitPrice, 5));
              element11.appendChild(createColumn(elements.stock, 6));


              tableBody1.appendChild(element11);
            });
}


















