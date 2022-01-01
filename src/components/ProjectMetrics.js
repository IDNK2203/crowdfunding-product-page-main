function ProjectMetrics() {
  return (
    <div className="project-metrics">
      <div className="project-metrics__container">
        <ul className="project-metrics__list">
          <div className="project-metrics__item">
            <h3 className="project-metrics__value"> $89,914 </h3>
            <p className="project-metrics__text">of $100,000 backed</p>
            <div className="project-metrics__divider"></div>
          </div>{" "}
          <div className="project-metrics__item">
            <h3 className="project-metrics__value"> 5,007 </h3>
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
          <progress
            className="project-metrics__Progress-bar"
            value="3333"
            max="10000"
          >
            33%
          </progress>
        </div>
      </div>
    </div>
  );
}

export default ProjectMetrics;
