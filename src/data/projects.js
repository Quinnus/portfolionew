const myProjects = [
    {
        id: "001",
        name: "Homelab",
        desc: "A self-hosted homelab running 24/7 on a low-power mini-PC. Containerised services managed via Docker, including DNS-level content filtering, media serving (Plex), and a private dashboard accessible remotely via Tailscale.  Network built on TP-Link Omada.",
        url: "https://gethomepage.dev",
        stack: ["Networking", "Docker", "HTML", "YAML"],
        image: "/screenshots/homelab.png",

    },
    {
        id: "002",
        name: "Yes We Can",
        desc: "This was one of the first apps I created, as a university assignment.  " +
            "It's a simple concept - keep track of how much money you save or throw away by recycling or dumping drink containers.  " +
            "The app includes a barcode scanner for product information, and utilises a firestore database for recording totals.  ",
        url: "https://yeswecan.cloud",
        stack: ["JavaScript", "React", "CSS", "HTML"],
        image: "/screenshots/ywc.png",


    },
    {
        id: "003",
        name: "Simon",
        desc: "My plan is to recreate every classic game (maybe...), this time its 80s favourite Simon.  " +
            "This was less complex than Hangman, requiring a relatively simple setup of randomly generated numbers corresponding to a colour.  These were then matched to corresponding (ai-generated) images, to show the quadrants lighting up.  Apparently the original game was limited to a maximum sequence of 31 colours.  This will keep going forever, probably....",
        url: "https://simon-pivt.vercel.app",
        stack: ["JavaScript", "React", "CSS", "HTML"],
        image: "/screenshots/simon.png",


    },
    {
        id: "004",
        name: "Hangman",
        desc: "Another classic React update - this time for the word game Hangman.  " +
            "This started as a Java based university assignment, played out completely on the command line.  " +
            "I decided to take the basics from there and reproduce the logic, with some better imagery and sound, using React.  " +
            "A month or so later, some much better sound and graphics, as well as a persistent score system and much improved game logic from that initial assignment.",
        url: "https://hangman-react-omega.vercel.app/",
        stack: ["JavaScript", "React", "CSS", "HTML"],
        image: "/screenshots/hang.png",

    },
    {
        id: "005",
        name: "Trade Connect",
        desc: "Trade Connect was a University team assignment, designed to test our ability to work together as a group, " +
            "utilising SCRUM methodology, as well as deliver a working application.  " +
            "The idea came from helping people without transport visit recycling depots " +
            "- the friend with a car or van who would provide a lift.  " +
            "From there it went on to include various local tradespeople, including the original 'man-with-a-van'.",
        url: "https://trade-connect.help",
        stack: ["JavaScript", "React", "Scrum"],
        image: "/screenshots/tc.png",


    }
]

export default myProjects;