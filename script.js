 function updateClock() {
    const clock = document.getElementById('clock-display');
    if (!clock) return;

    const now = new Date();

    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    const ampm = h >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    h = h % 12;
    h = h ? h : 12; // if 0 → 12

    h = String(h).padStart(2, '0');

    clock.innerText = `${h}:${m}:${s} ${ampm}`;
}

// Run immediately + every second
updateClock();
setInterval(updateClock, 1000);