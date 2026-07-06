/* ==========================================
   SOIKAT BCS HUB
   Live Bangladesh Clock
========================================== */

function updateClock() {

    const now = new Date();

    const weekday = now.toLocaleDateString("en-GB", {
        weekday: "long",
        timeZone: "Asia/Dhaka"
    });

    const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Dhaka"
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "Asia/Dhaka"
    });

    document.getElementById("weekday").textContent = weekday;
    document.getElementById("date").textContent = date;
    document.getElementById("time").textContent = time;
}

updateClock();
setInterval(updateClock, 1000);
