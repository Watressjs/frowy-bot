const db = require("quick.db")
const Discord = require('discord.js');
////////configs
const ayarlar = require('../config/ayarlar.json');
const mesajtr = require('../config/mesajlartr.json');
const mesajen = require('../config/mesajlaren.json');
////////configs

 
exports.run = async(client, message, args) => {
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

if(dil == 'en') {
let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Welcome To Frowy Bot Moderantion Menu** `)
.setDescription(`
**» ${prefix}language** Language Changes. | Example Usage: ${prefix}language set tr
**» ${prefix}prefix** Your Prefix Settings. | Example Usage: ${prefix}prefix !!
**» ${prefix}prefix-reset** Reset your Prefix. | Example Usage: ${prefix}prefix-reset
`)
message.channel.send(embed)
}
 
 if(dil == 'tr' || dil == undefined) {
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
  .setColor('#d02090')
  .setTitle(` **Frowy Botun Ayarlar Menüsüne Hoşgeldiniz** `)
  .setDescription(`
  **» ${prefix}dil değiştir** Dil Ayarlar. | Örnek Kullanım : ${prefix}language set tr
  **» ${prefix}prefix-config** Sunucu Prefixinizi Ayarlarsınız. | Örnek Kullanım : ${prefix}prefix-config !!
  **» ${prefix}prefix-sıfırlat** Sunucu Prefixinizi Sıfırlarsınız. | Örnek Kullanım : ${prefix}prefix-sıfırla
  `)
  message.channel.send(embed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['configs',"ayarlar"],
  permLevel: 0,
};

exports.help = {
  name: 'help-config',
  description: 'Help Command',
  usage: 'yardım'
};