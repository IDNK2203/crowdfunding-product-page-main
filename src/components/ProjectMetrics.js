import { useContext } from "react";
import { Context } from "../Store";

function ProjectMetrics() {
  const [state] = useContext(Context);
  return (
    <div className="project-metrics">
      <div className="project-metrics__container">
        <ul className="project-metrics__list">
          <div className="project-metrics__item">
            <h3 className="project-metrics__value">{`$${state.currrentAmtBacked}`}</h3>
            <p className="project-metrics__text">of $100,000 backed</p>
            <div className="project-metrics__divider"></div>
          </div>{" "}
          <div className="project-metrics__item">
            <h3 className="project-metrics__value">
              {" "}
              {`$${state.totalBacker}`}{" "}
            </h3>
            <p className="project-metrics__text">total backers</p>
            <div className="project-metrics__divider"></div>
          </div>{" "}
          <div className="project-metrics__item">
            <h3 className="project-metrics__value"> 56 </h3>
            <p className="project-metrics__text">days left</p>
            <div className="project-metrics__divider"></div>
          </div>
        </ul>
        <div className="project-metrics__Progress-bar-con">
          <div class="progress">
            <div
              style={{
                width: `${Math.round(
                  (state.currrentAmtBacked / 100000) * 100
                )}%`,
              }}
              className="progress-bar"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectMetrics;
