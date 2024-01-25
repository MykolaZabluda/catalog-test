import airpods from "@/assets/app.png";
import aplwtch from "@/assets/aw9.png";
import buds2 from "@/assets/gb2.png";
import watch6 from "@/assets/gw6.png";
import iphone11 from "@/assets/ip11.png";
import iphone15 from "@/assets/ip15.png";
import lenovo from "@/assets/ltp.png";
import macbook from "@/assets/mbp.png";
import logitech from "@/assets/mxks.png";
import s23 from "@/assets/s23.png";
import watch from "@/assets/watch.svg"
import laptop from "@/assets/laptop.svg"
import smartphone from "@/assets/smartphone.svg"
import keyboard from "@/assets/keyboard.svg"
import headphone from "@/assets/headphone.svg"
import {FILTER_TYPES} from "@/shared/button-helpers";

export const CARD_DATA = [
    {
        id: "1",
        type: [FILTER_TYPES.laptops, FILTER_TYPES.apple],
        cardImg: laptop,
        image: macbook,
        title: "MacBook Pro",
        price: "$1500",
        text1: "Turbocharged with the M2 Pro chip, MacBook Pro delivers even more power and efficiency than ever before. It delivers incredible performance whether plugged in or not, and even more when running on battery power. Combined with a stunning Liquid Retina XDR display and all the ports you need, this is the professional laptop you've been waiting for.",
        text2: "The next generation of Apple processors starts with the ultra-fast and incredible M2 Pro, a powerful and efficient chip that delivers extraordinary performance.",
    },
    {
        id: "2",
        type: [FILTER_TYPES.smartphones, FILTER_TYPES.apple],
        cardImg: smartphone,
        image: iphone15,
        title: "IPhone 15",
        price: "$800",
        text1: "With the iPhone 15, you get Dynamic Island, a 48MP main camera and USB-C — all in a durable case made of tinted glass and aluminum.",
        text2: "Screen (6.1, OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / dual main camera: 48 MP + 12 MP, front camera: 12 MP / 128 GB of built-in memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17",
    },
    {
        id: "3",
        type: [FILTER_TYPES.keyboards],
        cardImg: keyboard,
        image: logitech,
        title: "Logitech MX Keys s",
        price: "$100",
        text1: "With a compact wireless keyboard that offers a fast, accurate and silent typing experience, intelligent lighting and customizable macros to save time. MX Keys S also has an intelligent backlight that turns on when your fingers approach the keyboard and automatically adjusts the brightness according to the time of day. Now you have more control over the brightness and duration of the backlight with Logi Options+.",
        text2: "The keys light up when hands approach the keyboard and adapt to the environment; now with a larger selection of backlight settings on Logi Options+.",
    },
    {
        id: "4",
        type: [FILTER_TYPES.apple, FILTER_TYPES.headphones],
        cardImg: headphone,
        image: airpods,
        title: "AirPods Pro",
        price: "$500",
        text1: "AirPods Pro have up to 2 times more effective active noise absorption. Adaptive Permeability mode, as well as personalized spatial audio with dynamic head tracking for surround sound.",
        text2: "Touch control lets you swipe to change the volume, tap to select a track, answer or end a call, and tap and hold to switch between listening modes.",
    },
    {
        id: "5",
        type: [FILTER_TYPES.apple, FILTER_TYPES.smartphones],
        cardImg: smartphone,
        image: iphone11,
        title: "IPhone 11",
        price: "$300",
        text1: "With the iPhone 15, you get Dynamic Island, a 48MP main camera and USB-C — all in a durable case made of tinted glass and aluminum.",
        text2: "Screen (6.1, OLED (Super Retina XDR), 2556x1179) / Apple A16 Bionic / dual main camera: 48 MP + 12 MP, front camera: 12 MP / 128 GB of built-in memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 17",
    },
    {
        id: "6",
        type: [FILTER_TYPES.laptops],
        cardImg: laptop,
        image: lenovo,
        title: "Lenovo ThinPad",
        price: "$700",
        text1: "In today's digital world at our fingertips, it's easy to lose track of time. That is why the ThinkPad T14 laptop always takes care of your health. With Glance, you can track how much time you spend in front of a screen, check your posture, and follow the 20-20-20 rule: Every 20 minutes, look at objects 20 feet away (about 6 m) and look at them within 20 seconds.",
        text2: "For work, rest and entertainment Communicating with colleagues online, jointly implementing creative ideas or simply watching your favorite series on streaming services - the ThinkPad T14 laptop will help you cope with any of these tasks with ease. The 14-inch display with an aspect ratio of 16:10 has an impressive amount of workspace.",
    },
    {
        id: "7",
        type: [FILTER_TYPES.smartphones],
        cardImg: smartphone,
        image: s23,
        title: "Samsung Galaxy S23",
        price: "$800",
        text1: "Get ready to conquer everyone with incredible night shots! The advanced artificial intelligence of the Night mode will preserve the clarity of every detail and make your photos and videos bright and saturated even in low light. The revolutionary microprocessor of the phone ensures flawless playback of games and streaming video, and the battery charge is enough for the whole day. Feel the care of nature in every detail. We created this smartphone using recycled glass and PET film, as well as natural dyes. And the basis of the box was recycled paper materials.",
        text2: "Create cosmically sharp images in RAW format. Open Expert RAW and point your camera at the stars to capture constellations and planets in breathtaking detail.",
    },
    {
        id: "8",
        type: [FILTER_TYPES.headphones],
        cardImg: headphone,
        image: buds2,
        title: "Samsung Galaxy Buds",
        price: "$300",
        text1: "You will hear the sound of every note, because they are born inside your beloved Samsung Galaxy. The updated Samsung Seamless Codec encodes full 24-bit audio and decodes it with Galaxy Buds2 Pro, maintaining the high quality of 24-bit sound. Intelligent Active Noise Cancellation (ANC) Listen only to what you want to hear\ Active Noise Canceling (ANC) is more effective than ever before. Three high-SNR microphones enable the Galaxy Buds2 Pro to detect and neutralize even more extraneous sounds, even quiet sounds like the wind.",
        text2: "360 surround sound Feel the sound around you The 360 surround sound technology allows you to create a realistic feeling of surround sound. 360 surround sound algorithms with direct multi-channel mode (5.1-channel/7.1-channel/Dolby Atmos) and advanced Dolby Head Tracking mode synchronize every movement, creating an unforgettable experience. The 360 surround sound technology can even determine the direction of the sound when moving the head and create the effect of the spatial presence of the sound source.",
    },
    {
        id: "9",
        type: [FILTER_TYPES.watches],
        cardImg: watch,
        image: watch6,
        title: "Samsung Galaxy Watch 6",
        price: "$400",
        text1: "The best view. More productive work. This is a dream. We bring it to life: the largest display, special workouts, sleep tracking and a classic design. Start your daily wellness routine with an elegant timepiece in a classic style.",
        text2: "Enjoy improved visual effects and crisp animated graphics on a 30% larger display. The perfect ratio of display sizes and the bezel, which has become 15% thinner. Now there is more space on the screen to display information and perform actions.",
    },
    {
        id: "10",
        type: [FILTER_TYPES.watches, FILTER_TYPES.apple],
        cardImg: watch,
        image: aplwtch,
        title: "Apple Watch 9",
        price: "$500",
        text1: "Apple Watch Series 9 helps you stay connected, stay healthy, stay safe and stay active. Double tap is a magical way to interact with Apple Watch, equipped with an even brighter display.",

    },
];
