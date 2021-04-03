module.exports = async (iri) => {
  if (iri === "https://w3id.org/jose/v1") {
    return {
      documentUrl: iri,
      document: require("./contexts/jose-v1.json"),
    };
  }

  throw new Error("unsupported context");
};
