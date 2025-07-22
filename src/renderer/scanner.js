// USB HID Barcode Scanner Handler for Electron Kiosk
// Listens for global keyboard events and processes barcode scans

const SCAN_TIMEOUT = 300; // ms
let barcodeBuffer = '';
let scanTimer = null;

function handleBarcode(barcode) {
  if (!barcode || barcode.length < 6) return; // Ignore short/invalid scans
  // Navigate to product details page with barcode as query param
  window.location.href = `product-details.html?barcode=${encodeURIComponent(barcode)}`;
}

function onKeyDown(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  if (!document.querySelector('.scanner-main')) return;
  if (e.key.length === 1) {
    barcodeBuffer += e.key;
  } else if (e.key === 'Enter') {
    if (barcodeBuffer.length > 0) {
      handleBarcode(barcodeBuffer);
      barcodeBuffer = '';
      clearTimeout(scanTimer);
      scanTimer = null;
    }
    return;
  } else {
    return;
  }
  if (scanTimer) clearTimeout(scanTimer);
  scanTimer = setTimeout(() => {
    if (barcodeBuffer.length > 0) {
      handleBarcode(barcodeBuffer);
      barcodeBuffer = '';
    }
  }, SCAN_TIMEOUT);
}

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', onKeyDown);
});
