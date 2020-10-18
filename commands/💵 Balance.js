/*CMD
  command: 💵 Balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let res  = Libs.ResourcesLib.userRes  ("balance")
let bonu = Libs.ResourcesLib.userRes  ("bonu")
 Bot.sendMessage  ("_Hey 👋 ,\n\nYou have " +bonu.value ()+ " UNIX for signup and " + res.value ()+ " UNIX for referral_.\n\n*Click Referral Button to Accumulate more UNIX*")


