import RewardsList from "./RewardsList";

function ProjectDetails() {
  return (
    <div className="project-details">
      <div className="project-details__container">
        <div className="project-details__summary">
          <h3 className="project-details__summary-title">About this project</h3>
          <div className="project-details__summary-text">
            <p>
              {" "}
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.{" "}
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </div>
        </div>
        <RewardsList></RewardsList>
      </div>
    </div>
  );
}

export default ProjectDetails;
