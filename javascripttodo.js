let afishimi=document.getElementById("afisho");
let afishimi2=document.getElementById("afisho2");

var task={
   id:String,
   titulli:String,
   ora:String,
   date:String
}

var i=0
function add(){

   let inputtitulli = document.getElementById("titulli1").value;
   let inputdata = document.getElementById("data1").value;
   inputora=document.getElementById("ora1").value;
   var d= new Date().getTime();
    task = {
       titulli: inputtitulli,
       ora: inputora,
       date:inputdata,
       id:d
   }
   let arrays = localStorage.getItem('te dhena')
   arrays = JSON.parse(arrays) || []
   arrays.push(task);
   arrays=JSON.stringify(arrays)
   localStorage.setItem('te dhena',arrays)
   location.href="html1.html"
}

storagearray=[];
storagearray=localStorage.getItem('te dhena');
storagearray=JSON.parse(storagearray)
console.log(storagearray)
storagearray.forEach(item => {
   console.log(item.task)
   afishimi.innerHTML +=
        `
        
        <table >
        <th scope="col">${item.titulli}</th>
        <th scope="col">${item.id}</th>
        <th scope="col">${item.date}</th>
        <th scope="col">${item.ora}</th>
        <th scope="col"><button class="btn2">Edit</button></th>
        <th scope="col"><input type="checkbox"></th>
        <th scope="col"> <button class="btn2" onclick="deleteitem(${item.id})">delete</button></th>
      </table>
        `
    });


      deletelocalstorage=()=>{
       alert("historiku i sherbimeve tuaj sapo u fshi");
       localStorage.removeItem('te dhena');
       location.href="html1.html"
    }


     function deleteitem(id){
       let tedhena=localStorage.getItem('te dhena');
       tedhena=JSON.parse(tedhena) || [];
       const task= tedhena.findIndex( item=> item.id ===id);
       console.log(task)
       bbb=tedhena.filter(item =>item.id ===id)
       tedhena.splice(bbb,1);
       tedhena=JSON.stringify(tedhena)
       localStorage.setItem('te dhena',tedhena);
       location.href="html1.html"

    }

  
