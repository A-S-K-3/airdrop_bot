/*CMD
  command: equation
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (data.message == "🔙") {
  Bot.runCommand("/start")
  return
}
let msg = message
let total = User.getProperty("total")

if (msg == total) {
  

  Bot.sendKeyboard(
    " 👍 I did all Steps" ,
    "💡 Your must join our chat and channel and twitter \n\n@uSwapfx 👈 \n\n@uswapfx 👈 \n\n 👈 \n\n \n\n We use IA and random checks if user join.. \n\n\n\n 🟢 To use the Bot 🟢",
    {
      on_result: "/result"
    }
  )
} else {
  Bot.runCommand("/result")
}

