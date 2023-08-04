let btn=document.getElementById("submit");
let list=document.getElementById("listcontent")


let index=0,arr;
function additems(title,content)
{
    let obj={
        title,
        content,
    }
    localStorage.setItem("Todo",JSON.stringify([...JSON.parse(localStorage.getItem("Todo")||"[]"),obj]))
}
btn.addEventListener("click",(event)=>
{
    event.preventDefault();
    let title=document.getElementById("title").value;
    let content=document.getElementById("content").value;
    if(btn.value==="Submit"){
        if(title.length>0&&content.length>0)
        {
            // dislist.style.display="block"
            additems(title,content)
             arr=JSON.parse(localStorage.getItem("Todo"))
            addcards(arr)
            document.getElementById("title").value=""
            document.getElementById("content").value=""
        }
        else{
            alert("Please enter the title and content")
        }
        console.log("submit")

    }

    else{
        console.log("updtae")
    btn.value="Submit"
        change(index)
        console.log(arr)
        addcards(arr)
        title.value=""
        content.value=""
    }
    
  
    
  
})
function addcards(arr)
{
//     var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = date+' '+time;
    // console.log(title)
    
    list.innerHTML="";
    for(var i=0;i<arr.length;i++)
    {
        let maincont=document.createElement("div");
        maincont.setAttribute("class","maincont");
        let subcontainer=document.createElement("div");
        subcontainer.setAttribute("class","subcont");
        // subcontainer.setAttribute("onclick","showcard(this)");
        let para=document.createElement("p");
        // let para2=document.createElement("p");
        para.setAttribute("id","subpara");
        // para2.setAttribute("id","subpara2");
        let s_no=document.createElement("span");
        s_no.innerHTML=i;
        para.innerHTML=arr[i].title
        let deletebutton =document.createElement("button");
        let updatebutton =document.createElement("button");
        // updatebutton.setAttribute("onclick","fun(this)");
        updatebutton.onclick=()=>{
            fun(maincont,i)
            index=s_no.innerText;
        }
        deletebutton.setAttribute("id","deletebutton");
        updatebutton.setAttribute("id","update");
        // let delbutton =document.createElement("button");
        deletebutton.setAttribute("onclick","funter(this)");
        deletebutton.innerHTML="delete"
        updatebutton.innerHTML="update"
        subcontainer.appendChild(para);
        // subcontainer.appendChild(para2);
        maincont.appendChild(subcontainer);
        maincont.appendChild(deletebutton);
        maincont.appendChild(updatebutton);
        list.appendChild(maincont)
        
      
        
    }
    
    
    
}

document.addEventListener("DOMContentLoaded",()=>{
    let data=JSON.parse(localStorage.getItem("Todo"));
    arr=data
    addcards(arr);
});
function funter(del)
{
    console.log(del)
    let deletediems = del.parentNode.firstElementChild.firstElementChild.innerHTML;
    console.log(deletediems)
    let item=arr.find((val)=>
    {
        return val.title==deletediems;
    })
    let index=arr.findIndex((val)=>val.title==item.title)
    console.log(index)
    arr.splice(index,1)
    console.log(arr)
    localStorage.removeItem("Todo")
    arr.forEach(element => {
        localStorage.setItem("Todo",JSON.stringify([...JSON.parse(localStorage.getItem("Todo")||"[]"),element]))
    });
    
     del.parentNode.remove()
     arr=JSON.parse(localStorage.getItem("Todo"))
    addcards(arr)
}

function fun(update,i)
{
    let updateiems = update.firstElementChild.innerText;
    console.log(updateiems,i)
    console.log(arr)
    let item=arr.find((val)=>
    {
        return val.title==updateiems;
    })
    console.log(item)
   console.log(arr)
    let title=document.getElementById("title");
    let content=document.getElementById("content");
    
    title.value=item.title
    content.value=item.content;
    btn.value="update"


}

function change(i){
    console.log(i)
    btn.value="Submit"
    let title=document.getElementById("title").value;
    let content=document.getElementById("content").value;
    arr[i]["title"]=title;
    arr[i]["content"]=content;
    localStorage.removeItem("Todo")
    arr.forEach(element => {
        localStorage.setItem("Todo",JSON.stringify([...JSON.parse(localStorage.getItem("Todo")||"[]"),element]))
    });
    console.log(arr);

   

}