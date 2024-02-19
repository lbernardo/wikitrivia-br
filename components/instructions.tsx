import React from "react";
import GitHubButton from "react-github-btn";
import styles from "../styles/instructions.module.scss";
import Button from "./button";
import Score from "./score";

interface Props {
  highscore: number;
  start: () => void;
}

export default function Instructions(props: Props) {
  const { highscore, start } = props;

  return (
    <div className={styles.instructions}>
      <div className={styles.wrapper}>
        <h2>Coloque os cartões na linha do tempo na ordem correta.</h2>
        {highscore !== 0 && (
          <div className={styles.highscoreWrapper}>
            <Score score={highscore} title="Melhor pontuação" />
          </div>
        )}
        <Button onClick={start} text="Jogar" />
        <div className={styles.about}>
          <div>
            All data sourced from{" "}
            <a
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
            .
          </div>
          <div>
            Have feedback? Please report it on{" "}
            <a
              href="https://github.com/lbernardo/wikitrivia-br/issues/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </div>
          <GitHubButton
            href="https://github.com/lbernardo/wikitrivia-br"
            data-size="large"
            data-show-count="true"
            aria-label="Star lbernardo/wikitrivia-br on GitHub"
          >
            Star
          </GitHubButton>
        </div>
      </div>
    </div>
  );
}
