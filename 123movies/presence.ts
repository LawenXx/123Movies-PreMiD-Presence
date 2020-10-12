

var presence = new Presence({
  clientId: "661352679536197636"
}),
var browsingStamp = Math.floor(Date.now() / 1000);

const getElement = (query: string): string | undefined => {
  return document.querySelector(query)?.textContent || undefined;
};
  
presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "123l"
  };
   if(
   document.location.pathname == "/" || document.location.pathname.includes("/home/" ||
   document.location.pathname.includes("/recently-added.html") || 
   document.location.pathname.includes("search-movies/") || 
   document.location.pathname.includes("/tv-series")
 )
 {
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = "Browsing...";
 }
}else if (document.location.pathname.includes("/watch/")) {
  presenceData.startTimestamp = browsingStamp;
  presenceData.details = getElement(".main-content h3");
  presenceData.state = "Director: " + getElement("#mv-info > div.mvi-content > div.mvic-desc > div.mvic-info > div.mvici-left > p:nth-child(3) > a");
}
if (presenceData.details == null) {
  presence.setTrayTitle();
  presence.setActivity();
} else {
  presence.setActivity(presenceData);
}
});
