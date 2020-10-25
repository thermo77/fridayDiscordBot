const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'friday',
    description: "text",
       execute(msg, args){
           
        var date = new Date()
        var day = String(date.getDay())
        var hour = String(date.getHours())
        var minute = String(date.getMinutes())
        var second = String(date.getSeconds())

        if(day < 6){
            daysuntill = 4 - day
        }else if(date = 6){
            daysuntill = 5
        }else if(date = 7){
            daysuntill = 4
        }

        hoursuntil = 24 - hour
        minutesuntil = 60 - minute
        secondsuntil = 60 - second

        if (hoursuntil == 1){
            hoursText = ('hour')
        }else{
            hoursText = ('hours')
        }
        if (minutesuntil == 1){
            minutesText = ('minute')
        }else{
            minutesText = ('minutes')
        }
        if (secondsuntil == 1){
            secondsText = ('second')
        }else{
            secondsText = ('seconds')
        }

        msg.channel.send('`' + daysuntill + ' days`, `' + hoursuntil + ' '+hoursText+'`, `' + minutesuntil + ' '+minutesText+'` and `' + secondsuntil + '` '+secondsText+' until friday!')            
    }
}