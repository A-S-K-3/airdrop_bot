/*CMD
  command: /delete3
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let chanell = "@uswapfx_ann"
Api.getChatMember({
  chat_id: chanell,
  user_id: user.telegramid,
  on_result: "/commandname3"
})

