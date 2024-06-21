import { QuesAndAns } from "./QuesAndAns";
import starIcon from "../assets/images/icon-star.svg";

export const MainSection = () => {
  const information = [
    {
      ques: "What is Frontend Mentor, and how will it help me",
      ans: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It`s suitable for all levels and ideal for portfolio building.",
      icon: false,
    },
    {
      ques: "Is Frontend Mentor free?",
      ans: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      icon: true,
    },
    {
      ques: "Can I use Frontend Mentor projects in my portfolio?",
      ans: ", you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      icon: true,
    },
    {
      ques: " How can I get help if I'm stuck on a Frontend Mentor challenge?",
      ans: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      icon: true,
    },
  ];

  return (
    <section>
      <div className="title">
        <img src={starIcon} alt="Star Icon" />
        <h1>FAQs</h1>
      </div>
      <ul className="quesandans">
        {information.map((info, i) => (
          <QuesAndAns
            key={i}
            question={info.ques}
            answer={info.ans}
            icon={info.icon}
          />
        ))}
      </ul>
    </section>
  );
};
