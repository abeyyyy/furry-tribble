import React, { useState } from "react";
import "../App.css";
import Logo from "../assets/logo.png";
import hero from "../assets/bannerimage.png";
import Button from "../components/button.js";
import about from "../assets/about.png";
import Container from "../components/container";
import Box from "../components/box";
import Invested from "../assets/invested.png";
import Investors from "../assets/investors.png";
import Rewards from "../assets/rewards.png";
import Grid from "./grid"
function Home() {
  const [matic, setMatic] = useState("");
  const [showWallet, setShowWallet] = useState("");
  return (
    <div className="App">
      <div className="section-1">
        <div className="header md:flex md:justify-between">
         <div className=" ">
         <div className="pt-6 md:pt-0 pb-6 md:pb-0 logo_container text-center">
            <img src={Logo} alt="" />
          </div>
          <div className="md:flex grid grid-rows-2 grid-flow-col gap-2 center">
            <Button text="Dashboard" onClick={() => console.log("dashboard")} />
            <Button
              text="Calculator"
              onClick={() => console.log("calculator")}
            />
            <Button text="FAQ" onClick={() => console.log("FAQ")} />
            <Button text="Contract" onClick={() => console.log("contract")} />
            <Button
              text="Lite Paper"
              onClick={() => console.log("lite paper")}
            />
            <Button text="Connect +" onClick={() => setShowWallet(true)} />
          </div>
        </div>
        <div className="md:flex md:justify-between md:mt-9 md:my-4 text-left text-white mt-12 ">
          <div className="center ">
            <p className="font-regular text-xl my-4">
              Next Generation Crypto Fund
            </p>
            <p className="font-extrabold text-xl text-cyan-500">
              Powered By State Of The Art AI Trading Bot
            </p>
            <p className="font-regular text-2xl my-4 ">Built on Polygon Chain</p>
            <button onClick={()=> setShowWallet(!showWallet)} className="font-regular earn_rewards_btn">
              Earn 1.5% Rewards Daily
            </button>
          </div>
          <div className="hero_image_container my-12">
            <img src={hero} alt="" className="pb-12" />
          </div>
         </div>
        
        </div>
    
      </div>
      <div className="md:flex md:justify-between mt-12 mb-14">
          <div className="mx-6">
            <Box image={Invested} text="Total Invested" subText="0 MATIC" />
            <Box
              image={Investors}
              text="Total Investors"
              subText="0 INVESTORS"
            />
            <Box image={Rewards} text="Total Rewards" subText="0 MATIC" />
          </div>
         
        </div>
      <div>
        <div className="section-4">
          <h1 className="text-white font-bold text-xl center pt-6 mb-3 ">Dashboard</h1>
          <div className="md:flex center">
            <div>
            <input
              placeholder="Enter MATIC"
              className="matic_input my-2 p-4"
              value={matic}
            />
            
          </div>
          <div className="">
          <button className="dashboard-bottom py-2 px-5 mt-5 md:my-4" onClick={()=> setShowWallet(!showWallet)} >Deposit</button>
          </div>
          </div>
          <div className="d-flex justify-between mx-4 my-4 md;my-6">
            <button onClick={()=> setShowWallet(!showWallet)} className="dashboard-bottom my-1 py-2 px-2">Window Rewards</button>
            <button onClick={()=> setShowWallet(!showWallet)} className="dashboard-bottom my-1 py-2 px-2">
              Withdraw Capital
            </button>
          </div>
          <div>
          </div>
        </div>
        <div className="latest-deposits section-3" >
          <h1 className="font-bold text-center text-xl text-white ">Latest Deposits</h1>
          <div className="table-design-parent">
           <table className="table-design">
            <thead>
              <tr>
                <th>Investors</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody id="latest-deposits">
              
            </tbody>

           </table>


          </div>
        </div>
        <div>
            <p className="font-medium text-base mb-6 mt-12 mx-8 leading-7">
              StableFund is a state of the art trading bot dapp to offer maximum
              profits on crypto trades. It uses next generation technical
              analysis and trading strategies shared by the pro traders to
              create trades that bring the highest profit.
              <br />
              StableFund bots run day and night seamlessly to ensure the pool of
              funds keep growing. The users can deposit/withdraw capital,
              generate rewards and create passive income. It is very simple and
              easy.
              <br />
              StableFund offers a solid 1.5% daily return on your investment.
              The users deposit Matic in a pool with bots which overtime invest
              the funds in the most profitable trades to get the most returns.
              <br />
            </p>
          </div>
          <div className="mx-11 my-9 ">
            <img src={about} alt="" />
          </div>
        <div className="work-row">
          <Container
            number="1"
            heading="Create a Wallet"
            body="Download MetaMask or TrustWallet and create a wallet. Add the Polygon Chain to your network-list."
          />
          <Container
            number="2"
            heading="Get MATIC"
            body="Buy MATIC on an exchange (i.e. Polygon). Transfer MATIC to your wallet address. MATIC addresses start with a 0x"
          />
          <Container
            number="3"
            heading="Create a Wallet"
            body="At the top of the site, click Connect wallet, confirm the action, after which you should see the numbers of your wallet."
          />
          <Container
            number="4"
            heading="Make a Deposit"
            body="On the Dashboard, click on the Deposit button. In the window that opens, enter the amount, click again on the Deposit button and confirm the action."
          />
          <Container
            number="5"
            heading="Get Dividends!"
            body="You have successfully created a deposit! Now every minute you will receive dividends that you can withdraw at any time by clicking on the Withdraw button."
          />
        </div>
      </div>
      <div className="main-footer mt-20">
        <div className="center">
      <div className="logo_container my-9">  <img src={Logo} alt="" /></div>  
       <div>   <button className='dashboard-bottom my-3 p-2 w-72' >Contract</button></div>
       <div><button className='dashboard-bottom my-3 p-2 w-72' >FAQ</button></div>
        <div>  <button className='dashboard-bottom my-3 p-2 w-72' >Lite Paper</button></div>
        <div><button className='dashboard-bottom my-3 p-2 w-72'  > <a className="w-full" href="https://t.me/stablefundofficiall1"> Telegram </a></button></div>
        
          <h4 className="text-white text-lg mx-3 my-6 font-medium">Copyright © 2022 StableFund.App - All Rights Reserved</h4>
        </div>
        {showWallet && (
          <div>
                <Grid onClick={()=>setShowWallet(false)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
