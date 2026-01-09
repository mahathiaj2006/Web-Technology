let loggedIn = false;

function login() {
    loggedIn = true;
    document.getElementById("login-status").innerText =
        "✅ Logged in successfully. Welcome!";
}

function showSlots() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("slots").classList.remove("hidden");
}

function showHome() {
    document.getElementById("slots").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}

function bookSlot(slot) {
    if (slot.classList.contains("booked")) return;

    slot.classList.remove("available", "pulse");
    slot.classList.add("booked");

    document.getElementById("booking-status").innerText =
        "🚗 Slot " + slot.innerText + " BOOKED | Live Status: ACTIVE";
}
