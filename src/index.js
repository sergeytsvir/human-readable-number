module.exports = function toReadable (number) {
    let str = number.toString();
  let obj = {
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
  }
  if(number <= 20) return obj[number];
  else if (str.length === 2) return (obj[Math.floor(number/10) + '0'] + ' ' + obj[str[1]]).replace('zero','').trimEnd();
  else if (str.length === 3 && str[1] === '0') return (obj[str[0]] + ' hundred ' + obj[str[2]]).replace('zero','').trimEnd();
  else if (str.length === 3 && +(str.slice(-2)) < 20) return (obj[str[0]] + ' hundred ' + obj[str.slice(-2)]);
  else if (str.length === 3 && +(str.slice(-2)) >= 20) return (obj[str[0]] + ' hundred ' + obj[Math.floor(+(str.slice(-2))/10) + '0'] + ' ' + obj[str[2]]).replace('zero','').trimEnd();
}
