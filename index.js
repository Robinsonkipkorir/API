const key=document.getElementById("key");
key.addEventListener("keypress",()=>{
    const value=key.value;

   
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '53e52711f8msh96f12db419376b4p1ab8e9jsn6730eb3dc0cb',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

fetch(`https://netflix54.p.rapidapi.com/search/?query=${value}&offset=0&limit_titles=50&limit_suggestions=20&lang=en`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    
});

