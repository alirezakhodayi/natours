import type { ITour } from "@/types";

export const toursData: ITour[] = [
  {
    id: 1,
    heading: "The Sea Explorer",
    imageSrc: "images/nat-5.jpg",
    tourDuration: 3,
    maxPeople: 30,
    numberOfGuides: 2,
    location: "Sleep in cazy hostels",
    difficulty: "Very Easy",
    price: 297,
    lightColor: "#ffb900",
    darkColor: "#ff7730",
  },
  {
    id: 2,
    heading: "The Forest Hiker",
    imageSrc: "images/nat-6.jpg",
    tourDuration: 7,
    maxPeople: 40,
    numberOfGuides: 6,
    location: "Sleep in provided tents",
    difficulty: "Medium",
    price: 497,

    lightColor: "#7ed56f",
    darkColor: "#28b485",
  },
  {
    id: 3,
    heading: "The Snow Adventurer",
    imageSrc: "images/nat-7.jpg",
    tourDuration: 5,
    maxPeople: 15,
    numberOfGuides: 3,
    location: "Sleep in provided tents",
    difficulty: "Hard",
    price: 897,
    lightColor: "#2998ff",
    darkColor: "#5643fa",
  },
];
