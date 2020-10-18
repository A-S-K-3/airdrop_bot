/*CMD
  command: /commandname1
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

if (isJoined) {
  Bot.runCommand("/delete2 ")
} else {
  Bot.runCommand("/Afterstart")
}

