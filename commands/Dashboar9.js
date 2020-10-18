/*CMD
  command: Dashboar9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let bonu = User.getProperty("bonu")
if (bonu == undefined) {
  let bonu = Libs.ResourcesLib.userRes("bonu")
  bonu.add(500)

  User.setProperty("bonu", user.telegramid, "text")

  Bot.sendKeyboard(
    "💵 Balance,📈 Referral,\n📊 Statistics,💳 Withdraw,\n",
    "_✅ You just received 500 UFX, refer your friends to earn 50 UFX for each referral._"
  )

  return
}

Bot.sendKeyboard(
  "💵 Balance,📈 Referral,\n📊 Statistics,💳 Withdraw,\n ",
  "_✅ refer your friends to earn 50 UNIX for each referral._"
)

