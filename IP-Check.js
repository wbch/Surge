/*
 * by: @congcong0806
 * via: https://github.com/congcong0806/surge-list/blob/master/Script/ipcheck.js
 */

let url = "http://ip-api.com/json"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let isp = jsonData.isp
  body = {
    title: `${city}, ${country} ${emoji}`,
    content: `${ip}\n${isp}`,
    icon: "globe.asia.australia.fill"
  }
  $done(body);
});

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
