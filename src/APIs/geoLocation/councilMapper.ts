function mapCouncil(council) {
  if (council === "Barking and Dagenham") {
    return "Barking and Dagenham London Borough Council";
  }
  if (council.includes("Barnet")) {
    return "Barnet London Borough Council";
  }
  if (council.includes("Bexley")) {
    return "Bexley London Borough Council";
  }
  if (council.includes("Brent")) {
    return "Brent London Borough Council";
  }
  if (council.includes("Bromley")) {
    return "Bromley London Borough Council";
  }
  if (council.includes("Camden")) {
    return "Camden London Borough Council";
  }
  if (council.includes("Croydon")) {
    return "Croydon London Borough Council";
  }
  if (council.includes("Ealing")) {
    return "Ealing London Borough Council";
  }
  if (council.includes("Enfield")) {
    return "Enfield London Borough Council";
  }
  if (council.includes("Greenwich")) {
    return "Greenwich London Borough Council";
  }
  if (council.includes("Hackney")) {
    return "Hackney London Borough Council";
  }
  if (council.includes("Hammersmith and Fulham")) {
    return "Hammersmith and Fulham London Borough Council";
  }
  if (council.includes("Haringey")) {
    return "Haringey London Borough Council";
  }
  if (council.includes("Harrow")) {
    return "Harrow London Borough Council";
  }
  if (council.includes("Havering")) {
    return "Havering London Borough Council";
  }
  if (council.includes("Hillingdon")) {
    return "Hillingdon London Borough Council";
  }
  if (council.includes("Hounslow")) {
    return "Hounslow London Borough Council";
  }
  if (council.includes("Islington")) {
    return "Islington London Borough Council";
  }
  if (council.includes("Kensington and Chelsea")) {
    return "Royal Borough of Kensington and Chelsea";
  }
  if (council.includes("Kingston upon Thames")) {
    return "Royal Borough of Kingston upon Thames";
  }
  if (council.includes("Lambeth")) {
    return "Lambeth London Borough Council";
  }
  if (council.includes("Lewisham")) {
    return "Lewisham London Borough Council";
  }
  if (council.includes("Merton")) {
    return "Merton London Borough Council";
  }
  if (council.includes("Newham")) {
    return "Newham London Borough Council";
  }
  if (council.includes("Redbridge")) {
    return "Redbridge London Borough Council";
  }
  if (council.includes("Richmond upon Thames")) {
    return "Richmond upon Thames London Borough Council";
  }
  if (council.includes("Southwark")) {
    return "Southwark London Borough Council";
  }
  if (council.includes("Sutton")) {
    return "Sutton London Borough Council";
  }
  if (council.includes("Tower Hamlets")) {
    return "Tower Hamlets London Borough Council";
  }
  if (council.includes("Waltham Forest")) {
    return "Waltham Forest London Borough Council";
  }
  if (council.includes("Wandsworth")) {
    return "Wandsworth London Borough Council";
  }
  if (council.includes("Westminster")) {
    return "Westminster City Council";
  }
}

module.exports = mapCouncil;
