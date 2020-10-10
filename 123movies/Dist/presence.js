const presence = new Presence({
    clientId: "661352679536197636"
}), presenceData = {
    largeImageKey: "123l"
};
presence.on("UpdateData", async () => {
    if (document.location.pathname.startsWith("/recently-added/")) {
        presenceData.details = "Browsing recently-added";
    }
    if (presenceData.details == null) {
        presence.setTrayTitle();
        presence.setActivity();
    }
    else {
        presence.setActivity(presenceData);
    }
});
