

var presence = new Presence({
  clientId: "661352679536197636"
}),
    
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "123l"
  };
   if(
   document.location.pathname == "/" || document.location.pathname.includes("/home/")
 )
 {
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = "Viewing home page";
 }
else if (document.location.pathname.includes("/recently-added.html")) {
  presenceData.details = "Browsing recently-added movies";
}else if (document.location.pathname.includes("/watch/")) {
  presenceData.startTimestamp = browsingStamp;
 var title = document.querySelector("span.vjs-control-text");
  presenceData.details = "Watching: " + title;
}
if (presenceData.details == null) {
  presence.setTrayTitle();
  presence.setActivity();
} else {
  presence.setActivity(presenceData);
}
});
