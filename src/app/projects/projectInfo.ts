import { StaticImageData } from "next/image";
import pomodoroImage from "@/assets/images/pomodoro-timer.jpg";
import markdownImage from "@/assets/images/markdown-editor.jpg";
import calculatorImage from "@/assets/images/calculator.jpg";
import drumImage from "@/assets/images/drum-machine.jpg";

export type Project = {
  name: string;
  link: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    name: "Pomodoro Timer",
    link: "https://tzinadah.github.io/pomodoro-timer/",
    image: pomodoroImage,
  },
  {
    name: "Markdown Editor",
    link: "https://tzinadah.github.io/markdown-editor/",
    image: markdownImage,
  },
  {
    name: "Calculator",
    link: "https://tzinadah.github.io/calculator/",
    image: calculatorImage,
  },
  {
    name: "Drum Machine",
    link: "https://tzinadah.github.io/drum-machine/",
    image: drumImage,
  },
];
