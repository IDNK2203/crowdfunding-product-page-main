import { useEffect } from "react";

function ProjectMOdal({ component, ModalOpened, handleModaltoggle }) {
  useEffect(() => {
    if (ModalOpened) {
      window.scrollTo(0, 0);
    }
  }, [ModalOpened, component]);

  return (
    <>
      <div onClick={handleModaltoggle} className={"overlay"}></div>
      <div className={"project-modal"}>
        <div className="project-modal__container">{component}</div>
      </div>
    </>
  );
}

export default ProjectMOdal;
