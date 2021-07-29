const Discord = require('discord.js');
////////configs
const ayarlar = require('../config/ayarlar.json');
const mesajtr = require('../config/mesajlartr.json');
const mesajen = require('../config/mesajlaren.json');
////////configs
exports.run = async(client, message, args) => {

 var guild = message.guild;
 var banlayan = message.author.tag;
 var kisi = message.mentions.users.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
 if(!kisi) return message.reply("Banını Açacağım Kişiyi Beirtmen Gerek Kişiyi Belirtmen Gerekiyor `ID / @kullanici / username`")
 var neden = args.slice(1).join(' ') 
 let banxx = await message.guild.fetchBans();
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(mesajtr.bannoperm);
if (!banxx.get(kisi.id)) return message.reply(":x: Kişi Yasaklanmamış")

if(neden) {
  try {
  await message.channel.send(`${kisi.tag} adlı kullanıcının banı açıldı. \nNedeni: **${neden}**`)
  await guild.members.unban(kisi.id, neden);
} catch (error) {
  message.reply(mesajtr.boterror)
  console.log(error)
}
} else {
  try {
    await message.channel.send(`${kisi.tag} adlı kullanıcının banı açıldı.`)
    await guild.members.unban(kisi.id, neden);
  } catch (error) {
    message.reply(mesajtr.boterror)
    console.log(error)
  }

}




};


exports.conf = {
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Botun Pingini Gösterir !',
  usage: 'unban'
};
