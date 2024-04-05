import React, { useState } from "react";
import "./generate.css";
import GenerateModal from "../GenerateModal/GenerateModal";
import stars from "../../assets/images/christmas-stars.png";
import { useSelector, useDispatch } from "react-redux";
import { setGenerateText } from "../../features/text/textSlice";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Generate = () => {
  const [companyName, setCompanyName] = React.useState("");
  const [companyDesc, setCompanyDesc] = React.useState("");
  const [motivation, setMotivation] = React.useState("");

  const text = useSelector((state) => state.input);
  const dispatch = useDispatch();
  // console.log(text);

  const handleGenerate = (e) => {
    let newText = e.target.value;
    dispatch(setGenerateText(newText));
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="generate" id="generate">
        <section className="generate_body">
          <div className="input_tag">
            <input
              className="input"
              type="text"
              value={text}
              onChange={(e) => handleGenerate(e)}
              placeholder="Describe your feeling in detail and generate..."
            ></input>
            <div className="button">
              <img className="image_btn" src={stars} />
              <a className="link" onClick={openModal}>
                Generate
              </a>
              <GenerateModal
                isOpen={isOpen}
                onClose={closeModal}
                companyName={companyName}
                companyDesc={companyDesc}
                motivation={motivation}
              >
                <div className="content-holder">
                  <div className="input-box">
                    <label className="motiv-label" htmlFor="companyName">
                      Enter your company Name:
                    </label>
                    <input
                      type="text"
                      className="text-box"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <label className="motiv-label" htmlFor="companyName">
                      Describe your company:
                    </label>
                    <input
                      type="text"
                      className="text-box text-box-company"
                      value={companyDesc}
                      onChange={(e) => setCompanyDesc(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <label className="motiv-label" htmlFor="companyName">
                      What is your motivation for the post?...:
                    </label>
                    <input
                      type="text"
                      className="text-box"
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                    />
                  </div>
                </div>
              </GenerateModal>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Generate;
