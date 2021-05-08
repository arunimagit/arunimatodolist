function list(){
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
          var response = JSON.parse(this.responseText);
           var output ="";
            
            for(var i=0;i<response.length;i++){
                output += "<tr>";
                output += "<td>"+ response[i].userId +"</td>";
                output += "<td>"+ response[i].id +"</td>";
                output += "<td>"+ response[i].title +"</td>";
                output += "<td>"+ '<input type="checkbox" class="checkbox" value="' + response[i].id + '"' + (response[i].completed ? 'checked' : '') + '>' + "</td";
                output += "</tr>";
            }
        
        document.getElementById("todo_list").innerHTML=output;
       }
    }
    xhttp.open("GET","http://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
    }
  // function val(){ 
  //var p= new Promise(function(resolve,reject){
    //var checked=0;
   // var check=$("[type='checkbox']:checked").length;
   // for(var i=0;i<check.length;i++){
      //  if(check[i].checked){
           // checked++;
        //}
    //}
//if(checked==5){
    //resolve("5 tasks completed")
//}
 //else{
   //    reject("select 5 task");
  // }

  //});
      //p
     //.then(function(s){
  //  alert(s);
  //})
//.catch(function(e){
  //  alert(e);
  //})
   //}

 


 
 
   
    
 
