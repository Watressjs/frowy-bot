const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
////////configs
const ayarlar = require('../config/ayarlar.json');
const mesajtr = require('../config/mesajlartr.json');
const mesajen = require('../config/mesajlaren.json');
////////configs

exports.run = async (client, message, args) => {
  
      let duration1 = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
      let istatistikozel1 = new Discord.MessageEmbed()
      .setColor(0x36393F)
  .setDescription(`${ client.user.username}`)
    .addField(`Bot Sahibi`, `<@840695080075526164>`, true)
    .addField(`Bot Geliştiricisi`, `<@811978891899305991>`, true)
    .addField("Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("Sunucu Sayısı", `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField(" Toplam Kullanıcı Sayısı", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
    .addField("Bot Versionu", `${ayarlar.version}`, true)
    .addField(` Ne Kadar Süredir Aktif`, `${duration1}`, true)
    .addField(" Ping", `${client.ws.ping}`, true)
    .addField(" Discord.js Sürümü", `${Discord.version}`, true)
    .addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`, true)
    .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/quepsy)`, true)
    .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=811238807692771348&scope=bot&permissions=8)`, true)
    //.addField(`Bota Oy Ver`, `[Tıkla](https://top.gg/bot/yok/vote)`, true)
    message.channel.send(istatistikozel1) // türkçe
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};