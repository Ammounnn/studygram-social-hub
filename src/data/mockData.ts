
// Mock user data for Edugram
export const users = [
  {
    id: "1",
    name: "Emma Watson",
    username: "emmastudies",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Computer Science student | Python enthusiast | Learning AI",
    following: 235,
    followers: 1420,
    subject: "Computer Science"
  },
  {
    id: "2",
    name: "James Miller",
    username: "jameslearns",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Physics major | Quantum mechanics nerd | Teaching assistant",
    following: 187,
    followers: 892,
    subject: "Physics"
  },
  {
    id: "3",
    name: "Sophia Chen",
    username: "sophiareads",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Literature student | Book lover | Essay writing tips",
    following: 312,
    followers: 1650,
    subject: "Literature"
  },
  {
    id: "4",
    name: "David Kim",
    username: "davidmath",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Mathematics professor | Algebra specialist | Online tutor",
    following: 124,
    followers: 3240,
    subject: "Mathematics"
  },
  {
    id: "5",
    name: "Olivia Johnson",
    username: "oliviabio",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Biology student | Medical school prep | Science communicator",
    following: 267,
    followers: 890,
    subject: "Biology"
  }
];

// Mock post data for Edugram
export const posts = [
  {
    id: "1",
    user: users[0],
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Pulled an all-nighter working on this Python project. Learned so much about data visualization with matplotlib and pandas! Check out this correlation matrix visualization I made. #python #datascience #coding",
    likes: 243,
    comments: 18,
    timestamp: "2 hours ago",
    subject: "Computer Science",
    tags: ["python", "datascience", "coding"]
  },
  {
    id: "2",
    user: users[1],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Understanding quantum entanglement is the key to advanced physics. Here's my whiteboard after trying to explain it to first-year students. The math is complex but so fascinating! #physics #quantummechanics #science",
    likes: 187,
    comments: 24,
    timestamp: "5 hours ago",
    subject: "Physics",
    tags: ["physics", "quantummechanics", "science"]
  },
  {
    id: "3",
    user: users[2],
    image: "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Annotating 'The Great Gatsby' for my literature class. Finding so many hidden symbols and metaphors on this re-read! Fitzgerald really was a master of symbolism. #literature #gatsby #analysis",
    likes: 312,
    comments: 37,
    timestamp: "8 hours ago",
    subject: "Literature",
    tags: ["literature", "gatsby", "analysis"]
  },
  {
    id: "4",
    user: users[3],
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Just solved this complex calculus problem after 3 days of working on it! The key was using the right substitution method. Swipe to see my step-by-step solution. #math #calculus #problemsolving",
    likes: 428,
    comments: 52,
    timestamp: "1 day ago",
    subject: "Mathematics",
    tags: ["math", "calculus", "problemsolving"]
  },
  {
    id: "5",
    user: users[4],
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    caption: "Cell structure diagram I drew for my biology final. Understanding organelles is fundamental to grasping how cells function as the basic units of life. #biology #cellbiology #science",
    likes: 196,
    comments: 15,
    timestamp: "2 days ago",
    subject: "Biology",
    tags: ["biology", "cellbiology", "science"]
  }
];

// Mock study topics
export const studyTopics = [
  "Mathematics", 
  "Computer Science", 
  "Physics", 
  "Literature", 
  "Biology", 
  "Chemistry",
  "History", 
  "Languages", 
  "Art", 
  "Economics", 
  "Psychology", 
  "Engineering"
];

// Mock suggested users
export const suggestedUsers = users.slice(2, 5);
