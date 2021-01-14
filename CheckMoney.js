if (canvas.tokens.controlled.length === 0) {
    ui.notifications.warn("Select at least 1 token.");
} else {
    let partyMoney = 0;
    for(let target of Array.from(canvas.tokens.controlled)) {
        partyMoney += target.actor.data.data.currency.pp * 10;
        partyMoney += target.actor.data.data.currency.gp;
        partyMoney += target.actor.data.data.currency.sp / 10;
        partyMoney += target.actor.data.data.currency.cp / 100;
    }

    ChatMessage.create({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({alias: "Money"}),
        whisper : ChatMessage.getWhisperRecipients("GM"),
        content: "Tokens own " + partyMoney + " GP"
    });
}