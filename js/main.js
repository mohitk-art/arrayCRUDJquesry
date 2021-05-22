var arrayList = [
    {fname:"Mohit", lname:"Kumar" , action:""}
]

var ID = ""

var addForm = {fname:"", lname:""}

jQuery( "#addNewJS" ).click(function() {
    appendArray()
});

function addButton(){
    let data = {fname:"", lname:"", action:"addEdit"}
    arrayList.push(data);
    arrayFunction();
    jQuery("#addButtonJS").attr("disabled",true);
}

function editButton(id){
    arrayList[id].action = "addEdit";
    arrayFunction();
}

function saveButton(){
    arrayList[ID].action = "saved";
    jQuery("#addButtonJS").removeAttr("disabled");
    arrayFunction();
    console.log("id", ID)
}


function deleteButton(i){
    if(window.confirm("Do you want to delete this row")){
        arrayList = arrayList.filter((item, j) => i !== j);
        arrayFunction();
    }
}

function inputChange(field, data, i){
    arrayList[i][field] = data;
    console.log('arry', arrayList)
}




function arrayFunction(){
    $("#tableBodyJS").remove();
    $("#tableJS").append(`<tbody id="tableBodyJS"></tbody>`)
    arrayList.map((item,i)=>{

        if(item.action == 'addEdit'){
            $("#tableBodyJS").append(`<tr class="tableRowJs">
            <td>${i+1}</td>
            <td><input type="text" required class="form-control" onchange="inputChange('fname', this.value, ${i})" value="${item.fname}" /></td>
            <td><input type="text" required class="form-control" onchange="inputChange('lname', this.value, ${i})" onkeyup="" value="${item.lname}" /></td>
            <td><button type="submit" class="btn btn-primary" id="saveButtonJs" onClick="ID = ${i}">Save</button></td>
          </tr>`);
        }
        else{
            $("#tableBodyJS").append(`<tr class="tableRowJs">
            <td>${i+1}</td>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>
                <button class="btn btn-primary mr-2" onClick="editButton(${i})">Edit</button>
                <button class="btn btn-danger" onClick="deleteButton(${i})">Delete</button>
            </td>
          </tr>`);
        }
        
    })
}

arrayFunction()

