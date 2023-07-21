import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BiPhone, BiMailSend } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import emailjs from "@emailjs/browser";
import SectionHead from "./SectionHead";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const serviceId = "service_ytigqgx";
  const templateId = "template_9zfxnzs";
  const publicKey = "user_E4YQZfabUbW66EvBPNHds";

  const handleFormSubmit: SubmitHandler<Inputs> = () => {
    if (formRef.current) {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(() => {
          reset();
        });
    }
  };
  return (
    <section id="contact" className="section">
      <SectionHead parallaxValue="contact" value="Contact Me" />
      <div className="lg:grid grid-cols-12 gap-10 lg:mt-20">
        <div
          data-aos="fade-right"
          data-aos-duration="2000"
          className="col-span-5 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="lg:text-2xl text-lg font-bold">
              Contact Information
            </h3>
            <p className="text-desc-color">
              Let's talk how I can help you to grow your business. I appreciate
              any kind of suggestions or feedback.
            </p>
            <div className="w-36 h-2 bg-sec-color rounded-lg"></div>
          </div>
          <div className="flex gap-6 justify-start items-center p-6 bg-[#1a2436e6] border border-sec-color rounded-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sec-color text-2xl text-main-color">
              <BiPhone />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Contact on Phone</h3>
              <p className="text-desc-color">+8801722077442</p>
            </div>
          </div>
          <div className="flex gap-6 justify-start items-center p-6 bg-[#1a2436e6] border border-sec-color rounded-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sec-color text-2xl text-main-color">
              <BiMailSend />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Contact on Email</h3>
              <p className="text-desc-color">sumon.chshil@gmail.com</p>
              <p className="text-desc-color">topu199041@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-6 justify-start items-center p-6 bg-[#1a2436e6] border border-sec-color rounded-lg">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sec-color text-2xl text-main-color">
              <CiLocationOn />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Contact on Address</h3>
              <p className="text-desc-color">Habiganj, Sylhet, Bangladesh</p>
            </div>
          </div>
        </div>
        <form
          ref={formRef}
          data-aos="fade-left"
          data-aos-duration="2000"
          className="col-span-7 bg-[#1a2436e6] p-6 rounded-lg border border-sec-color lg:mt-0 mt-10"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="form-control">
            <label className="label">
              <span className="">Name</span>
            </label>
            <input
              type="text"
              placeholder="John Duo"
              {...register("name", { required: true })}
              className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
            />
            {errors.name && (
              <span className="text-red-500 text-xs italic">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
              className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 text-xs italic">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Ex: Your website is awesome !"
              {...register("subject", { required: true })}
              className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
            />
            {errors.subject && (
              <span className="text-red-500 text-xs italic">
                This field is required
              </span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="">Message</span>
            </label>
            <textarea
              {...register("message", { required: true })}
              className="border border-sec-color rounded-md py-3 px-5 bg-[#1a2436e6] text-desc-color focus:border-main-color focus:outline-none"
              cols={30}
              rows={4}
              placeholder="Write your message"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-xs italic">
                This field is required
              </span>
            )}
          </div>
          <button
            type="submit"
            className="btn mt-4 lg:btn-md btn-sm primary-btn bg-main-color hover:bg-main-color border-0 rounded shadow-lg shadow-sec-color"
          >
            <span>Send Message</span>
          </button>
        </form>
      </div>
      <div className="h-14 w-full bg-transparent"></div>
    </section>
  );
};

export default Contact;
