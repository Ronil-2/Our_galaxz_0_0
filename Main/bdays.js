let emptyBox = document.querySelector("#emptyBox")

let date = new Date();       


        day = date.getDate();
        month = date.getMonth()+1;
        
        if(day < 10) {
        day = "0" + day;
        }
        if(month < 10) {
    month = "0" + month;
        }
        let finnDate = `${day}/${month}`

let bdays ={
    Ronil: ["02/09", "./images/admin1.png"],
    Lakshita: ["09/07", "./images/admin2.png"],
    Palak: ["24/01", "./images/user1.png"],
    Archi: ["26/04", "./images/user2.png"],
    Pratik: ["27/08", "./images/user3.png"],
    Ganesh: ["01/05", "./images/user7.png"],
    Sanjhi: ["28/11", "./images/user11.png"],
    _Aditya_: ["01/01", "./images/user13.png"],
    Aashi: ["17/04", "./images/user14.png"],
    Vinny: ["04/04", "./images/user15.png"],
    Ritik: ["21/11", "./images/user16.png"],
    Manish: ["21/12", "./images/user17.png"],
    Angelina: ["01/06", "./images/user19.png"],
    Niharika: ["29/12", "./images/user20.png"],
    Aditya: ["06/06", "./images/user21.png"]
}


let wishes = [
    "Happy Birthday! 🎉 I hope your day is filled with joy, laughter, and all the things you love most. Here’s to a fantastic year ahead!",
    "Wishing you a wonderful birthday filled with happiness and all your favorite things. May your year be as amazing as you are!",
    "Happy Birthday! May your day be as bright and special as you are, and may the year ahead be filled with exciting adventures and endless joy.",
    "Happy Birthday! I hope your day is full of smiles and your year ahead is filled with success and happiness. Enjoy every moment!",
    "Happy Birthday! Wishing you a day full of joy and a year ahead full of success.",
    "Happy Birthday! May your special day be filled with laughter, love, and all your favorite things. Here’s to celebrating you and the amazing year ahead. Enjoy every moment!",
    "Happy Birthday! May your day be as bright as your smile and as wonderful as you are. Cheers to a fantastic year ahead filled with joy and new adventures!"
]


for (let name in bdays) {
    if (bdays[name][0] == finnDate) {
        console.log(`True - It's ${name}'s birthday today!`);
        img = `" ${bdays[name][1]} "`
        
        emptyBox.innerHTML = emptyBox.innerHTML + `<center> <div id="msgBox">
    <center><img src= ${img}> </center>
    <center> 
        <p> HAPPY BIRTHDAY </p>
        <p class="name">${name}</p> 
        <p> ${wishes[Math.floor(Math.random() * wishes.length)]} </p>
    </center>
      </div> </center>` 
    }
}


   