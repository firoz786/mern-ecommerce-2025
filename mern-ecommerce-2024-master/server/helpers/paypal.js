const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", // sandbox or live
  client_id: "AZA1Nh1RA3cInSXKGPZnIo-AWya53jfY-ABOjBuscLTTkce1bU7ynqioSCzMlvBlQLEkvg2ctPzkXgIh",
  client_secret: "EGp1nHZS4cLxUMo9kX_hg-2u8oCVLvfrPo5i0zglt0u0YGNh9kLT2XMFbG-33GUm50jBTiz2K90z2Get",
});

module.exports = paypal;
