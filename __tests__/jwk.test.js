const { encode } = require("@digitalbazaar/cborld");

const documentLoader = require("../documentLoader");

const jwk = require("../test-vectors/jwk-input.json");

(async () => {
  const jsonldDocument = {
    "@context": "https://w3id.org/jose/v1",
    ...jwk,
    x: "M" + jwk.x,
    y: "M" + jwk.y,
  };
  const cborldBytes = await encode({ jsonldDocument, documentLoader });
  console.log(JSON.stringify(jwk).length, "JWK stringified length");
  console.log(
    Buffer.from(JSON.stringify(jwk)).toString("base64").length,
    "JWK base64 length"
  );
  console.log(
    Buffer.from(cborldBytes).toString("base64").length,
    "JWK as CBOR-LD base64 encoded length"
  );
})();
