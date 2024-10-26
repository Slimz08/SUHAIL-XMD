const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "260973762953";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_55_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQwLFxuICAgICAgICA0MixcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDksXG4gICAgICAgIDg1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA0LFxuICAgICAgICA2MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzksXG4gICAgICAgIDU2LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDc1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICA3MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJtcjUxeFREZzIzL241THpjdytaSkxtbll3aVBudjcxUUpLbUF4U1pvbE84PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvWXRjR2VjTVNaR1paXzVlLUN4aUF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI4YWZlMjExLWU2YjEtNDlmYS1hNzYwLWIzMmJmODMxMWFlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDEsXG4gICAgICA1MixcbiAgICAgIDE5NSxcbiAgICAgIDcsXG4gICAgICAxMzQsXG4gICAgICAxNDUsXG4gICAgICAxNSxcbiAgICAgIDEyMyxcbiAgICAgIDQwLFxuICAgICAgNTksXG4gICAgICAyMjgsXG4gICAgICAyOSxcbiAgICAgIDk3LFxuICAgICAgNSxcbiAgICAgIDI0NyxcbiAgICAgIDE4MSxcbiAgICAgIDgwLFxuICAgICAgMTkzLFxuICAgICAgNTQsXG4gICAgICAxNTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzUsXG4gICAgICAxMzMsXG4gICAgICA2NyxcbiAgICAgIDIyNSxcbiAgICAgIDEzLFxuICAgICAgMTcsXG4gICAgICA0MSxcbiAgICAgIDEyNyxcbiAgICAgIDE0MixcbiAgICAgIDIxOCxcbiAgICAgIDE3NixcbiAgICAgIDEwMCxcbiAgICAgIDExLFxuICAgICAgMTA2LFxuICAgICAgMTc1LFxuICAgICAgNDksXG4gICAgICAyMzAsXG4gICAgICAxLFxuICAgICAgMjQxLFxuICAgICAgMTczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktDUUxaNTVMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjA5NzM3NjI5NTM6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzQ2MDEyNDExNTAxNTozOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJYnFyNndGRVA2OTlMZ0dHQm9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFnRzFyUytyVUxkN29JYkp2cUFqSnozL3ZDdVJNNURBTnRna0djb01zZzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQStvZzNNbXNnMmoxUi9DVWt3QVV1VUtPVnlkdlZwaTdZeUhIMjNwdVA5SnJuU0ZFQVVMbUR2c0JYNEVZcmMxNVd3cE9zRCtyZEhTZWtUOE4vUDB3REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibUFpMEpqQkRpMU1SQmR0YTJCQ1hnaXF3c0UrV2FiblZYS1d0L0JBQ0htZlN0dDdxVS9xcVZHVUVQbUxNL1RVNzFPcmV4SDAxR05EUVhFNG9MY1hlQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYwOTczNzYyOTUzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5OTYxNzMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSFp1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIWnUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6KzNSMjJ6RjdOVjhLK1NCQ20zSEhEQXpabG5mUndMZkVLb2prV29abTRBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MzUyMzU1OTAsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTI5MzY3MjIwMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝛭𝛯𝐿𝐿𝛩",
  packname: process.env.PACK_NAME || "𝛭𝛯𝐿𝐿𝛩",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝛭𝛯𝐿𝐿𝛩",


  errorChat : process.env.ERROR_CHAT || "",
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
