import { useEffect, useState } from "react/cjs/react.development";
import icon_close_modal from "../images/icon-close-modal.svg";
function MCRewards({ handleModaltoggle, rID, handleSuccessModaltoggle }) {
  // can't seem to change value of a state with set state.
  const [rewardId, setRewardId] = useState("");

  // set state-A to a prop(state)  whenever the prop
  // (state) changes the state-A changes
  // Trigger state change in one component from another component

  useEffect(() => {
    setRewardId(rID);
  }, [rID]);

  const handleRewardSelection = (e) => {
    const Id = e.target.dataset.id;
    setRewardId(parseInt(Id));
  };

  const handlePledgeForm = (e) => {
    e.preventDefault();
    handleModaltoggle(e);
    handleSuccessModaltoggle(e);
  };

  return (
    <>
      <div className="mc-rewards">
        <div className="mc-rewards__text-box">
          <div className="mc-rewards__flex-con">
            <h3 className="mc-rewards__title"> Back this project</h3>
            <div
              onClick={handleModaltoggle}
              className="projectc-modal__close-btn"
            >
              <img src={icon_close_modal} alt="menu-icon" srcset="" />
            </div>
          </div>
          <p className="mc-rewards__text">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>
        {/*
         */}

        <ul className="mc-rewards__list">
          <li
            className={
              rewardId === 0
                ? "mc-rewards__item mc-rewards__item--selected"
                : "mc-rewards__item"
            }
            id="0"
          >
            <div className="mc-rewards__main">
              <div className="mc-rewards__box">
                <div className="mc-rewards__indicator"></div>
                <h4
                  data-id="0"
                  onClick={handleRewardSelection}
                  className="mc-rewards__title"
                >
                  {" "}
                  Pledge with no reward
                </h4>
              </div>
              <p className="mc-rewards__desc">
                {" "}
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
          </li>
          <li
            className={
              rewardId === 25
                ? "mc-rewards__item mc-rewards__item--selected"
                : "mc-rewards__item"
            }
            id="25"
          >
            <div className="mc-rewards__main">
              <div className="mc-rewards__box">
                <div className="mc-rewards__indicator"></div>
                <div className="mc-rewards__box--a">
                  <h4
                    className="mc-rewards__title"
                    data-id="25"
                    onClick={handleRewardSelection}
                  >
                    {" "}
                    Bamboo Stand
                  </h4>
                  <h4 className="mc-rewards__pledge"> Pledge $25 or more</h4>
                </div>
              </div>
              <p className="mc-rewards__desc">
                {" "}
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list.
              </p>
              <p className="mc-rewards__quantity">
                {" "}
                <span className="mc-rewards__quantity-value"> 101</span> left
              </p>
            </div>
            <form
              className={
                rewardId === 25
                  ? "pledge-form pledge-form--open"
                  : "pledge-form "
              }
              action="#"
              method="post"
              onSubmit={handlePledgeForm}
            >
              <div className="pledge-form__container">
                <p className="pledge-form__text">Enter Your Pledge</p>
                <div className="pledge-form__main">
                  <input
                    type="number"
                    className="pledge-form__num-input"
                    id="pledge"
                    min={25}
                    placeholder={25}
                  />
                  <button type={"submit"} className={"btn"}>
                    continue
                  </button>
                </div>
              </div>
            </form>
          </li>
          <li
            className={
              rewardId === 75
                ? "mc-rewards__item mc-rewards__item--selected"
                : "mc-rewards__item"
            }
            id="75"
          >
            <div className="mc-rewards__main">
              <div className="mc-rewards__box">
                <div className="mc-rewards__indicator"></div>
                <div className="mc-rewards__box--a">
                  <h4
                    data-id="75"
                    className="mc-rewards__title"
                    onClick={handleRewardSelection}
                  >
                    {" "}
                    Black Edition Stand
                  </h4>
                  <h4 className="mc-rewards__pledge"> Pledge $75 or more</h4>
                </div>
              </div>
              <p className="mc-rewards__desc">
                {" "}
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </p>
              <p className="mc-rewards__quantity">
                {" "}
                <span className="mc-rewards__quantity-value"> 64</span> left
              </p>
            </div>
            <form
              className={
                rewardId === 75
                  ? "pledge-form pledge-form--open"
                  : "pledge-form "
              }
              action="#"
              method="post"
              onSubmit={handlePledgeForm}
            >
              <div className="pledge-form__container">
                <p className="pledge-form__text">Enter Your Pledge</p>

                <div className="pledge-form__main">
                  <input
                    type="number"
                    className="pledge-form__num-input"
                    id="pledge"
                    min={75}
                    placeholder={75}
                  />
                  <button type={"submit"} className={"btn"}>
                    continue
                  </button>
                </div>
              </div>
            </form>
          </li>
          <li className={"mc-rewards__item mc-rewards__item--oos"}>
            <div className="mc-rewards__main">
              <div className="mc-rewards__box">
                <div className="mc-rewards__indicator"></div>
                <div className="mc-rewards__box--a">
                  <h4 data-id="200" className="mc-rewards__title">
                    {" "}
                    Mahogany Special Edition
                  </h4>
                  <h4 className="mc-rewards__pledge"> Pledge $200 or more</h4>
                </div>
              </div>
              <p className="mc-rewards__desc">
                {" "}
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included.
              </p>
              <p className="mc-rewards__quantity">
                {" "}
                <span className="mc-rewards__quantity-value"> 0</span> left
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MCRewards;
