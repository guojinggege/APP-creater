const QRCode = require('qrcode');

const url = 'https://ai-mobile-app.vercel.app';

QRCode.toFile('./qrcode.png', url, {
  width: 300,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as qrcode.png');
});