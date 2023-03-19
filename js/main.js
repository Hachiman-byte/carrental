function pop(){
	let overlay = document.getElementById('overlay');
	

	overlay.classList.add('show');

}


function save() {
    alert('Save succesfully');
    datas = JSON.parse(localStorage.getItem("datas"))?JSON.parse(localStorage.getItem("datas")):[];

    let name = document.getElementById('name');
    let company = document.getElementById('company');
    let date = document.getElementById('date');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let carname = document.getElementById('carname');
    let  datereturn = document.getElementById('datereturn');
    let radio = document.getElementById('paid');

    let objects = {
        'name':name.value,
        'company':company.value,
        'date':date.value,
        'email':email.value,
        'phone':phone.value,
        'carname':carname.value,
        'datereturn':datereturn.value,
        'radio':radio.value,
    };

    datas.push(objects);
    localStorage.setItem('datas',JSON.stringify(datas));
}

var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
document.getElementById("date").defaultValue = today;




