function convert() {
    const inches = parseFloat(document.getElementById('inchesInput').value);
    const meters = inches * 0.0254;
    document.getElementById('result').innerText = `${inches} inches = ${meters.toFixed(5)} meters.`;
}