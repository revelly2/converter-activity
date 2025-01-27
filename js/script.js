function convert() {
    const amount = parseFloat(document.getElementById('php').value);
    const rates = { XRP: 0.0060, USDT: 0.017, DOGE: 0.05427, TRX: 0.0722 };

    if (!amount || amount <= 0) {
        alert("Test.");
        return;
    }

    document.getElementById('xrp').value = (amount * rates.XRP);
    document.getElementById('usdt').value = (amount * rates.USDT);
    document.getElementById('doge').value = (amount * rates.DOGE);
    document.getElementById('trx').value = (amount * rates.TRX);
}
