
// Required: Show current date and time
function showDateTime() {
  const now = new Date();
  document.getElementById("currentDateTime").textContent = "Current Date and Time: " + now.toLocaleString();
}

// Required: Send alert
function confirmSubmission() {
  alert("Your reservation has been submitted!");

  // Required: Use Math method
  const luckyNumber = Math.floor(Math.random() * 100);
  console.log("Lucky Reservation Number: " + luckyNumber);

  // Required: Delay command
  setTimeout(() => {
    console.log("Thank you for reserving with us!");
  }, 2000);

  // Required: Convert number to string
  const guests = document.getElementById("guests").value;
  const guestText = "You selected " + guests.toString() + " guest(s).";
  console.log(guestText);

  // Required: Countdown
  let count = 5;
  const countdown = setInterval(() => {
    if (count === 0) {
      console.log("Redirecting now...");
      clearInterval(countdown);
    } else {
      console.log("Redirecting in " + count + " seconds...");
      count--;
    }
  }, 1000);
}
