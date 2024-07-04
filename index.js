/// lembre-se de fazer as adaptações necessárias para funcionar 
// TROQUE O USERNAME E A KEY 
// clover mods
// clover-t-bot.onrender.com 

case "playvideo":
case 'playvd': 
if (!q) return reply('Coloque o nome da musica também')
reply("「🍉」𝙲𝚊𝚕𝚖𝚘 𝙰𝚛𝚛𝚘𝚖𝚋𝚊𝚍𝚘, 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...") 
fetch(`https://clover-t-bot.onrender.com/yt/playmp4?query=${q}&key=KEY&username=USERNAME`).then(response => response.json()).then(ytbr => {

client.sendMessage(from,{image:{url:`${ytbr.thumb}`}, caption: `「👤」𝙽𝚘𝚖𝚎  ҂ ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕  ҂ ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜  ҂ ${ytbr.views}`}, {quoted: info})

client.sendMessage(from, { video: { url: ytbr.url }, mimetype: 'video/mp4' }, {quoted: info})

})

  break
  
  case "playaudio":
  case 'play': 
  if (!q) return reply('Coloque o nome da musica também')
reply("「🍉」𝙲𝚊𝚕𝚖𝚘 𝙰𝚛𝚛𝚘𝚖𝚋𝚊𝚍𝚘, 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...") 
fetch(`https://clover-t-bot.onrender.com/yt/playmp4?query=${q}&key=KEY&username=USERNAME`).then(response => response.json()).then(ytbr => {

 client.sendMessage(from,{image:{url:`${ytbr.thumb}`}, caption: `「👤」𝙽𝚘𝚖𝚎  ҂ ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕  ҂ ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜  ҂ ${ytbr.views}`}, {quoted: info})

 client.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' }, {quoted: info})

})

  break

  
case "cosplay":
case "waifu":
case "waifu2":
case "shota":
case "loli":
case "yotsuba":
case "shinomiya":
case "yumeko":
case "tejina":
case "chiho":
case "shizuka":
case "boruto":
case "kagori":
case "kaga":
case "kotori":
case "mikasa":
case "akiyama":
case "hinata":
case "minato":
case "naruto":
case "nezuko":
case "yuki":
case "hestia":
case "emilia":
case "itachi":
case "elaina":
case "madara":
case "sasuke":
case "deidara":
case "sakura":
case "tsunade":
  //reply("off no momento")
  try {
    client.sendMessage(from, { react: { text: '🕚', key: info.key } })
    fetch(encodeURI(`https://clover-t-bot.onrender.com/nime/${command}?username=USERNAME&key=KEY`))
.then(response => response.json())
.then(data => {
var resultado = data.url;

let buttonMessage4 = {
image: { url: `${resultado}` },
caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
footer: '',
//buttons: buttons,
headerType: 4
}
client.sendMessage(from, buttonMessage4, { quoted: info })
})
  } catch (e) {
    console.log(e)
    reply("nao achei a foto, tente novamente mais tarde")
  }

  break

case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'kasedaiki':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'manga':
case 'masturbation':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'neko2':
case "neko":
case 'tentacles':
case 'thighs':
case 'yuri':
case 'zettai':
  //reply("off no momento")

  try {
    client.sendMessage(sender, { react: { text: '🕚', key: info.key } })
    fetch(encodeURI(`https://clover-t-bot.onrender.com/nsfw/${command}?username=USERNAME&key=KEY`))
.then(response => response.json())
.then(data => {
var resultado = data.url;

let buttonMessage4 = {
image: { url: `${resultado}` },
caption: `🏕 Olá ${pushname}, aqui está sua imagem 🎲`,
footer: '',
//buttons: buttons,
headerType: 4
}
client.sendMessage(sender, buttonMessage4, { quoted: info })
})
  } catch (e) {
    console.log(e)
    reply("nao achei a foto, tente novamente mais tarde")
  }

  break
  
// Criadas por @clovermods 
// Api https://clover-t-bot.onrender.com
// Lembre-se de por sua key e username nos lugares corretos 

case "tiktokvd": {
    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://clover-t-bot.onrender.com/download/tiktok?url=${url}&key=KEY&username=USERNAME`;
    fetch(apiUrl)
.then(response => response.json())
.then(data => {
    if (data.videoSemWt) {
client.sendMessage(from, {
    video: { url: data.videoSemWt },
    mimetype: 'video/mp4'
});
    } else {
return reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
    }
})
.catch(error => {
    console.error(error);
    return reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
});
} break

case "tiktokad": {
    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://clover-t-bot.onrender.com/download/tiktok?url=${url}&key=KEY&username=USERNAME`;
    fetch(apiUrl)
.then(response => response.json())
.then(data => {
    if (data.videoSemWt) {
client.sendMessage(from, {
    audio: { url: data.audio },
    mimetype: 'audio/mpeg'
});
    } else {
     reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
    }
})
.catch(error => {
    console.error(error);
    return reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
});
} break


case 'wallpaper1': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/satanic?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break


case 'wallpaper2': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/cyberspace?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break


case 'wallpaper3': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/gaming?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break


case 'wallpaper4': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/wallpapertec?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break


case 'wallpaper5': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/ppcouple?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break


case 'wallpaper6': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/pubg?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break

case 'wallpaper7':
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/aesthetic?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break


case 'wallpaper8': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/wallpaper/aesthetic?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break

case 'wallpaper9': 
         if (!isPremium) return reply('[⚙️️]comando so pra usuários vip')
          reply("「🐸」ja to enviando no teu pv") 
           google = await fetchJson(`https://clover-t-bot.onrender.com/nime/anime?key=(sua key)&username=(seu username)`)
           client.sendMessage(sender, { image: { url: google.url }}, {quoted: info})
           break
