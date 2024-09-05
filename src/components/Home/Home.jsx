import React, { useContext } from "react";
import { ProjectListContext } from "context/ProjectListContext";
import { FaGithubSquare } from "react-icons/fa";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import Styles from "./Home.module.css";

export function Home() {
  const navigate = useNavigate();
  const { projectListData } = useContext(ProjectListContext);

  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.homeDesc}>
        Dive into a collection of carefully curated React interview projects
        designed to help you master the skills and ace your next job interview.
        Whether you’re preparing for your first interview or refining your
        expertise, you’ll find practical examples and challenges that cover
        everything from fundamental concepts to advanced techniques. Start
        exploring and boost your React skills today!
      </div>
      {projectListData.map((project) => {
        const { id, name, description, image, path, gitRepoLink } = project;
        return (
          <div key={id} className={Styles.homeProjectCard}>
            <img src={image} alt="" className={Styles.homeProjectCardImg} />
            <div className="font-bold">{name}</div>
            <Tooltip title={description}>
              <p>
                {description.substring(0, 65).trim()}
                {description ? "..." : ""}
              </p>
            </Tooltip>
            <div className="buttonGroup flex justify-around items-center mt-2">
              <button
                className={Styles.cardButton}
                onClick={() => {
                  navigate(path);
                }}
              >
                View Project
              </button>
              <a href={gitRepoLink} target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className={Styles.cardGitIcon} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
