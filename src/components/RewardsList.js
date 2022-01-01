import { useState } from "react";
import ProjectModal from "./ProjectModal";
import PrimaryBtn from "./PrimaryBtn";
import MCRewards from "./MCRewards";
import MCSuccess from "./MCSuccess";
// This component is responsible its own state
function RewardsList() {
  const [rID, setrID] = useState("");

  const [RewardModalOpened, setRewardModalOpened] = useState(false);
  const [SuccessModalOpened, setSuccessModalOpened] = useState(false);
  const handleRewardModaltoggle = (e) => {
    setrID(parseInt(e.target.parentElement.id));
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
            rID={rID}
            handleModaltoggle={handleRewardModaltoggle}
            handleSuccessModaltoggle={handleSuccessModaltoggle}
          />
        }
      ></ProjectModal>
      <ul className="project-reward__list">
        <li className="project-reward__item" id="25">
          <div className="project-reward__flex-blox">
            <h4 className="project-reward__title"> Bamboo Stand</h4>
            <h4 className="project-reward__pledge"> Pledge $25 or more</h4>
          </div>
          <p className="project-reward__desc">
            {" "}
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className="project-reward__flex-blox">
            <p className="project-reward__quantity">
              {" "}
              <span className="project-reward__quantity-value"> 101</span> left
            </p>
            <PrimaryBtn
              handler={handleRewardModaltoggle}
              text={"Select Reward"}
              classes={"btn"}
            ></PrimaryBtn>
          </div>
        </li>
        <li className="project-reward__item" id="75">
          <div className="project-reward__flex-blox">
            <h4 className="project-reward__title"> Black Edition Stand</h4>
            <h4 className="project-reward__pledge"> Pledge $75 or more</h4>
          </div>
          <p className="project-reward__desc">
            {" "}
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className="project-reward__flex-blox">
            <p className="project-reward__quantity">
              {" "}
              <span className="project-reward__quantity-value"> 64</span> left
            </p>
            <PrimaryBtn
              handler={handleRewardModaltoggle}
              text={"Select Reward"}
              classes={"btn"}
            ></PrimaryBtn>
          </div>
        </li>
        <li
          className="project-reward__item project-reward__item--oos "
          id="200"
        >
          <div className="project-reward__flex-blox">
            <h4 className="project-reward__title"> Mahogany Special Edition</h4>
            <h4 className="project-reward__pledge"> Pledge $200 or more</h4>
          </div>
          <p className="project-reward__desc">
            {" "}
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className="project-reward__flex-blox">
            <p className="project-reward__quantity">
              {" "}
              <span className="project-reward__quantity-value"> 0</span> left
            </p>
            <PrimaryBtn
              handler={handleRewardModaltoggle}
              text={"Select Reward"}
              classes={"btn btn--oss"}
            ></PrimaryBtn>
          </div>
        </li>
      </ul>
    </>
  );
}

export default RewardsList;
