let Cuttent_S = window.localStorage.getItem("loginS");
function logO(){
    window.localStorage.setItem("loginS",false)
    window.location.href="sign_in.html"
}

let tab_new = document.querySelector(".tab1")
if(status=="false"){
    tab_new.style.display="none";
    window.location.href="sign_in.html"


}

const url ="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";

let tableBody = document.getElementById("table_body"); 
function TABLE(items){
    items.forEach((elements)=>{
        const element1 = document.createElement("tr");
              element1.classList.add("data-row");
              element1.setAttribute("id",elements.id);
              element1.appendChild(createColumn(elements.id, 1));
              element1.appendChild(createColumn(elements.customerName, 2));
              element1.appendChild(
                createColumn(elements.orderDate + " " + elements.orderTime, 3)
              );
              element1.appendChild(createColumn(elements.amount, 4));
              element1.appendChild(createColumn(elements.orderStatus, 5));

              tableBody.appendChild(element1);
            });
}

function createColumn(data, index){
    const column= document.createElement("td");
    column.classList.add(`column${index}`)
    column.innerText=data;
    return column;
}
function initializeTable(){
    $.get(url,(respose) =>{
        TABLE(respose);
    });
}
initializeTable();
$(document).ready(function(){
    $(".option").on("click", function(){
        $("#table_body tr").hide();
        var flag =1;
        $("input:checkbox[name=name]:checked").each(function(){
            flag = 0;
            var value = $(this).val().toLowerCase();

            $("#table_body tr").filter(function (){
                if($(this).text().toLowerCase().indexOf(value)> -1) $(this).show();
            });
        });
        if(flag == 1) $("#table_body tr").hide();
    })
})
