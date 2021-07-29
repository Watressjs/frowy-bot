const db = require("quick.db")
const Discord = require("discord.js");
////////configs
const ayarlar = require('../config/ayarlar.json');
const mesajtr = require('../config/mesajlartr.json');
const mesajen = require('../config/mesajlaren.json');
////////configs
module.exports.run = async (client, message, args) => {
var dil = db.fetch(`lang_${message.guild.id}`)
let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (dil == 'tr' || dil == undefined) {
    if (!prefix) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Prefix zaten ayarlanmamış!`)
        .setFooter(client.user.username, client.user.avatarURL());
        message.channel.send(embed);
        return;
        }
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Prefix başarıyla sıfırlandı!`)
        .setFooter(client.user.username, client.user.avatarURL());
        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
}
if (dil == 'en') {
    if (!prefix) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Prefix not already set!`)
        .setFooter(client.user.username, client.user.avatarURL());
        message.channel.send(embed);
        return;
        }
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(`Prefix reset successfully!`)
        .setFooter(client.user.username, client.user.avatarURL());
        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
}
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-reset"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};
