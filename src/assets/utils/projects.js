import blogImage from '../project/blog.png';
import bookExplorerImage from '../project/book.png';
import chatAppImage from '../project/chatapp.png';
const projects = [
  {
    id: 1,
    title: "Book Explorer",
    description: "A full stack book management application using the PERN stack. It allows users to perform CRUD operations, search for books using external APIs, and manage their reading list.",
    techStack: ["PostgreSQL", "Express.js", "React", "Node.js", "Axios"],
    liveDemo: "https://your-book-explorer-link.com",
    sourceCode: "https://github.com/yourusername/book-explorer",
    image: bookExplorerImage
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time chat application with user authentication and WebSocket integration. Users can join chat rooms, send/receive messages, and stay connected across devices.",
    techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    liveDemo: "https://your-chat-app-link.com",
    sourceCode: "https://github.com/yourusername/chat-app",
    image: chatAppImage
  },
  {
    id: 3,
    title: "Blog App",
    description: "A full stack blogging platform where users can register, write posts, edit and delete content, and browse posts from other users.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    liveDemo: "https://your-blog-app-link.com",
    sourceCode: "https://github.com/yourusername/blog-app",
    image: blogImage
  }
];

export default projects;
