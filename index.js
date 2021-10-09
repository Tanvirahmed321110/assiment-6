// repoLink: https://github.com/Tanvirahmed321110/assiment-6

document.getElementById('button').addEventListener('click',function(){
    const input=document.getElementsByTagName('input')[0]
    const inputValue=input.value
    input.value=''
    

    const url=`https://openlibrary.org/search.json?q=javascript

    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayShow(data.docs))
})


const displayShow=(infor)=>{
   for(const info of infor){
       const mainTag=document.getElementById('div')
       const newTag=document.createElement('div')
       const newTagClass=newTag.classList.add('new-Tag')
       newTag.innerHTML=`<h3>${info.title}</h3>
                         <p>${info.author_name}</p>  `
       console.log(info.title)
   }
   
}