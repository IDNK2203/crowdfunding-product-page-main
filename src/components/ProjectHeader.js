import { useState } from "react";
import Project_logo from "../images/logo-mastercraft.svg";
import Icon_Bookmark from "../images/icon-bookmark.svg";
import Icon_Bookmarked from "../images/icon-bookmarked.svg";
import PrimaryBtn from "./PrimaryBtn";
import ProjectModal from "./ProjectModal";
import MCRewards from "./MCRewards";
import MCSuccess from "./MCSuccess";

function ProjectHeader() {
  const [ModalOpened, setModalOpened] = useState(false);
  const [Bookmark, setBookmark] = useState(false);

  const handleModaltoggle = (e) => {
    setModalOpened(!ModalOpened);
  };

  const handleBookmark = (e) => {
    const value =
      prompt(`Please use the shortcut Ctrl + D to bookmark or unbookmark this page.
    Enter ANY CHARACTER when done.
    `);
    if (value && value !== "") {
      setBookmark(!Bookmark);
    }
  };

  const [RewardModalOpened, setRewardModalOpened] = useState(false);
  const [SuccessModalOpened, setSuccessModalOpened] = useState(false);
  const handleRewardModaltoggle = (e) => {
    setRewardModalOpened(!RewardModalOpened);
  };

  const handleSuccessModaltoggle = (e) => {
    setSuccessModalOpened(!SuccessModalOpened);
  };

  return (
    <>
      <ProjectModal
        id="Rewards"
        handleModaltoggle={handleSuccessModaltoggle}
        ModalOpened={SuccessModalOpened}
        component={<MCSuccess handleModaltoggle={handleSuccessModaltoggle} />}
      ></ProjectModal>

      <ProjectModal
        id="success"
        handleModaltoggle={handleRewardModaltoggle}
        ModalOpened={RewardModalOpened}
        component={
          <MCRewards
            handleModaltoggle={handleRewardModaltoggle}
            handleSuccessModaltoggle={handleSuccessModaltoggle}
          />
        }
      ></ProjectModal>

      <div className="project-header">
        <div className="project-header__container">
          <div className="project-header__logo-container">
            <img src={Project_logo} alt="" />
          </div>
          <h1 className="project-header__title">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="project-header__sum">
            {" "}
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          <div className="project-header__actions">
            <PrimaryBtn
              handler={handleRewardModaltoggle}
              text={"Back this project"}
              classes={"btn btn--flex"}
            ></PrimaryBtn>

            <div
              className={
                !Bookmark
                  ? "button-container"
                  : "button-container button-container--bmk"
              }
            >
              <button
                onClick={handleBookmark}
                className="btn btn--flex btn--image"
                handler={handleModaltoggle}
              >
                <img src={!Bookmark ? Icon_Bookmark : Icon_Bookmarked} alt="" />
                <span
                  className={
                    !Bookmark ? " btn-label" : " btn-label btn-label--bmk"
                  }
                >
                  {" "}
                  bookmark
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectHeader;
