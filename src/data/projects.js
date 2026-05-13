import p1 from "@/assets/project1.png";
import p2 from "@/assets/project2.png";
import p3 from "@/assets/project3.png";
import p4 from "@/assets/project4.png";
import p5 from "@/assets/project5.png";

export const projects = [
  {
    id: 1,
    title: "Luxury Tiles Gallery",
    category: "Full Stack",
    img: p1,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "BetterAuth"],
    desc: "This is a modern tile gallery platform where users can explore tiles in a structured and user-friendly interface.",
    live: "https://luxury-tiles-gallery.vercel.app/",
    code: "https://github.com/mdsalahuddin96/Luxury-Tiles-Gallery.git",
    challenges: [
      "Implementing secure authentication",
      "Optimizing image loading performance",
      "Managing responsive UI consistency",
    ],

    future: [
      "Add admin dashboard",
      "Add payment system",
      "Improve search functionality",
    ],
  },
  {
    id: 2,
    title: "The Dragon News",
    category: "Full Stack",
    img: p2,
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "BetterAuth"],
    desc: "Dragon News is a modern news web application built with Next.js. Users can explore dynamic news categories, read full articles, and access protected routes through an authentication system. ",
    live: "https://dragon-news-nextapp.vercel.app/category/01",
    code: "https://github.com/mdsalahuddin96/dragon-news-nextapp.git",
    challenges: ["Protected routes", "Dynamic category system"],
    future: ["Dark mode", "News recommendation system"],
  },
  {
    id: 3,
    title: "KeenKeeper",
    category: "Frontend",
    img: p3,
    tags: ["React", "Next.js", "Tailwind", " Rechart"],
    desc: "Keen Keeper is a smart friend relationship tracking web application that helps you maintain meaningful connections by reminding you when to reach out. It allows you to monitor your interactions, stay consistent, and never lose touch with important people.",
    live: "https://keen-keeper-nu-teal.vercel.app/",
    code: "https://github.com/mdsalahuddin96/keen-keeper.git",
    challenges: ["Store all interaction and Showing in timeline","Filter timeline by different interaction type", "Showing all interaction with charts"],
    future: ["Dark mode","Add New Friend","Get Notification based on status"],
  },
  {
    id: 4,
    title: "Book Vibe",
    category: "Frontend",
    img: p4,
    tags: ["JavaScript", "React", "React Router", "Tailwind", "Rechart"],
    desc: "Book Vibe is a modern and responsive web application designed for book lovers. It allows users to explore different books, view detailed information, and manage their reading interests. The goal of this project is to create a clean and user-friendly interface where users can easily discover books and organize their reading journey.",
    live: "https://my-books-vibe.netlify.app/",
    code: "https://github.com/mdsalahuddin96/keen-keeper.git",
    challenges: ["Handle Different Route", "Managing the logic between the Read List and Wishlist was challenging, as books in the Read List could not be added to the Wishlist, while Wishlist items could still be moved to the Read List without creating duplicate states."],
    future: ["Dark mode","Add New Book","Delete/Update Book", "User Authentication"],
  },
  {
    id: 5,
    title: "DigiTools",
    category: "Frontend",
    img: p5,
    tags: ["JavaScript", "React", "HTML", "Tailwind"],
    desc: "DigiTools is a modern web-based utility platform that provides multiple useful digital tools in one place. The goal of this project is to make everyday online tasks easier by offering different productivity and utility features through a clean and user-friendly interface.",
    live: "https://salauddin-digitools.netlify.app/",
    code: "https://github.com/mdsalahuddin96/DigiTools.git",
    challenges: ["Handling Different Route", "Showing cart product count on navbar","Handle Duplicate product in the cart"],
    future: ["Signin/Signup","Authentication","Payment System"],
  },
];
