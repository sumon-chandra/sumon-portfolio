import { Swiper, SwiperSlide } from "swiper/react";
import { ProjectProps } from "../../types";

interface ModalProps {
  project: ProjectProps;
}

const Modal: React.FC<ModalProps> = ({ project }) => {
  const {
    about,
    category,
    demoUrl,
    features,
    githubUrl,
    images,
    technologies,
    name,
  } = project;

  return (
    <>
      <input
        type="checkbox"
        id="projectDetailsModal"
        className="modal-toggle"
      />
      <div className="modal bg-[#010504fa]">
        <div className="my-modal-box my-glass2 p-8 rounded-lg h-[90%] w-[90%] border border-main-color">
          <h3 className="font-bold text-lg text-center">{name}</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action">
            <label
              htmlFor="projectDetailsModal"
              className="btn btn-xs btn-circle bg-[#0affad99] hover:bg-[#1ed07d] border-0 text-white absolute top-4 right-4"
            >
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
