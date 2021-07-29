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
.setTitle(` **Welcome to Frowy Bot Help Menu** `)
.setDescription(`
**» ${prefix}moderation** Shows Moderation Commands.
**» ${prefix}configs** Shows Bot's Settings Menu.
**» ${prefix}systems** Shows Bot's System Menu.
`)
message.channel.send(embed)
 }
 
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Botun Yardım Menüsüne Hoşgeldiniz** `)
.setDescription(`
**» ${prefix}moderasyon** Moderasyon Komutlarını Gösterir.
**» ${prefix}ayarlar** Botun Ayarlar Menüsünü Gösterir.
**» ${prefix}sistemler** Botun Sistemler Menüsünü Gösterir.
`)
message.channel.send(embed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y',"help"],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'Help Command',
  usage: 'yardım'
};