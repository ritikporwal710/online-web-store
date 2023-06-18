const endDate = "23 june 2023 10:00 PM"
document.getElementById("end-date").innerText = endDate;

const val = document.querySelectorAll("input")

const clock = () =>{
    const end = new Date(endDate);
    const now = new Date();

let diff = end-now;
diff = diff/1000;


//CONVERT INTO DAYS
let day = diff/(24*60*60)       
day = Math.floor(day)
// console.log(day)
val[1].value = day;


diff = diff - day*24*60*60;
let hr = diff/(60*60)
hr = Math.floor(hr)
val[2].value = hr;

diff -= hr*60*60;
let min = diff/60;
min = Math.floor(min)
val[3].value = min

diff -= min*60;
let sec = diff;
sec = Math.floor(sec);
val[4].value = sec;


}


setInterval(() =>{
    clock()
    },1000)


setInterval(() =>{
    getColour()
},2000
)
const getColour = ()=>{
    const random = Math.floor(Math.random()*16777215)
    const randomcode = '#' + random.toString(16);
    console.log(randomcode) 
    let d = document.body.style.backgroundColor = randomcode; 
    // console.log(d)
}

