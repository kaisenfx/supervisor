const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

let embed = new Discord.MessageEmbed().setColor("010000").setFooter("31").setTimestamp().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))

let üye = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;

if (!üye.voice.channel) return message.channel.send(embed.setDescription(`${üye} kullanıcısı herhangi bir sesli kanala bağlı değil!`))

message.channel.send(embed.setDescription(`
<a:westa_tik:857585593152438343> ${üye} isimli kullanıcı şu anda <a:westa_hectek:860450133216329728> \`${üye.voice.channel.name}\` adlı sesli kanala bağlı! 

Kulaklığı: ${üye.voice.selfDeaf ? "Kapalı!" : "Açık!"}
Mikrofonu: ${üye.voice.selfMute ? "Kapalı" : "Açık!"}
Ses Kanalı Bilgisi ${üye.voice.channel.members.size}/${üye.voice.channel.userLimit || "∞"}
`))

};

exports.conf = {
  name: "ses",
  guildOnly: true,
  aliases: ["ss"],
};

exports.help = {
  name: 'sessorgula',
  description: '[Admin Komutu]',
  usage: 'ss'
};