/*CMD
  command: /Delete
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 👍 i did all steps
CMD*/

let msgid = User.getProperty("msgid")
Api.deleteMessage({ chat_id: user.telegramid, message_id: msgid })

let chanell = "@uswapfx"
Api.getChatMember({
  chat_id: chanell,
  user_id: user.telegramid,
  on_result: "/commandname1"
})

