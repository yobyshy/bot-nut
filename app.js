const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const prefix = "!";

var servers = {}; 

client.on('guildMemberAdd', member => {
              let mixRole = member.guild.roles.find('name', 'Mixed PUGs');
              let NotRole = member.guild.roles.find('name', 'Notify');
              member.addRole(mixRole)
              member.addRole(NotRole)
});

client.on('message', msg => {
if(!msg.content.startsWith(prefix)) return;

let command = msg.content.split(" ")[0];
command = command.slice(prefix.length);

if (command === "mixed") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs"); 
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
    msg.channel.send(bgnRole + ' Join the Pug! connect 209.58.178.80:27015;password purematch');
  }

  if (command === "dm") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs"); 
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
      msg.channel.send(bgnRole + " Come join the DM server! connect 209.58.177.22:27030");
  }
            if (command === "advanced") {
    let modRole = msg.guild.roles.find("name", "Advanced PUGs"); 
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");  
    if(msg.member.roles.has(modRole.id)) {
      msg.channel.send(advRole + " Join the Pug! connect 209.58.164.222:27015;password pureadvanced");
    }else {
      return msg.reply("Only those with the Advanced PUGs role can use this command");
    } 
              
            }
            if (command === "pug") {
      let modRole = msg.guild.roles.find("name", "Advanced PUGs"); 
      let advRole = msg.guild.roles.find("name", "AdvNotify");
      let bgnRole = msg.guild.roles.find("name", "Notify");
      let member = msg.member;
      if(msg.member.roles.has(bgnRole.id)) {
        member.removeRole(bgnRole).catch(console.error);
        msg.reply("You will no longer be notified for PUGs");
      }
      if(!msg.member.roles.has(bgnRole.id)) {
        member.addRole(bgnRole).catch(console.error);
        msg.reply("You will now be notified for PUGs");
      }
      if(msg.member.roles.has(modRole.id)) {
          member.removeRole(bgnRole);
          member.removeRole(advRole);
        }
          if(msg.member.roles.has(modRole.id)) {
              if(!msg.member.roles.has(advRole.id))
              member.addRole(bgnRole);
              member.addRole(advRole);
          }
            
          
            
            
            
         
            
          
            
            
          


    }
    
  
});


client.login(process.env.BOT_TOKEN);
