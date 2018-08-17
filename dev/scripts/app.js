// Page will have images of characters
// When a user clicks an image, generate a random quote based on the character

// Create an array with Kevin Audio Clips
audioFiles = {
    kevinAudio : [
        "nothing",
        "resources/kevin-alone.mp3",
        "resources/kevin-thirsty-for-more.mp3",
        "resources/kevin-anyone-order-me.mp3",
        "resources/kevin-come-and-get-me.mp3",
        "resources/kevin-dont-get-scared.mp3",
        "resources/kevin-shower.mp3",
        "resources/kevin-too-careful-underwear.mp3",
        "resources/kevin-buzz-your-girlfriend.mp3"
    ],

    // Create an array with Marv Audio Clips

    marvAudio : [
        "nothing",
        "resources/marv-reached-the-top.mp3",
        "resources/marv-electrocuted.mp3",
        "resources/marv-mon-cherie.mp3",
    ],

// Create an array with Harry Audio Clips

    harryAudio : [
            "nothing",
            "resources/buzz-phlegm-wad.mp3"
        ],

// Create an array with Buzz Audio Clips

    buzzAudio : [
            "nothing",
            "resources/buzz-phlegm-wad.mp3",
            "resource/buzz-a-2-d.mp3",
            "resource/buzz-on-my-ass.mp3"
        ],

// Create an array with Kate Audio Clips

    kateAudio : [
            "nothing",
            "resources/buzz-phlegm-wad.mp3"
        ],

// Create an array with Uncle Frank Audio Clips

    frankAudio : [
            "nothing",
            "resources/frank-get-outta-here.mp3",
            "resources/frank-little-jerk.mp3"
        ],

// Create an array with Angels Audio Clips

    angelsAudio : [
            "nothing",
            "resources/angels-count-of-10.mp3",
            "resources/angels-keep-the-change.mp3",
            "resources/angels-tell-me-you-love-me.mp3"
        ],
}

// Create a function that creates a random number based on the array length as per the character

const randomTrack = function (array) {
    console.log(array);
    return Math.floor(Math.random() * (array.length));
}

// Create a function that will play a random quote from the respective character 

$('.character').on('click', function () {
    let name = $(this).attr('id');
    let nameArray = name + "Audio";
    let thing = audioFiles[nameArray];
    // console.log(thing);
    // randomTrack(thing);
    // console.log(randomTrack(thing));
    // const trackNameID = "#" + name + '-track';
    // alert(trackNameID);
    const newSRC = audioFiles[nameArray][randomTrack(thing)]; //e.g. kevinAudio[4]
    console.log(newSRC);
    // alert(newSRC);
    $('#track').attr('src', newSRC);
    $('#track').trigger('play');
    $('.image').
//     // $('#buzz-track').attr('src', newSRC)[0].play();
});

// Technical challenge:
// Initially to get the app working, I started out with a function for each individual character to ensure the function actually works.  However, as a challenge to myself, I decided to consolidate 

// Animations for Header Text

// anime.timeline({ loop: true })
//     .add({
//         targets: '.animate-title-2 .title-pop',
//         scale: [14, 1],
//         opacity: [0, 1],
//         easing: "easeOutCirc",
//         duration: 800,
//         delay: function (el, i) {
//             return 400 * i;
//         }
//     }).add({
//         targets: '.animate-title-2',
//         opacity: 0,
//         duration: 1000,
//         easing: "easeOutExpo",
//         delay: 1000
//     });

