const stateDefaults = {
    "Alabama": { temperature: 53, humidity: 58, rainfallIntensity: 0, imageSrc: "img/flood/alabama.png" },
    "Alaska": { temperature: 46, humidity: 87, rainfallIntensity: 34, imageSrc: "img/flood/alaska.png" },
    "Arizona": { temperature: 89, humidity: 22, rainfallIntensity: 1, imageSrc: "img/flood/arizona.png" },
    "Arkansas": { temperature: 54, humidity: 69, rainfallIntensity: 1, imageSrc: "img/flood/arkansas.png" },
};

function populateInputFields() {
    const stateInput = document.getElementById("state");
    const temperatureInput = document.getElementById("temperature");
    const humidityInput = document.getElementById("humidity");
    const rainfallIntensityInput = document.getElementById("rainfallIntensity");
    const stateImage = document.getElementById("state-image");

    const selectedState = stateInput.value;

    if (selectedState in stateDefaults) {
        const defaultValues = stateDefaults[selectedState];
        temperatureInput.value = defaultValues.temperature;
        humidityInput.value = defaultValues.humidity;
        rainfallIntensityInput.value = defaultValues.rainfallIntensity;
        stateImage.src = defaultValues.imageSrc;
    } else {
        temperatureInput.value = "";
        humidityInput.value = "";
        rainfallIntensityInput.value = "";
        stateImage.src = "";
    }
}

function assessFloodRisk() {
    const stateInput = document.getElementById("state");
    const temperatureInput = document.getElementById("temperature");
    const humidityInput = document.getElementById("humidity");
    const rainfallIntensityInput = document.getElementById("rainfallIntensity");
    const resultDiv = document.getElementById("result");

    const selectedState = stateInput.value;
    const temperature = parseFloat(temperatureInput.value);
    const humidity = parseFloat(humidityInput.value);
    const rainfallIntensity = parseFloat(rainfallIntensityInput.value);

    if (!isNaN(temperature) && !isNaN(humidity) && !isNaN(rainfallIntensity)) {
        const floodRisk = assessFloodRiskBasedOnFactors(temperature, humidity, rainfallIntensity);
        resultDiv.innerHTML = `<p>Flood Risk Assessment for ${selectedState}: ${floodRisk}</p>`;
    } else {
        resultDiv.innerHTML = `<p>Invalid input. Please enter numeric values for all factors.</p>`;
    }
}

function assessFloodRiskBasedOnFactors(temperature, humidity, rainfallIntensity) {
    const rainfallLowThreshold = 5; 
    const rainfallModerateThreshold = 30;
    const temperatureHighThreshold = 90; 
    const humidityHighThreshold = 80;

    if (rainfallIntensity >= rainfallModerateThreshold) {
        return "Severe risk of flooding";
    } else if (rainfallIntensity >= rainfallLowThreshold) {
        if (temperature >= temperatureHighThreshold || humidity >= humidityHighThreshold) {
            return "Moderate risk of flooding";
        } else {
            return "Low risk of flooding";
        }
    } else {
        return "Low risk of flooding";
    }
}