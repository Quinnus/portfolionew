const myProjects = [
    {
        id: "001",
        name: "Homelab",
        desc: "My first attempt at setting up a homelab.  I undertook this at the same time I upgraded the home network, with a TP-Link Omada setup.  Homepage (https://gethomepage.dev) is an amazing resource, providing a static landing page or pages, with a straightforward YAML configuration.  A low power mini-PC runs the system, which includes DNS-level content filtering, media serving (via Plex), and a number of other useful services.  It's my homepage, which I can access via Tailscale.",
        stack: ["CSS", "Docker", "HTML", "YAML"],
        image: "/screenshots/homelab.png",

    },
    {
        id: "002",
        name: "Yes We Can",
        desc: "A mobile-first recycling support app",
        stack: ["JavaScript", "React", "CSS", "HTML", "Vercel"],
        image: "/screenshots/ywc.png",


    },
    {
        id: "003",
        name: "TTT",
        desc: "A colorful TTT game using react",
        stack: ["Java", "CSS", "HTML"],
        url: "https://myrecycling.com",
        image: "/screenshots/TTT.png",
        github: "https://githublink2.com"

    },
    {
        id: "004",
        name: "Hangman",
        desc: "A react powered version of the classic game",
        stack: ["JavaScript", "React", "CSS", "HTML"],
        url: "https://myrecycling.com",
        image: "/screenshots/hang.png",
        github: "https://githublink2.com"

    },
    {
        id: "005",
        name: "Trade Connect",
        desc: "Where Trades connect",
        stack: ["JavaScript", "CSS", "HTML"],
        url: "https://myrecycling.com",
        image: "/screenshots/chess-small.png",
        github: "https://githublink2.com"

    }
]

export default myProjects;