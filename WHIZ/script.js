// Simulated "Find Nearby Rides" with Location API
function showLocation() {
  const output = document.getElementById("location-output");

  if (!navigator.geolocation) {
    output.textContent = "Geolocation is not supported by your browser.";
    return;
  }

  output.textContent = "Detecting location...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      output.innerHTML = 📍 Your location: <b>${latitude.toFixed(4)}, ${longitude.toFixed(4)}</b><br>Nearby rides are being fetched...;
      simulateRides();
    },
    () => {
      output.textContent = "Unable to retrieve your location.";
    }
  );
}

// Simulate nearby rides
function simulateRides() {
  setTimeout(() => {
    alert("3 rides found nearby: Car (Economy), Bike, and Shego available!");
  }, 1500);
}