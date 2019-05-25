var videos = [
"https://www.youtube.com/embed/HZUXuKujQng",
"https://www.youtube.com/embed/Ye-xAoscVhU",
"https://www.youtube.com/embed/kT8If_4BoKM",
"https://www.youtube.com/embed/HWsFUw5SvsA",
"https://www.youtube.com/embed/xB5rLMMDvMM",
"https://www.youtube.com/embed/sqNRmXk9t8o",
"https://www.youtube.com/embed/Lw_c5cEnaFc",
"https://www.youtube.com/embed/ay2ahcQtyCI",
"https://www.youtube.com/embed/zoFtuFB2ThY",
"https://www.youtube.com/embed/OUeBHzEE7bI",
"https://www.youtube.com/embed/isDL2VYXEsA",
"https://www.youtube.com/embed/wZLpFNsW54A",
"https://www.youtube.com/embed/4BEg3jriDHM",
"https://www.youtube.com/embed/0vNPmFLr9t0",
"https://www.youtube.com/embed/ci9016O0FRQ",
"https://www.youtube.com/embed/LqeyZqvim8Y",
"https://www.youtube.com/embed/Jh_9zyjn46E",
"https://www.youtube.com/embed/qt0asKnSeG4",
"https://www.youtube.com/embed/2ZybyWvpnLw",
"https://www.youtube.com/embed/wKFY8_wNNuc",
];
window.onload = function () {
    var playerDiv = document.getElementById("random_player");
    var player = document.createElement("IFRAME");
    var randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
    player.setAttribute('width', '100%');
    player.setAttribute('height', '100%');
    player.setAttribute('allowFullScreen', '');
player.setAttribute('frameborder', '0');
    player.setAttribute('src', randomVideoUrl);
    playerDiv.appendChild(player);
};
