/*CMD
  command: address
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
if (message.length == 42) {
  User.setProperty("ETHwallet", msg, "text")
  
Bot.sendKeyboard(
  "🔙",
  "*Hey 👋 ,*\n\n_You are almost done\n\nEnter Your TRON (TRX) Address_"
)
Bot.runCommand  ("address2")
} else {
  Bot.sendMessage("_Your Wallet ETH is Not Valid , try With Valid wallet ETH  _\n\n *Hey 👋 ,*\n\n_You are almost done\n\nEnter Your Ethereum Address_")
  Bot.runCommand("address")
}

