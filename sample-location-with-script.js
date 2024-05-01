if ($response.statusCode != 200) {
  $done(Null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = getFlagEmoji(obj['country']) + ' ' + obj['country'];
var subtitle = obj['city'] + ' ' + obj['isp'];
var ip = obj['query'];
var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType'];

$done({title, subtitle, ip, description});

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}
