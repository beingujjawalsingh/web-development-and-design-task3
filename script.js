function convert() {
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const input = parseFloat(document.getElementById("temperature").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(input)) {
    resultDiv.textContent = "❌ Enter a valid number!";
    resultDiv.style.color = "crimson";
    return;
  }

  let kelvin;

  // Convert from original unit to Kelvin
  switch (from) {
    case "C":
      kelvin = input + 273.15;
      break;
    case "F":
      kelvin = (input + 459.67) * 5 / 9;
      break;
    case "K":
      kelvin = input;
      break;
    case "R":
      kelvin = input * 5 / 9;
      break;
  }

  // Convert Kelvin to target unit
  let finalValue, symbol;
  switch (to) {
    case "C":
      finalValue = kelvin - 273.15;
      symbol = "°C";
      break;
    case "F":
      finalValue = kelvin * 9 / 5 - 459.67;
      symbol = "°F";
      break;
    case "K":
      finalValue = kelvin;
      symbol = "K";
      break;
    case "R":
      finalValue = kelvin * 9 / 5;
      symbol = "°R";
      break;
  }

  resultDiv.textContent = `✅ ${finalValue.toFixed(2)} ${symbol}`;
  resultDiv.style.color = "#2b2b2b";
}

function switchUnits() {
  const fromSelect = document.getElementById("fromUnit");
  const toSelect = document.getElementById("toUnit");

  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
}
