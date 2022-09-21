const decToHex = (dec) => {
  if (dec > 255) {
    dec = 255;
  } else if (dec <= 0) {
    return '00';
  } else if (dec == 1) {
    return '01';
  } else if (dec == 16) {
    return '10';
  }

  let rems = [];
  let hex = '';

  while (dec > 1) {
    rems.push(Math.floor(dec % 16));
    dec = dec / 16;
  }

  rems = rems.reverse();

  rems.forEach((element) => {
    if (element < 10) {
      hex = hex + element;
    } else {
      switch (element) {
        case 10:
          hex = hex + 'A';
          break;
        case 11:
          hex = hex + 'B';
          break;
        case 12:
          hex = hex + 'C';
          break;
        case 13:
          hex = hex + 'D';
          break;
        case 14:
          hex = hex + 'E';
          break;
        case 15:
          hex = hex + 'F';
          break;
      }
    }
  });

  if (hex.length < 2) {
    hex = '0' + hex;
  }
  return hex;
};

function rgb(r, g, b) {
  const final = decToHex(r) + decToHex(g) + decToHex(b);

  console.log(final);
}

rgb(228, 1, 77);
