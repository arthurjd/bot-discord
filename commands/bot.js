const { SlashCommandBuilder } = require('discord.js')

module.exports= {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Responde com nome servidor'),
}