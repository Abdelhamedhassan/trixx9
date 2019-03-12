const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "9"; // البيرفكس حطها بين ال " اقترح تخليها زي ما هي

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);  // لا تعدل شي هنا
});

client.on('ready', async() => { // ولا تعدل شي في اي مكان غير تحت
var server = "466202032844308481"; // ايدي السررفر اللي بتحط فيه البوت
var channel = "515262427345059861";//ايدي الروم اللي بسوي فيه سبام البوت
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('```INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ INCR_iSryManYT SPAAAAM ~ ') 
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 }); // لا تعدل شي باي مكان

 
client.login(process.env.BOT_TOKEN); // هنا لا تعدل شي
