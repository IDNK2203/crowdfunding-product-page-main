import { useState } from "react";

function PledgeForm({ handler, min }) {
  const [pledgeAmount, setpledgeAmount] = useState(min);

  const handlePledgeInput = (e) => {
    setpledgeAmount(e.target.value);
  };

  return (
    <form className={"pledge-form "} onSubmit={handler}>
      <div className="pledge-form__container">
        <p className="pledge-form__text">Enter Your Pledge</p>
        <div className="pledge-form__main">
          <input
            type="number"
            className="pledge-form__num-input"
            min={min}
            placeholder={min}
            value={pledgeAmount}
            name="pledgeAmount"
            onChange={handlePledgeInput}
          />
          <button type={"submit"} className={"btn"}>
            continue
          </button>
        </div>
      </div>
    </form>
  );
}

export default PledgeForm;
