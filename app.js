const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!";

client.on('guildMemberAdd', member => {
               let mixRole = member.guild.roles.find('name', 'Mixed PUGs');
               let NotRole = member.guild.roles.find('name', 'Notify');
               member.addRole(mixRole);
               member.addRole(NotRole);
 });

client.on('message', msg => {
if(!msg.content.startsWith(prefix)) return;

let command = msg.content.split(" ")[0];
command = command.slice(prefix.length);

if (command === "mixed") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs");
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
    msg.channel.send(bgnRole + ' Join the Pug! connect 188.166.219.196:27015;password purematch');
  }
  
  if (command === "mixed2") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs");
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
    msg.channel.send(bgnRole + ' Join the Pug! connect 188.166.219.196:27016;password purematch');
  }
//   if (command === "dm") {
//     let modRole = msg.guild.roles.find("name", "Advanced PUGs");
//       let advRole = msg.guild.roles.find("name", "AdvNotify");
//       let bgnRole = msg.guild.roles.find("name", "Notify");
//       msg.channel.send(bgnRole + " Come join the DM server! connect 139.99.121.59:27035");
//   }
            if (command === "novice") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs"); 
      let advRole = msg.guild.roles.find("name", "AdvNotify");
    let novnotify = msg.guild.roles.find("name", "NovNotify");
    msg.channel.send(novnotify + "Join the Pug! connect 188.166.219.196:27018;for password, refer to #pug-novice-announce pinned messages");
  }
            if (command === "advanced") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs");
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
    if(msg.member.roles.has(modRole.id)) {
      msg.channel.send(advRole + " Join the Pug! connect 188.166.219.196:27017;password purematch");
    }else {
      return msg.reply("Only those with the Advanced PUGs role can use this command");
    }
   }
            if (command === "pug") {
      let modRole = msg.guild.roles.find("name", "Advanced PUGs");
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
      let novRole = msg.guild.roles.find("name", "Novice PUGs");
      let novnotify = msg.guild.roles.find("name", "NovNotify");
      let member = msg.member;
      if(msg.member.roles.has(bgnRole.id)) {
        member.removeRole(bgnRole);
        msg.reply("You will no longer be notified for PUGs");
            }
      if(!msg.member.roles.has(bgnRole.id)) {
        member.addRole(bgnRole);
        msg.reply("You will now be notified for PUGs");
      }
      if(msg.member.roles.has(novRole.id)) {
            if(!msg.member.roles.has(novnotify.id))
            member.addRole(novnotify);
      }
          if(msg.member.roles.has(novnotify.id)) {
            member.removeRole(novnotify);
          }
          if(msg.member.roles.has(modRole.id)) {
          member.removeRole(advRole);
           }
          if(msg.member.roles.has(modRole.id)) {
              if(!msg.member.roles.has(advRole.id))
              member.addRole(advRole);
               }
      
          


  
  
}
});


client.login(process.env.BOT_TOKEN);
