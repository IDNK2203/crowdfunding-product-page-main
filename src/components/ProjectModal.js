import { useEffect } from "react";

function ProjectMOdal({ component, ModalOpened, handleModaltoggle }) {
  useEffect(() => {
    if (ModalOpened) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [ModalOpened, component]);

  return (
    <>
      <div
        onClick={handleModaltoggle}
        className={ModalOpened ? "overlay" : "overlay model--closed"}
      ></div>
      <div
        className={
          ModalOpened ? "project-modal" : "project-modal model--closed"
        }
      >
        <div className="project-modal__container">{component}</div>
      </div>
    </>
  );
}

export default ProjectMOdal;
