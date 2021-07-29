const db = require("quick.db")
const Discord = require('discord.js');
////////configs
const ayarlar = require('../config/ayarlar.json');
const mesajtr = require('../config/mesajlartr.json');
const mesajen = require('../config/mesajlaren.json');
////////configs

 
exports.run = async(client, message, args) => {
//db config
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
//db config
/// En Command
if(dil == 'en') {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Welcome to Frowy Bot Systems Menu** `)
.setDescription(`
**Ban System**
${prefix}ban Ban someone from the server. | Example Usage : ${prefix}ban id
${prefix}unban You Unban Someone You Banned. | Example Usage : ${prefix}unban id
`)
message.channel.send(embed)
 }
 /// En Command
 /// Tr Command
 if(dil == 'tr' || dil == undefined) {
    let embed = new Discord.MessageEmbed()
.setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
.setColor('#d02090')
.setTitle(` **Frowy Botun Sistemler Menüsüne Hoşgeldiniz** `)
.setDescription(`
**Ban Sistemi**
${prefix}ban Ban Atarsınız. | Örnek Kullanım : ${prefix}ban id
${prefix}unban Banladığınız Birinin Banını Geri Açarsınız. | Örnek Kullanım : ${prefix}unban id
`)
message.channel.send(embed)
 }
 /// Tr Command
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sistem',"system","systems"],
  permLevel: 0,
};

exports.help = {
  name: 'sistemler',
  description: 'Help Command',
  usage: 'yardım'
};