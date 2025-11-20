

//for (let i=1; i < 5; i++) {
    //console.log('hai bang')
//}

const fetchApi = async () => {
    try{
        const res = await fetch ("https://dummyjson.com/quotes");
        const data = await res.json();

        const container = document.getElementById("container");


        data.quotes.map((item) =>{
            const p = document.createElement("p");
            p.textContent = `${item.quote} ${item.author}`;
            p.style.color = 'white'
            p.classList.add('banyu');
            container.appendChild(p);

        });
    }
    catch (error) {
        console.log("Error:", error)
    }
}

fetchApi()

const container = document.getElementById('container');

container.addEventListener ('click', () => {
    container.classList.add('nain');
})


const btn = 

const nama = ['Verstappen', 'Norris', 'Russel', 123];

nama.map((item) => {
    console.log(item);
})