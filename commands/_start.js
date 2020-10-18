/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let used = User.getProperty("used")
if (!used) {
  Bot.setProperty("gnoti" + user.telegramid, "yes", "string")

  if (params) {
    let u = params
    User.setProperty("Reffer", u, "string")
    let inl = Bot.getProperty("gnoti" + u)
    if (inl == "yes") {
      Api.sendMessage({
        chat_id: u,
        text:
          "<b> 🗣 Referral friends :</b> " +
          user.first_name +
          "  " +
          user.last_name +
          " " +
          " on reference system  \n\n You just received 50 UNIX  ",
        parse_mode: "html"
      })
    }
    Bot.setProperty("rid" + user.telegramid, u, "string")
    Bot.setProperty("hshxh", u, "string")
    let up = Bot.getProperty("upinfo" + u)
    User.setProperty("up", up, "string")

    let l1 = Libs.ResourcesLib.anotherUserRes("ref", u)
    l1.add(1)
    let res = Libs.ResourcesLib.anotherUserRes("balance", u)
    res.add(50)
  }
  User.setProperty("used", true, "boolean")
}

let amount = Libs.Random.randomFloat(1, 10).toFixed()
let a = Number(amount)

let amoun = Libs.Random.randomFloat(1, 10).toFixed()
let b = Number(amoun)

let d = a + b

User.setProperty("total", d, "string ")
Bot.sendKeyboard(
  "🔙",
 
  " *🤑 Welcome to uSwapFX AirDrop BOT 🤑 \n\n\n Solve this  equation*\n\n" + "_" + amount + " ➕ " + amoun + " = ❓ _"
)
Bot.runCommand("equation")

