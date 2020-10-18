/*CMD
  command: iden
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
if (msg.substring(0, 1) == "@") {
 User.setProperty ("twitter", msg, "text")
Bot.runCommand  ("Dashboar9")
  
} else {
  Bot.sendMessage("_That does not look like a valid Twitter username . _\n\n  * Hey 👋 *\n\nYou are almost done\n\n_Enter Your Twitter Username (with @)_")
  Bot.runCommand("iden")
}

