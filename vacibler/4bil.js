let fs = require('fs');
const cheerio = require('cheerio')
const download = require('image-downloader')

let s = fs.readFileSync("4bild.txt", "UTF-8") + "";
const $ = cheerio.load(s)



let list = [];
$('.lazy').each(function(i, elem) {
  list.push({url:$(this).attr('data-src'), name:$(this).attr('alt')})

});

let ans = "";

for(let i = 0; i < list.length; i++) {
  ans +=list[i].name.toLowerCase() + "\n";
}
console.log(ans);
fs.writeFileSync("sil", ans, "UTF-8");
