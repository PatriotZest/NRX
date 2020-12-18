const Discord = require('discord.js');

module.exports = {
    name: "nuke",
    description: "Removes all the messages from a particular channel",
    
    async run (client, message, args) {

    if(message.member.roles.cache.has('752807977534226463')){


    let reason = args.join(" ");
    const nukeChannel = message.channel;

    if(!reason) reason = "No reason specified"
    if(!nukeChannel.deletable) return message.reply("This channel is nuke-proof");

    await nukeChannel.clone().catch(err => console.log(err))
    await nukeChannel.delete(reason).catch(err => console.log(err))
 

    
}
else{
    message.reply('gotcha ya gonna report this to NRX Bolt :))')
    client.users.cache.get('555284237901889546').send('Someone tried using nuke check the chat');
}
}
}