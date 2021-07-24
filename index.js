const Discord = require("discord.js")

const fetch = require("node-fetch");

const keep_alive = require('./keep_alive.js')

const client = new Discord.Client()

const config = {

    "token": process.env.Token,

    "prefix": "#"

}

client.login(config.token)

client.on("ready",()=>{

    console.log(`BOT ${client.user.tag} is now online!`)

    client.user.setActivity("MINIGAMES", {type:"STREAMING"})

})

client.on("message", async (message) => {

    if(!message.guild || message.author.bot || !message.content.trim().startsWith(config.prefix)) return;

    // "!ytt asda" --> "ytt asda" --> ["ytt", "asda"]

    var args = message.content.slice(config.prefix.length).trim().split(" ")

    // ["ytt", "asda"] --> cmd = "ytt" & ["asda"]

    var cmd = args.shift().toLowerCase()

    const { channel } = message.member.voice;

    if(!channel) return message.reply("You need to join a Voice Channel")

    if(cmd == "ytt" || cmd == "youtubetogether"){

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {

            method: "POST",

            body: JSON.stringify({

                max_age: 86400,

                max_uses: 0,

                target_application_id: "755600276941176913",

                target_type: 2,

                temporary: false,

                validate: null

            }),

            headers: {

                "Authorization": `Bot ${config.token}`,

                "Content-Type": "application/json"

            }

        }).then(res => res.json())

        .then(invite =>{

            if(!invite.code) return message.reply(":x: Cannot start minigame")

            message.channel.send(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)

        })

    }else if(cmd == "betrayal" || cmd == "betrayal.io"){

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {

            method: "POST",

            body: JSON.stringify({

                max_age: 86400,

                max_uses: 0,

                target_application_id: "773336526917861400",

                target_type: 2,

                temporary: false,

                validate: null

            }),

            headers: {

                "Authorization": `Bot ${config.token}`,

                "Content-Type": "application/json"

            }

        }).then(res => res.json())

        .then(invite =>{

            if(!invite.code) return message.reply(":x: Cannot start minigame")

            message.channel.send(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)

        })

    }else if(cmd == "poker" || cmd == "poker-night"){

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {

            method: "POST",

            body: JSON.stringify({

                max_age: 86400,

                max_uses: 0,

                target_application_id: "755827207812677713",

                target_type: 2,

                temporary: false,

                validate: null

            }),

            headers: {

                "Authorization": `Bot ${config.token}`,

                "Content-Type": "application/json"

            }

        }).then(res => res.json())

        .then(invite =>{

            if(!invite.code) return message.reply(":x: Cannot start minigame")

            message.channel.send(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)

        })

    }else if(cmd == "fishing" || cmd == "fishington.io"){

        fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {

            method: "POST",

            body: JSON.stringify({

                max_age: 86400,

                max_uses: 0,

                target_application_id: "814288819477020702",

                target_type: 2,

                temporary: false,

                validate: null

            }),

            headers: {

                "Authorization": `Bot ${config.token}`,

                "Content-Type": "application/json"

            }

        }).then(res => res.json())

        .then(invite =>{

            if(!invite.code) return message.reply(":x: Cannot start minigame")

            message.channel.send(`Click on the Link to start the GAME:\n> https://discord.com/invite/${invite.code}`)

        })

    }else {

        return message.reply("Available games: `ytt`,`betrayal`,`fishing`, `poker`")

    }

})
