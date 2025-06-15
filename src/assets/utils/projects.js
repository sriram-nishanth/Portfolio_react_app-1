import blogImage from '../project/blog.png';
import bookExplorerImage from '../project/book.png';
import chatAppImage from '../project/chatapp.png';
const projects = [
  {
  id: 1,
  title: "Book Explorer",
  description: "A full stack book management application that allows users to search for books using external APIs and add them to their reading list.",
  techStack: ["PostgresSQL", "Express.js", "EJS", "Node.js", "Axios"],
  liveDemo: "https://book-project-1687.onrender.com/",
  sourceCode: "https://github.com/sriram-nishanth/Book-project.git",
  image: bookExplorerImage
  },
  {
    id: 2,
    title: "Chat App",
    description: "A real-time chat application with user authentication and WebSocket integration. Users can join chat rooms, send/receive messages, and stay connected across devices.",
    techStack: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
    liveDemo: "https://chat-app-eight-gold-99.vercel.app/",
    sourceCode: "https://github.com/sriram-nishanth/chat-App.git",
    image: chatAppImage
  },
  {
  id: 3,
  title: "Blog App",
  description: "A full stack blogging platform where users can create, edit, and delete their own posts, and browse posts from other users.",
  techStack: ["EJS", "Node.js", "Express.js"],
  liveDemo: "https://blog-project-w5cr.onrender.com/",
  sourceCode: "https://github.com/sriram-nishanth/Blog-project.git",
  image: blogImage
}];

export default projects;
