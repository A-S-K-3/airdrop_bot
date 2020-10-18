/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let texto =
    "[" +
    user.first_name +
    "]" +
    "(" +
    "tg://user?id=" +
    user.telegramid +
    ")" 
let res  = Libs.ResourcesLib.userRes  ("balance")
let bonu = Libs.ResourcesLib.userRes  ("bonu")
let twitter = User.getProperty  ("twitter")
let ETHwallet = User.getProperty  ("ETHwallet")
let TRXwallet = User.getProperty  ("TRXwallet")
Bot.sendMessage("_👋 Name : _" + texto+ "\n\n_Signup Balance : _ " + bonu.value  ()+ " *UNIX*\n\n_Referral Balance : _ " +res.value ()+ " *UNIX *\n\n_Ethereum Address :_ " +ETHwallet+"\n\n _Tron Address : _" +TRXwallet+ "\n\n_Twitter Username_ : " +twitter+ "\n\n\n*To change your information click /start and submit a new one.*")
