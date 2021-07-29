const Discord = require('discord.js')
const db = require('quick.db')
////////configs
const ayarlar = require('../config/ayarlar.json');
const mesajtr = require('../config/mesajlartr.json');
const mesajen = require('../config/mesajlaren.json');
////////configs
exports.run = async(client, message, args) => {
    var dil = db.fetch(`lang_${message.guild.id}`)
    let prefix = "PREFIX" || ayarlar.prefix || db.fetch(`prefix_${message.guild.id}`)
    if (dil == 'tr' || dil == undefined) {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setDescription(mesajtr.messagenoperm).setColor("RANDOM"))

        let sa = args[0]
    
        if(!sa) {
            let muckmuck = new Discord.MessageEmbed()
            .setDescription(`**1 - 100 Arasında Bir Sayı Girmelisin ! Örnek Kullanım; ${prefix}sil 60**`)
            .setColor("RANDOM")
            message.channel.send(muckmuck)
        }
    
        message.channel.bulkDelete(sa).then(() => {
            let sj = new Discord.MessageEmbed()
            .setDescription(`**Başarıyla ${sa} Mesaj ${message.auhthor} Tarafından Silindi !**`)
            .setColor("RANDOM")
            message.channel.send(sj)
        })
    }
    if (dil == 'en') {
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setDescription(mesajen.messagenoperm).setColor("RANDOM"))

        let sa = args[0]
    
        if(!sa) {
            let muckmuck = new Discord.MessageEmbed()
            .setDescription(`**You must enter a number between 1 and 100! Example Usage; ${prefix}delete 60**`)
            .setColor("RANDOM")
            message.channel.send(muckmuck)
        }
    
        message.channel.bulkDelete(sa).then(() => {
            let sj = new Discord.MessageEmbed()
            .setDescription(`**Successfully ${sa} Post Deleted by ${message.auhthor} !**`)
            .setColor("RANDOM")
            message.channel.send(sj)
        })
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["temizle","delete"],
    permlvl: 0
}

exports.help = {
    name: "sil"
}