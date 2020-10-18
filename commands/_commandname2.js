/*CMD
  command: /commandname2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let status = options.result.status

var isJoined =
  status == "member" || status == "administrator" || status == "creator"
let texto =
    "[" +
    user.first_name +
    "]" +
    "(" +
    "tg://user?id=" +
    user.telegramid +
    ")" 
if (isJoined) {
  Bot.sendKeyboard(" 🟢 Accept and START NOW 🟢", "*Hello*  " + texto + " *, I am the UniswapX Bot. 🚀Uniswap X is an upgrade to the native uniswap project, giving it the scalability and security it needs to serve all of humanity and implementation of proof-of-stake (POS). Introducing UNISWAPX Calling in the Crypto World ! Claim UNIX as your privilege today.\nPress the 🟢 Accept and START NOW 🟢 to get started with our AIRDROP*")
} else {
  Bot.runCommand("/Afterstart")
}

