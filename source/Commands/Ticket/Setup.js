const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    config: {
        commands: ["setup"],
        name: "setup",
        help: "setup",
        enabled: true
    },

    run: async ({ message }) => {
        message.delete();

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('OyuncuSikayeti')
                    .setLabel('Oyuncu şikayeti')
                    .setStyle('DANGER'),
                new MessageButton()
                    .setCustomId('GenelSorunlar')
                    .setLabel('Genel sorunlar')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('Diger1')
                    .setLabel('Diğer')
                    .setStyle('PRIMARY'),
                    new MessageButton()
                    .setCustomId('Cekilis')
                    .setLabel('Çekiliş/Etkinlik ödülü')
                    .setStyle('DANGER')
            );
        
        try {
            await message.channel.send({
                embeds: [{
                    title: 'Destek Talebi',
                    description: 'Destek talebi açmak için sorunun neyse aşağıdaki butonlara basıp açabilirsn. Gereksiz, troll destek talepleri ceza ile sonuçlandırılır.',
                    color: '58628B',
                    footer: {
                        text: 'Powered by Zalorant'
                    }
                }],
                components: [row1]
            });
        } catch (error) {
            console.error('Mesaj gönderilirken bir hata oluştu:', error);
        }
    }
};