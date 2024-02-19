import React from "react";
import styles from "../styles/score.module.scss";

interface Props {
  score: number;
  title: string;
}


function getMedal(score: number): string {
  if (score >= 20) {
    return "🥇 ";
  } else if (score >= 10) {
    return "🥈 ";
  } else if (score >= 1) {
    return "🥉 ";
  }
  return "";
}

export default function Score(props: Props) {
  const { score, title } = props;

  let backgroundColor = "#ffffff";

  if (score >= 20) {
    backgroundColor = "#FFC940";
  } else if (score >= 10) {
    backgroundColor = "#A7B6C2";
  } else if (score >= 1) {
    backgroundColor = "#C99765";
  }

  return (
    <div className={styles.score} style={{ backgroundColor }}>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{score} {getMedal(score)}</div>
    </div>
  );
}
