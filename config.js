const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email =""
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2345159111525";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_13_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUxLFxuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDk5LFxuICAgICAgICA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICA3MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDc1LFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjksXG4gICAgICAgIDUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWtDWUVWYWhCRDVQalFDb0pqc0p3dElWRmNUdngyM1FqNm5xUUpSQlp4az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwickNBZTctamFRN0dXNXpQNkFVSnU3d1wiLFxuICBcInBob25lSWRcIjogXCJmODFkYzQ3MC0wMDgwLTQwZGEtYWFiMS0wNzViMTI0M2YzMWZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjM2LFxuICAgICAgNjAsXG4gICAgICAxODQsXG4gICAgICAxMTQsXG4gICAgICAyNDQsXG4gICAgICA5NCxcbiAgICAgIDIxOSxcbiAgICAgIDEzOSxcbiAgICAgIDE3NyxcbiAgICAgIDI1MixcbiAgICAgIDE2MixcbiAgICAgIDY3LFxuICAgICAgNTcsXG4gICAgICA4MSxcbiAgICAgIDg3LFxuICAgICAgMjI2LFxuICAgICAgOTMsXG4gICAgICAxMDIsXG4gICAgICAxOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUxLFxuICAgICAgMjQ4LFxuICAgICAgMjE2LFxuICAgICAgMTY1LFxuICAgICAgMjAxLFxuICAgICAgNjgsXG4gICAgICA0MyxcbiAgICAgIDIyNSxcbiAgICAgIDE5MCxcbiAgICAgIDEwNCxcbiAgICAgIDIyNSxcbiAgICAgIDE0NyxcbiAgICAgIDIzNixcbiAgICAgIDY0LFxuICAgICAgODksXG4gICAgICAyMjgsXG4gICAgICAxOSxcbiAgICAgIDE0MyxcbiAgICAgIDY2LFxuICAgICAgMjQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NEdmU4R0VJT0I2TG9HR0JzZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIejljV2VzbndaRUtKMlZDWngvbExrc0dCbitlOXZLZWRja2Y5c3BQRkhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlIrQ1NDWjlldmVpT3Z6bkZWcitBSjdZMkQ3TjBmWTJOTDZqUFlSbU1ydG5QYk5zUk5yUkx5U29NZUxma3hHZTlkWDBHaUZHVTVxWUplSU5pZE8xTUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRsbTM0OTQzMFd6UGZ1L09jUzlHWEZtQkxUd0trMExHWG44NkdoakRXV2lQelJtSkhFRklPYkZNMFpIZWU1WmVCc2FuVXVDaFE1YUJDRDJoT3hrZ0RnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1OTExMTUyNTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwNTM2MjczNDc3NjU2OjYyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1OTExMTUyNTo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzk1MTYyNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlkL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWQrLmpzb24iOiAie1wia2V5RGF0YVwiOlwibmVNd3VCM2xLV2ZSbnBzT0IyWmRyNHU3dEtMSzhLVGZFTC9USkVRQWFITT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTgsMTksMjFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk0MjA4Mjc1MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkMC5qc29uIjogIntcImtleURhdGFcIjpcIit0RmMxZWNYRjBCTnZDdmx2cFNGcnFHSFFJaEhzZWtFMm0wTzNOQm5pMFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjE1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWQxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVElrcWVITncvdzlhMVIrdm1mQVp4S3B5Z1RBU2FMQ0dCMGp4YjRhQXBSdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MTYsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZDIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI2cExaK1NOQ2NEUW01Uk1SZjhyQlRVZ09vRjlXYjNpWklKNnVhbkhZdlc0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjoxNyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDE3XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOTDdnR3czdC92UHRvSC9WTmNTa25Hc3RtSTNOUzJKVUduZlBsWWVMQzlFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjoxNyxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJYaFh5TE9uNFRraDFpL2ZsdGxGOXJLUGhaVWZVekRaUmpQakg0WWVIU1BJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjoxOCxcImRldmljZUluZGV4ZXNcIjpbMCwxOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWQ1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2huMFRXb2VEM3p3WU1WaUl3eERqblJTZ3FWd0QwaE5oUjRtbjl2aC90Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MjAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTgsMTldfSxcInRpbWVzdGFtcFwiOlwiMTczMzY1MzI4OTMyMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkNi5qc29uIjogIntcImtleURhdGFcIjpcIk83QzN4cFdqWGhWREovcXpWWEdBc3dJdVErV0ZaSlJGWE5NT28xdFdPVXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjIyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4LDE5LDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM3ODQ4MjUxMDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZDcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJzVURxaHpSYU40UFJ3cFYvSDRlcGIvdnEvd1FyeHVmdmx6YVpFV2NuVDZvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjoyMyxcImRldmljZUluZGV4ZXNcIjpbMCwxOCwxOSwyMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWQ4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicmtxbkhyTGJ6RUxzQkZpZVhCZlJKamtDZ2RnMFhuQjdmeDVMUGJOTEdRUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTgsMTksMjFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkOS5qc29uIjogIntcImtleURhdGFcIjpcInZMbVNWUjF4Z0J5dnNTcEIyVXFXY0ZiQU5pR3RYNGMveUFPczFHZG9hMTg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjIzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4LDE5LDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZF9fLmpzb24iOiAie1wia2V5RGF0YVwiOlwibm9KYXpMZ2lJWTRDZE5nRWNReFp3djB3OXUyRW94eitHaGZJVVF5Z1A1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTgsMTksMjFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkcC5qc29uIjogIntcImtleURhdGFcIjpcImJhclo4QU1EOUpWMUxNeXNaZ0NvNTBzd1BpM1ZPdXI5MEYxUm5rZ3ZmTDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWRxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUHdOYVIxWUgrTGxocDFyRHcwdFFOK2k3MGdSN3pWQ3hDQWxqWDU2RFVnZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsMGF5c2NXeWFrRWFjaXV1dzNTdlg1S2oxejIyT2JQWVdvNWZZd0g0RXRjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMyw1XX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzZHpNbVo5emRRekl3UCs4WTZXR0FkaTUxTC9XSUZOZkJnNHJheEU5QitNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWR0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZzd6VDc3VzNVVDk2VityOTF6SHo5Vy8wQmxzb1NOL0NtSWFVY01ObUUyMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY3NzI3ODE2N1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkdS5qc29uIjogIntcImtleURhdGFcIjpcIlhqT1JBZ0RReVVHZ0czUGFQSXlYMGltTjRldmtjaG8yQzRVYXJVRWM5WG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk2Nzc1MjkwMjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZHYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBOE9VNnRSUjdSYVNJTFA5WlJ0c0dETWVqOUY1OHplY0lIYW01bkNMc1BnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjo4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWR3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibWFSbXBobnAvdnc4Q2xqVlFiT0hydHNPK0lxNHhFRFFIVDJRbXQ3TE9Qdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6OSxcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY3OTczMjM2NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlkeC5qc29uIjogIntcImtleURhdGFcIjpcIi9jdG53YkFSbzl3dWlJU2g5ZENmL2kxeGN4ajIrNjJOeEpKczdEVmQwUnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjEyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsNl19LFwidGltZXN0YW1wXCI6XCIxNzI5NjgyMTE4MTAyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWR5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiUy9MTzdxUjlvaFE4TUxucVZXMFk2dlBSa0t2dHdmbTNCM0JJc0NDT0hxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MTMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2XX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk2ODIyODk4ODJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZHouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvMlp3REszSkNEeU4rSDEwSnJSQStOcTAwQmtWNFRhNFRRNVIrQ3FUdkZ3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjoxNCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDZdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY4MjMyNjI3MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUllQS5qc29uIjogIntcImtleURhdGFcIjpcIlJQcEJlWGczWFM2ME04MVgrbTNTeUV5bXQ2eld2d3hFMnU5S0hDa1FpNXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjI0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4LDE5LDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJZUIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCcWJlQ3lWNVdQKzRucGlUOE9hUnpHRmVIRDhZS3VZYnR4ckQwY2V4TURnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDQzOTY0NTIsXCJjdXJyZW50SW5kZXhcIjoyNCxcImRldmljZUluZGV4ZXNcIjpbMCwxOCwxOSwyMV19LFwidGltZXN0YW1wXCI6XCIxNzMzOTQzMzIyNjMyXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWVDLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYzhHdW92VWZHTVoyMWoraE8yQ2U4c2QvdlE4ZHJCTDRZMENHeTlzYU9RYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ0Mzk2NDUyLFwiY3VycmVudEluZGV4XCI6MjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTgsMjFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk0MzMzMjcyOFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUllRC5qc29uIjogIntcImtleURhdGFcIjpcIk5XZDZweEhxUjl0c1VzV1dhUE9nQ04xUkRCZUFHUWJYR2JmR05nZ2J2Q0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0NDM5NjQ1MixcImN1cnJlbnRJbmRleFwiOjI2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDE4LDIxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5NDQyMTM2NThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "didi",


  errorChat : process.env.ERROR_CHAT || "i.fucked;up",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
