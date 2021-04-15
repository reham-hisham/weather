/* Global Variables */
const key = '0a6db9ee1c35af77d4dda59129f007ee';

const base = `https://api.openweathermap.org/data/2.5/weather?zip=`;





 




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    document.getElementById('generate').addEventListener('click', doaction);
    




function doaction (e){
    e.preventDefault();
Temperature()
.then(function addData (temp){

 
    let getfeelings = document.querySelector('#feelings');
   try{ fetch("/add",{
        method: 'POST',
        credentials: 'same-origin',
        body: {
            temp:temp,
         }
        })}catch(er){console.log(er)}
       
       try{ fetch("/all",{
            method:"GET",
        credentials: 'same-origin',
        }
       
        )
        }catch(er){console.log(er)}

    })
        .then(async function update(){

try { const r = await (fetch('/all'))  ;
        const data = await(r).json();
        
      document.getElementById('date').innerHTML = data.date;
      document.getElementById('temp').innerHTML = data.temperature;
      document.getElementById('content').innerHTML = data.content;
         
        } catch (error) {
            console.log('theres an error here =>', error);
        }
    }).catch(e=>e)


}

async function Temperature() {
    try {
    let zipcode = document.querySelector('#zip').value;
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${key}&units=metric`)
    let getcontent = document.querySelector('#feelings').value
   
      if (!zipcode){
          alert("please enter your zip code");
          return;
      }
        const data = await response.json();

        
        postData('/add', {temperature:data.main.temp, date: newDate, content: getcontent } ) 
        console.log(getcontent)
        
      
        return data.main.temp;

    }
    catch(error) {
        console.log('error here =>', error);
    }
}
// post 
const postData = async(url = '', data = {}) => {
    try{
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            temp: data.temperature,
            date: data.date,
            content: data.content
        })
    });
   
    
        const newData = await response.json();
   
        return newData;
   }   catch(e){
            console.log("the fucking error is here =>", e);
    
}}
