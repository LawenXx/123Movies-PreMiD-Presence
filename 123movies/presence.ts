

var presence = new Presence({
  clientId: "661352679536197636"
}),
strings = presence.getStrings({
  play: "presence.playback.playing",
  pause: "presence.playback.paused"
});

var browsingStamp = Math.floor(Date.now() / 1000);
var playing, lastPlaybackState = null;

const getElement = (query: string): string | undefined => {
  return document.querySelector(query)?.textContent || undefined;
};

if (lastPlaybackState != playing) {
  lastPlaybackState = playing;
  browsingStamp = Math.floor(Date.now() / 1000);
}

presence.on("UpdateData", async () => {
playing  = (document.querySelector(".vjs-current-time-display") ||
document.querySelector(".jw-text-elapsed")) !== null ? true : false;
  const presenceData: PresenceData = {
    largeImageKey:
      "123l" ,
    smallImageKey:
      "123l" ,
    smallImageText: "", 
    details: "Browsing Page Name",
    state: "Reading section A",

  };
