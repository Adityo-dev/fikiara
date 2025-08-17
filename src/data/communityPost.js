const communityPost = [
  {
    id: 1,
    user: "Fikira1",
    avatar: "/favicon.png",
    date: new Date("2025-08-16T09:30:00+06:00"),
    content:
      "Announcing our new AI-powered analytics platform! Launching next month. 🚀 #AI #TechInnovation",
    image: "/cr7.jpg",
    reactions: { like: ["User2", "User5"], love: ["User3"], wow: ["You"] },
    comments: [
      {
        id: 101,
        user: "Fahim Rahman",
        avatar: "/instructor2.png",
        content: "Will it support real-time data processing?",
        date: new Date("2025-08-16T10:00:00+06:00"),
        likes: ["You"],
        image: null,
        reactions: { like: ["User1"] },
        replies: [
          {
            id: 102,
            user: "Fikira1",
            avatar: "/favicon.png",
            content: "Yes, real-time processing is included!",
            date: new Date("2025-08-16T10:05:00+06:00"),
            likes: [],
            image: null,
            reactions: {},
            replies: [],
          },
        ],
      },
    ],
    showComments: false,
    isAdmin: true, // Added isAdmin flag
  },
  {
    id: 2,
    user: "Fikira2",
    avatar: "/favicon.png",
    date: new Date("2025-08-15T11:45:00+06:00"),
    content:
      "Get your early bird tickets for Fikira2 2025! Visit techsummit.io. #TechSummit #Innovation",
    image: "/UIUXDesignFundamentals.jpg",
    reactions: { like: ["User3", "You"], wow: ["User5"], care: ["User9"] },
    comments: [
      {
        id: 201,
        user: "Imran Ali",
        avatar: "/instructor5.png",
        content: "What’s the focus of this year’s summit?",
        date: new Date("2025-08-15T12:15:00+06:00"),
        likes: ["User2"],
        image: null,
        reactions: { like: ["You"] },
        replies: [
          {
            id: 202,
            user: "Fikira2",
            avatar: "/summit-logo.png",
            content:
              "AI, blockchain, and sustainable tech. Check the full agenda on our site!",
            date: new Date("2025-08-15T12:30:00+06:00"),
            likes: [],
            image: null,
            reactions: {},
            replies: [],
          },
        ],
      },
    ],
    showComments: false,
    isAdmin: true, // Added isAdmin flag
  },
  {
    id: 3,
    user: "You",
    avatar: "/instructor4.png",
    date: new Date("2025-08-16T14:20:00+06:00"),
    content:
      "Just completed a course on advanced React patterns. Highly recommend it! #ReactJS #WebDevelopment",
    image: null,
    reactions: { like: ["User1", "User6"], care: ["User2"] },
    comments: [
      {
        id: 301,
        user: "Nadia Islam",
        avatar: "/instructor3.png",
        content: "Which platform did you use for the course?",
        date: new Date("2025-08-16T15:00:00+06:00"),
        likes: ["User4"],
        image: null,
        reactions: { like: ["User5"] },
        replies: [
          {
            id: 302,
            user: "You",
            avatar: "/instructor4.png",
            content: "I took it on Udemy. I'll share the link!",
            date: new Date("2025-08-16T15:10:00+06:00"),
            likes: [],
            image: null,
            reactions: {},
            replies: [],
          },
        ],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 4,
    user: "Riya Sharma",
    avatar: "/instructor6.png",
    date: new Date("2025-08-15T16:10:00+06:00"),
    content:
      "Launched a new app to track carbon footprints. Feedback welcome! 🌱 #Sustainability #AppDevelopment",
    image: "/design1.png",
    reactions: { like: ["You"], love: ["User4", "User8"], care: ["User1"] },
    comments: [
      {
        id: 401,
        user: "Sara Khan",
        avatar: "/instructor7.png",
        content: "Can we test the beta version?",
        date: new Date("2025-08-15T16:30:00+06:00"),
        likes: ["User1"],
        image: null,
        reactions: { like: ["User5"] },
        replies: [],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 5,
    user: "Mehedi Hasan",
    avatar: "/instructor8.png",
    date: new Date("2025-08-14T08:00:00+06:00"),
    content:
      "New open-source project for real-time collaboration tools now on GitHub! #OpenSource #Collaboration",
    image: null,
    reactions: { like: ["User2", "You"], haha: ["User7"] },
    comments: [
      {
        id: 501,
        user: "Ayesha Begum",
        avatar: "/instructor5.png",
        content: "What’s the tech stack?",
        date: new Date("2025-08-14T08:30:00+06:00"),
        likes: [],
        image: null,
        reactions: { like: ["User3"] },
        replies: [
          {
            id: 502,
            user: "Mehedi Hasan",
            avatar: "/instructor8.png",
            content:
              "React, Node.js, and WebSocket. Details in the GitHub README!",
            date: new Date("2025-08-14T08:45:00+06:00"),
            likes: ["You"],
            image: null,
            reactions: {},
            replies: [],
          },
        ],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 6,
    user: "Nadia Islam",
    avatar: "/instructor3.png",
    date: new Date("2025-08-14T12:15:00+06:00"),
    content:
      "Attended a great webinar on cloud computing trends. Highly recommend! #CloudComputing #Tech",
    image: "/cr7.jpg",
    reactions: { like: ["User1", "User5"], wow: ["You"] },
    comments: [
      {
        id: 601,
        user: "Fahim Rahman",
        avatar: "/instructor2.png",
        content: "Can you share the webinar link?",
        date: new Date("2025-08-14T12:45:00+06:00"),
        likes: ["User4"],
        image: null,
        reactions: { like: ["You"] },
        replies: [],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 7,
    user: "Fahim Rahman",
    avatar: "/instructor2.png",
    date: new Date("2025-08-13T10:00:00+06:00"),
    content:
      "Published a new article on optimizing database queries for performance. Check it out! #Database #Tech",
    image: null,
    reactions: { like: ["You", "User3"], love: ["User6"] },
    comments: [
      {
        id: 701,
        user: "Riya Sharma",
        avatar: "/instructor6.png",
        content: "Which databases did you cover?",
        date: new Date("2025-08-13T10:30:00+06:00"),
        likes: ["User1"],
        image: null,
        reactions: { like: ["You"] },
        replies: [],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 8,
    user: "Sara Khan",
    avatar: "/instructor7.png",
    date: new Date("2025-08-13T14:30:00+06:00"),
    content:
      "Excited to join a new project on blockchain-based voting systems. Any tips? #Blockchain #Tech",
    image: null,
    reactions: { like: ["User2", "User4"], wow: ["You", "User8"] },
    comments: [
      {
        id: 801,
        user: "Mehedi Hasan",
        avatar: "/instructor8.png",
        content: "Focus on security and scalability. Happy to discuss more!",
        date: new Date("2025-08-13T15:00:00+06:00"),
        likes: [],
        image: null,
        reactions: { like: ["You"] },
        replies: [],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 9,
    user: "Imran Ali",
    avatar: "/instructor5.png",
    date: new Date("2025-08-12T09:15:00+06:00"),
    content:
      "Looking for collaborators on a machine learning project for predictive analytics. DM me! #MachineLearning #AI",
    image: null,
    reactions: { like: ["You", "User5"], care: ["User3"] },
    comments: [
      {
        id: 901,
        user: "Nadia Islam",
        avatar: "/instructor3.png",
        content: "What’s the scope of the project?",
        date: new Date("2025-08-12T09:45:00+06:00"),
        likes: ["User2"],
        image: null,
        reactions: { like: ["You"] },
        replies: [
          {
            id: 902,
            user: "Imran Ali",
            avatar: "/instructor5.png",
            content:
              "Predicting customer churn using ML models. Details in DM!",
            date: new Date("2025-08-12T10:00:00+06:00"),
            likes: [],
            image: null,
            reactions: {},
            replies: [],
          },
        ],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
  {
    id: 10,
    user: "Ayesha Begum",
    avatar: "/instructor9.png",
    date: new Date("2025-08-11T11:00:00+06:00"),
    content:
      "Shared my latest UI/UX design portfolio on Behance. Feedback appreciated! #UIUX #Design",
    image: null,
    reactions: { like: ["You", "User1"], love: ["User7"], haha: ["User4"] },
    comments: [
      {
        id: 1001,
        user: "Fahim Rahman",
        avatar: "/instructor2.png",
        content: "Looks stunning! Can you share the link?",
        date: new Date("2025-08-11T11:30:00+06:00"),
        likes: ["User3"],
        image: null,
        reactions: { like: ["You"] },
        replies: [],
      },
    ],
    showComments: false,
    isAdmin: false, // Regular user
  },
];

export { communityPost };
