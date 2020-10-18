/*CMD
  command: address2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (data.message == "🔙") {
  Bot.runCommand("🟢 Accept and START NOW 🟢")
  return
}

let msg = message
if (message.length == 34) {
  User.setProperty("TRXwallet", msg, "text")
  
Bot.sendKeyboard  ("🔙","*Hey 👋 *\n\nYou are almost done\n\n_Enter Your Twitter Username (with @)_")
Bot.runCommand  ("iden")
} else {
  Bot.sendMessage("_Your Wallet Trx is Not Valid , try With Valid wallet Trx  _\n\n *Hey 👋 ,*\n\n_You are almost done\n\nEnter Your Ethereum Address_")
  Bot.runCommand("address2")
}

