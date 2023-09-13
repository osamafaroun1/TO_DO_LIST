var inputBox=document.getElementById("input-box");
var listContainer=document.getElementById("list-container");




function addTask(){
   if(inputBox.value!=""){
    let li=document.createElement('li');
      li.innerHTML=inputBox.value;
      listContainer.appendChild(li);

      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      li.appendChild(span);
   }else{
        alert('please input data');
       
   }

   inputBox.value='';
   saveData();
}
  
listContainer.addEventListener('click',function(event){
  if(event.target.tagName==='LI'){
     event.target.classList.toggle('checked');
     saveData();

  }else if(event.target.tagName==='SPAN') { 
  event.target.parentElement.remove();
  saveData();


  }
});

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);

}

function ShowData(){
   listContainer.innerHTML=localStorage.getItem('data');

}

ShowData();
  

   



