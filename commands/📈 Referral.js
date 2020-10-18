/*CMD
  command: 📈 Referral
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bot_username = Bot.getProperty("bot_username", "*")
let cur = Bot.getProperty("cur", "LTC")
//cur is bot currency
let l1 = Libs.ResourcesLib.userRes("ref")
let text2 =" <b>Hey 👋 \n\nTo increase your UNIX refer more friends using your referral link, you will earn 50 UNIX ($50) for each person you refer </b>.\n\n"+
  "<b>" +
  "👭 You have " +
  l1.value() +
  " Refferral \n\n" +
  " ⚙️ Your referral link: </b> https://t.me/" +
  bot.name +
  "?start=" +
  user.telegramid +
  "\n\n" 
Api.sendMessage({
  chat_id: chat.chatid,
  text: text2,
  parse_mode: "HTML",
  disable_web_page_preview: true
})

