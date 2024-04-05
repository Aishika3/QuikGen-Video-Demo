import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./CardStyle.css";
import InstaModal from "../InstaModal/InstaModal";
import FBModal from "../FBModal/FBModal";
import TwitterModal from "../TwitterModal/TwitterModal";
import LinkedInModal from "../LinkedInModal/LinkedInModal";
import GmailModal from "../GmailModal/GmailModal";
import wp from '../../assets/images/WhatsApp.png'
import ig from '../../assets/images/Insta.png'
import fb from '../../assets/images/fb.png'
import twitter from '../../assets/images/Twitter.png'
import email from '../../assets/images/Mail.png'
import linkedin from '../../assets/images/LinkedIn.png'
import img from '../../assets/images/facebook_bg.png'
import TruncateText from "../../TruncatedText/TruncateText";
import { useSelector } from "react-redux";
import WhatsappModal from "../WhatsappModal/WhatsappModal";
import copy from 'clipboard-copy';
import parse from 'html-react-parser';
import { FaTwitter, FaMailBulk } from 'react-icons/fa';


const CardTemplate = () => {
  const navigate = useNavigate();
  
  const textRef = React.useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const text = textRef.current.textContent;
    copy(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    alert("Copied Text!");
  };

  const handleSendMail = () => {
    const text = document.getElementById('gmail-text').value;
    window.location = `https://quirkmail.netlify.app/main?text=${text}`;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [fbOpen, setFbOpen] = useState(false)
  const [topen,setTOpen] = useState(false)
  const [wpOpen, setWpOpen] = useState(false)
  const [LnOpen, setLnOpen] = useState(false);
  const [GmOpen, setGmOpen] = useState(false);

  const text = useSelector(state => state.input)

  const {combinedData} = useSelector(state => state.apiResponse)
  // console.log(combinedData);

  // console.log(response.combinedData);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fbOpenModal = () => {
    setFbOpen(true)
  }

  const fbCloseModal = () => {
    setFbOpen(false);
  };
  const tOpenModal = () => {
    setTOpen(true)
  }

  const tCloseModal = () => {
    setTOpen(false);
  };
  const wpOpenModal = () => {
    setWpOpen(true)
  }

  const wpCloseModal = () => {
    setWpOpen(false);
  };
  const LnOpenModal = () => {
    setLnOpen(true)
  }

  const LnCloseModal = () => {
    setLnOpen(false);
  };
  const GmOpenModal = () => {
    setGmOpen(true)
  }

  const GmCloseModal = () => {
    setGmOpen(false);
  };


  return (
    <>
      <section className="card-holder">
        <div className="card-body" id="card-body">
          <div className="card">
              <img className="card_img" src={wp} />
            <div className="card-content">
              <h2>WhatsApp Post</h2>
              <p>
                <TruncateText text={combinedData ? combinedData.whatsapp : ""} limit={30} />
              </p>
              <a className="button_card" onClick={wpOpenModal}>
                Read more
              </a>
              <WhatsappModal isOpen={wpOpen} onClose={wpCloseModal}>
                  <div className="box-content-wp">
                    <div className="message-box friend-message">
                      <textarea ref={textRef}>{combinedData ? combinedData.whatsapp : ""}</textarea>
                    </div>
                  </div>
                  <div className="send-box-wp">
                    <button onClick={handleCopyClick} className="send-button-wp">Copy</button>
                    {/* {copied && <span className="span-copy">copied!</span>} */}
                  </div>
              </WhatsappModal>
            </div>
          </div>

          <div className="card">
              <img className="card_img" src={ig} />
            <div className="card-content">
              <h2>Instagram Post</h2>
              <p>
              <TruncateText text={combinedData ? combinedData.instagram : ""} limit={30} />
              </p>
              <a className="button_card" onClick={openModal}>
                Read more
              </a>
              <InstaModal isOpen={isOpen} onClose={closeModal}>
                <div className="box-content-insta">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend mauris nibh, eget convallis justo porttitor quis. Fusce vel libero ut augue dictum aliquet eget eget magna. Aliquam erat volutpat. Suspendisse finibus fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> */}
                  <textarea ref={textRef}>{combinedData ? parse(combinedData.instagram) : ""}</textarea>
                  {/* <p>Content</p> */}
                  <img src={img} className="box-image" />
                </div>
                <div className="send-box-insta">
                  <button onClick={handleCopyClick} className="send-button-insta">Copy</button>
                  {/* {copied && <span className="white">copied!</span>} */}
                </div>
              </InstaModal>
            </div>
          </div>

          <div className="card">
              <img className="card_img" src={fb} />
            <div className="card-content">
              <h2>Facebook Post</h2>
              <p>
              <TruncateText text={combinedData ? combinedData.facebook : ""} limit={30} />
              </p>
              <a className="button_card" onClick={fbOpenModal}>
                Read more
              </a>
              <FBModal isOpen={fbOpen} onClose={fbCloseModal}>
                <div className="box-content-fb">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend mauris nibh, eget convallis justo porttitor quis. Fusce vel libero ut augue dictum aliquet eget eget magna. Aliquam erat volutpat. Suspendisse finibus fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> */}
                  <textarea ref={textRef}>{combinedData ? parse(combinedData.facebook) : ""}</textarea>
                  {/* <p>Content</p> */}
                  <img src={img} className="box-image" />
                </div>
                <div className="send-box-fb">
                  <button onClick={handleCopyClick} className="send-button-fb">Copy</button>
                  {/* {copied && <span className="white">copied!</span>} */}
                </div>
              </FBModal>
            </div>
          </div>

          <div className="card">
              <img className="card_img" src={twitter} />
            <div className="card-content">
              <h2>Twitter Post</h2>
              <p>
              <TruncateText text={combinedData ? combinedData.twitter : ""} limit={30} />
              </p>
              <a className="button_card" onClick={tOpenModal}>
                Read more
              </a>
              <TwitterModal isOpen={topen} onClose={tCloseModal}>
                <div className="box-content">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend mauris nibh, eget convallis justo porttitor quis. Fusce vel libero ut augue dictum aliquet eget eget magna. Aliquam erat volutpat. Suspendisse finibus fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> */}
                  <textarea>{combinedData ? combinedData.twitter : ""}</textarea>
                  {/* <p>Content</p> */}
                  {/* <img src="images/facebook_bg.png" className="box-image" /> */}
                </div>
                <div className="send-box-twitter">
                  <button onClick={handleCopyClick} className="send-button">Copy</button>
                  <Link
                      to={combinedData ? `https://twitter.com/intent/tweet?text=`+combinedData.twitter.slice(0,100) : ""} 
                      data-size="large"><button className="send-button"><FaTwitter />Tweet</button></Link>
                  {/* {copied && <span className="white">copied!</span>} */}
                </div>
              </TwitterModal>
            </div>
          </div>

          <div className="card">
              <img className="card_img" src={linkedin} />
            <div className="card-content">
              <h2>LinkedIn Post</h2>
              <p>
              <TruncateText text={combinedData ? combinedData.linkedin : ""} limit={30} />
              </p>
              <a className="button_card" onClick={LnOpenModal}>
                Read more
              </a>
              <LinkedInModal isOpen={LnOpen} onClose={LnCloseModal}>
                <div className="box-content">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend mauris nibh, eget convallis justo porttitor quis. Fusce vel libero ut augue dictum aliquet eget eget magna. Aliquam erat volutpat. Suspendisse finibus fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> */}
                  <textarea ref={textRef}>{combinedData ? parse(combinedData.linkedin) : ""}</textarea>
                  {/* <p>Content</p> */}
                  {/* <img src="images/facebook_bg.png" className="box-image" /> */}
                </div>
                <div className="send-box-ln">
                  <button onClick={handleCopyClick} className="send-button">Copy</button>
                  {/* {copied && <span className="white">copied!</span>} */}
                </div>
              </LinkedInModal>
            </div>
          </div>

          <div className="card">
              <img className="card_img" src={email} />
            <div className="card-content">
              <h2>Gmail Text</h2>
              <p>
              <TruncateText text={combinedData ? combinedData.email : ""} limit={30} />
              </p>
              <a className="button_card" onClick={GmOpenModal}>
                Read more
              </a>
              <GmailModal isOpen={GmOpen} onClose={GmCloseModal}>
                <div className="box-content">
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend mauris nibh, eget convallis justo porttitor quis. Fusce vel libero ut augue dictum aliquet eget eget magna. Aliquam erat volutpat. Suspendisse finibus fringilla sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> */}
                  <textarea ref={textRef} id='gmail-text'>{combinedData ? parse(combinedData.email) : ""}</textarea>
                  {/* <p>Content</p> */}
                  {/* <img src="images/facebook_bg.png" className="box-image" /> */}
                </div>
                <div className="send-box-gm">
                  <button onClick={handleCopyClick} className="send-button">Copy</button>
                  {/* {copied && <span className="white">copied!</span>} */}
                  <FaMailBulk className="send-button-circular-gm" height="10" width="10" onClick={handleSendMail} title="Send mail using above text"/>
                </div>
              </GmailModal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardTemplate;
