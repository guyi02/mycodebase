// configura a lib do onesignal com a api-key fornecida pela plataforma
OneSignal.init("api-key");

OneSignal.inFocusDisplaying(2);
// adiciona um listener (pode ser qualquer nome)
OneSignal.addEventListener("ids", this.onIds);

// seta o id ai serviço do onesignal
setOneSignalUserTag = async user_id => {
    await OneSignal.sendTag("user_id", user_id.toString());
};
