function convertTemperature() {
  const temperature = parseFloat(document.getElementById('temperature').value);
  const unit = document.getElementById('unit').value;
  let result = '';

  if (unit === 'celsius') {
    result = `${temperature}°C is ${((temperature * 9/5) + 32).toFixed(2)}°F`;
  } else if (unit === 'fahrenheit') {
    result = `${temperature}°F is ${((temperature - 32) * 5/9).toFixed(2)}°C`;
  }

  document.getElementById('result').textContent = result;
}
