console.log("App Loaded");
function updateClock(){

    const now = new Date();

    const date = now.toLocaleDateString("en-GB",{
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        timeZone:"Asia/Dhaka"
    });

    const time = now.toLocaleTimeString("en-US",{
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
        hour12:true,
        timeZone:"Asia/Dhaka"
    });

    document.getElementById("todayDate").innerHTML=date;

    document.getElementById("liveTime").innerHTML=time;

}

setInterval(updateClock,1000);

updateClock();
