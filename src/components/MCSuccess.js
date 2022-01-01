import icon_check from "../images/icon-check.svg";
import PrimaryBtn from "./PrimaryBtn";

function MCsuccess({ handleModaltoggle }) {
  return (
    <div className="mc-success">
      <div className="mc-success__icon-con">
        <img src={icon_check} alt="" />
      </div>
      <h2 className="mc-success__title">Thanks for your support!</h2>
      <p className="mc-success__text">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <PrimaryBtn
        classes={"btn"}
        handler={handleModaltoggle}
        text={"Got it!"}
      ></PrimaryBtn>
    </div>
  );
}

export default MCsuccess;
