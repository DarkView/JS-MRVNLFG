# Commands 🔊
Besides the LFG commands available to all users, this bot features a few different commands that are usefull for moderators.
You can find examples of these commands here: [Examples 📷](https://github.com/DarkView/JS-MRVNLFG/blob/master/docs/EXAMPLES.md)

## Definitions
 - **user**
   - Anything that uniquely identifies a user. Examples:
     - UserID: `108552944961454080`
     - Mention: `@Dark`
     - Username#Identifier: `Dark#1010`
 - **duration**
   - Time defined with suffixes like `d` and `m`. Time options:
     - s: Seconds
     - m: Minutes
     - h: Hours
     - d: Days
     - w: Weeks
   - Example: `10d3h7m` - 10 Days, 3 Hours and 7 Minutes
   - If no suffix (or an invalid one) is present, Minutes is assumed
 - **-active**
   - A simple toggle. If `-active` or `-a` is present, the toggle is set to true. Defaults to false  
   
*Options without brackets are required, options in [] brackets are optional*
*All commands below require the prefix specified in the config!*

Jump to a specific command:
- [where / w](#where)
- [follow / f](#follow)
- [follow stop / fs](#follow-stop)
- [notify / n](#notify)
- [vcnotify / v](#vcnotify)
- [voice_usage / vu](#voice-usage)
- [delay](#delay)
- [ping](#ping)
- [uptime](#uptime)
- [version](#version)
- [level](#level)

## Moderation

### Where
**Plugin:** where  
**Usage:** `where user`  
**Alias:** `w`  

Using this command will post an invite to the voice channel the user is currently in.  
If the user is not in a voice channel, an error will be displayed.

### Follow
**Plugin:** where  
**Usage:** `follow user [duration] [-active]`  
**Alias:** `f`  

Using this command will post an invite to any voice channel the user joins after the command is ran. It will also display a message if they disconnect.  
Using the `-active` toggle you will be moved to the voice channel the user joined.

### Follow Stop
**Plugin:** where  
**Usage:** `follow stop user`  
**Alias:** `fs`  

Using this command will delete all follow requests you have active for the specified user.

### Notify
**Plugin:** where  
**Usage:** `notify user [duration]`  
**Alias:** `n`  

This is essentially the follow command, but it will only post an invite to the channel once. You can also not use the active tag with this.

### VCNotify
**Plugin:** where  
**Usage:** `notify voiceChannelID [duration]`  
**Alias:** `v, vc, vcn`  

This command allows you to closely monitor a specific voice channel.  
You will be notified every time someone joins, leaves or switches to the voice channel.

## General

### Voice Usage
**Plugin**: where  
**Usage:** `voice_usage`

Displays the amount of voice channels in use at the current time for each category

### Delay
**Plugin:** lfg  
**Usage:** `delay`  

Displays the lowest, highest and mean delay of the last 5 LFG requests.

### Ping
**Plugin:** utility  
**Usage:** `ping`  

Calculates the bots ping to Discord by posting 3 messages in succession.

### Uptime
**Plugin:** utility  
**Usage:** `uptime`  

Displays the amount of time the bot is online in humanized time.

### Version
**Plugin:** utility  
**Usage:** `version`  

Displays the current bot version along with a link to the [releases page](https://github.com/DarkView/JS-MRVNLFG/releases)

### Level
**Plugin:** utility  
**Usage:** `level [user]`  

Displays the level of the specified user. 

# Suggestions
If you have any change you would like to see or a command added, do not hesitate to contact me!  
You can contact me in Discord with the username: **Dark#1010** (though i delete all random friend requests) or via the [Apex Legends Discord Server](https://discord.gg/apexlegends)
