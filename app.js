// const display=document.getElementById('display')

// fetch('https://jsonplaceholder.typicode.com/comments')
//       .then(response => response.json())
//       .then(data =>{
//         for(let i of data){
//             const div =document.createElement('div')
//             const {id,name,email,body : title} = i
//             div.innerHTML=`
//             <h2>${name}</h2>
//             `
//             display.appendChild(div)
//             console.log(div);
//         }

        
//       })

function loaddata(){
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data =>displaydata(data))
}

function displaydata(data){
    const display=document.getElementById('display')
    data.forEach(show => {
        const div = document.createElement('div')
        // distracturing ---------------
        const {id,name,email,body:title}=show
        div.classList.add("bg-green-100")
        div.classList.add("p-3")
        div.classList.add("shadow-inner")
        div.classList.add("shadow-black")
        div.classList.add("rounded-lg")
        div.classList.add("my-5")
        div.classList.add("h-full")
        div.classList.add("flex")
        div.classList.add("flex-col")
        div.classList.add("items-center")
        div.classList.add("justify-center")
        div.innerHTML=`
        <h2 class="text-2xl text-center font-semibold mb-2">${id}</h2>
        <h2 class="text-xl text-center font-sm capitalize px-3 mb-2 text-red-500">${name}</h2>
        <h2 class="text-xl flex items-center justify-center gap-2 mb-2"><i class='bx bxs-envelope text-red-700'></i>${email}</h2>
        <button onclick="showDetails(${id})" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full">Details</button>
        
        `
        display.appendChild(div)
    })
}

const div =document.createElement('div')
function showDetails(id){
    const Details=document.getElementById('Details')
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(response=> response.json())
    .then(data=>{

        const {id,name,email,body:title}=data
        div.classList.add("bg-sky-100")
        div.classList.add("p-3")
        div.classList.add("shadow-inner")
        div.classList.add("shadow-black")
        div.classList.add("rounded-lg")
        div.classList.add("my-5")
        div.classList.add("w-full")
        div.innerHTML=`
        <h2 class="text-3xl text-center font-semibold mb-2">Id: ${id}</h2>
        <h2 class="text-xl text-center font-sm capitalize px-3 mb-2 text-red-500">Name: ${name}</h2>
        <h2 class="text-xl flex items-center justify-center gap-2 mb-2"><i class='bx bxs-envelope text-red-700'></i>Email: ${email}</h2>
        <h2 class="text-sm flex items-center justify-center gap-2 mb-2">about: ${title}</h2>
        `
        Details.appendChild(div)
        console.log(Details);
    })
}

loaddata();