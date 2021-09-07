const Discord = require('discord.js');
const db = require("quick.db")
exports.run = (client, message, args) => {
    if (!message.member.roles.cache.has("") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('**Bu komutu kullanabilmek için** <@&761712440542363648> **Yetkisine Sahip Olman Gerek**').setColor("Black"));
 let kullanıcı = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if (!kullanıcı) return message.channel.send(new Discord.MessageEmbed().setDescription('**Bir üye etiketlemen gerekiyor**').setColor("Black"));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  message.guild.members.cache.get(member.id).roles.cache.forEach(r => {
message.guild.members.cache.get(member.id).roles.remove(r)

   message.react("857585593152438343")
})
  member.roles.add("857573502437425172")
  member.roles.add("857610243587178496")
  let embed = new Discord.MessageEmbed() 
  .setDescription(`<a:westa_tik:857585593152438343> ${kullanıcı} Adlı Üye ${message.author} Tarafından Kayıtsıza Atıldı`) 
  .setFooter(`xeina was here`)
  .setTimestamp()
  return message.channel.send(embed)

}


exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kayıtsız"],
    permLevel: 0,
    name: "kayıtsız"
  }
  
  exports.help = {
    name: "kayıtsız"
  };