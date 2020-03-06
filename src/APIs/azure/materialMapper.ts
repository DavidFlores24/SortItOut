export {};

const mapMaterial = material => {
  switch (material) {
    case "black-plastic":
      return "Black plastics";

    case "metal":
      return "Cans";

    case "glass":
      return "Other";

    case "foil":
      return "Foil";

    case "plastic":
      return "Mixed plastics";

    case "cardboard":
      return "Card";
  }
};

module.exports = mapMaterial;
