// repoLink: https://github.com/Tanvirahmed321110/assiment-6

document.getElementById('button').addEventListener('click',function(){
    const input=document.getElementsByTagName('input')[0]
    const inputValue=input.value
    input.value=''
    

    const url=`https://openlibrary.org/search.json?q=${inputValue}

    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayShow(data.docs))
})


const displayShow=(infor)=>{
    const mainTag=document.getElementById('div')
    mainTag.textContent=''
   for(const info of infor){
       const newTag=document.createElement('div')
       newTag.classList.add('new-tag')
       newTag.innerHTML=`<h3>title : ${info.title}</h3>
                         <p><h4>author Name</h4> :  ${info.author_name}</p>  
                         <p><h4>first publish</h4> : ${info.publish_year}</p>
                         <p><h4>publish date</h4> :  ${info.publish_date}</p>
                         <button onclick="btn('${info.seed}')">Details</button>
                           `
       mainTag.appendChild(newTag)
       console.log(info)
    }
}


const btn=seed=>{
    const main=document.getElementById('main')
    const tag=document.createElement('p')
    tag.innerHTML=`<p>${seed}</p>`
    main.appendChild(tag)
    console.log(seed)
}

