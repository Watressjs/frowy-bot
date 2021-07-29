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
**» ${prefix}nuke** Deletes the channel and opens a channel with the same name instead.
**» ${prefix}kick** Kicks Tagged Person from Server.
**» ${prefix}delete** Deletes Messages As You Write.
`)
message.channel.send(embed)
 }
 
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Bot Moderasyon Yardım Menüsüne Hoşgeldiniz.** `)
.setDescription(`
**» ${prefix}nuke** Kanalı Silip Yerine Aynı İsimde Kanal Oluşturur.
**» ${prefix}kick** Etiketlenen Kişiyi Sunucudan Atar.
**» ${prefix}delete** Yazdığınız Kadar Mesaj Siler.
`)
message.channel.send(embed)
 }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['moderation',"moderasyon"],
  permLevel: 0,
};

exports.help = {
  name: 'moderasyon',
  description: 'moderasyon Command',
  usage: 'moderasyon'
};