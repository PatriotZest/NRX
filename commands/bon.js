const Discord = require('discord.js');

module.exports = {
    name: "bon",
    description: "Bons a member from a server",
    
    async run (client, message, args) {
          const mentionedMember = message.mentions.members.first();
          message.delete()
          message.reply(`Banned 🔨 **${mentionedMember.user.tag}**`);	
	       

}
}