export const projects = [
  {
    name: "Echo – AI Video Translation & Dubbing Platform",
    description:
      "Built an AI-powered platform that translates and dubs YouTube videos into multiple languages while preserving voice tone, timing, and audio fidelity. Designed a multi-stage audio pipeline: voice separation (Demucs), transcription (Whisper), translation (GPT-4), TTS synthesis, and audio-video synchronization. Implemented real-time progress updates via WebSocket for responsive, live feedback during processing. Developed a modern, responsive frontend UI for video input, language selection, and live monitoring. Ensured production-readiness with session management, error/timeout handling, file cleanup, and audio normalization.",
    techStacks: "Python, FastAPI, WebSocket, AI/ML, Audio Processing",
    disable: true,
  },
  {
    name: "IPL Playoff Predictor",
    description:
      "A frontend application that shows current IPL standings and predicts whether teams can reach desired positions, displaying all possible scenarios for playoff qualification. Provides comprehensive analysis of team performance and playoff possibilities.",
    techStacks: "React.js, JavaScript, CSS, HTML",
    url: "https://ipl-playoff-predictor.vercel.app",
  },
  {
    name: "Shopee",
    description:
      "Shopee is a comprehensive web application designed for purchasing clothing products, featuring authentication capabilities. Users can seamlessly add items to their cart and complete transactions using Stripe. The content is efficiently managed through a Content Management System (CMS) built on KeystoneJS, seamlessly connected to the client through GraphQL",
    techStacks: "NextJs, ReactJs, GraphQl, KeystoneJS, PostgreSQL",
    url: "https://ecom-two-gold.vercel.app/",
  },
  {
    name: "ChatterBox",
    description:
      "Chatterbox is a Full Stack Chatting App. Uses Socket.io for real time communication and stores user details in encrypted format in Mongo DB Database.",
    techStacks: "ReactJs, Node.js, Express, MongoDB",
    disable: true,
    url: "https://github.com/humamath/Chat-App",
  },
  {
    name: "Sorting Visualiser",
    description:
      "A Simple visualization tool for sorting Algorithms. I created web application using HTML, CSS, Javascript to visualize how various sorting algorithms work such as Bubble sort , Merge sort Quick sort.",
    techStacks: "HTML,CSS,JavaScript",
    url: "https://humamath.github.io/Sorting-Visualizer/",
  },
];
