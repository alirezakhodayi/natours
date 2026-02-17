export interface ITour {
  id: number;
  heading: string;
  imageSrc: string;
  tourDuration: number;
  maxPeople: number;
  numberOfGuides: number;
  location: string;
  difficulty: string;
  price: number;
  lightColor: string;
  darkColor: string;
}

export interface IStory {
  id: number;
  personName: string;
  avatar: string;
  title: string;
  story: string;
}
