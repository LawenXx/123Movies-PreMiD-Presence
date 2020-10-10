

var presence = new Presence({
  clientId: "661352679536197636"
}),
    
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "1337x"
  };
   if(
   document.location.pathname == "/" || document.location.pathname == "/home/"
 )
 {
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = "Viewing home page";
 }
else if (document.location.pathname.startsWith("/recently-added.html")) {
  presenceData.details = "Browsing recently-added movies";
} 
if (presenceData.details == null) {
  presence.setTrayTitle();
  presence.setActivity();
} else {
  presence.setActivity(presenceData);
}
});
