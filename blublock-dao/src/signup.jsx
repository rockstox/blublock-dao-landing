import { logoDark, star, shield, arrowUp } from "./assets";
import ValueProps from "./components/signup/ValueProps";
import NFTLookup from "./components/signup/NFTLookup";
import NFTConfirmation from "./components/signup/NFTConfirmation";
import PaymentInfo from "./components/signup/PaymentInfo";
import Success from "./components/signup/Success";
import {useState} from 'react';

function Signup() {

    const [formData, updateForm] = useState({
        step: 1,
        email: '',
        NFTId: '',
        license_history: '',
        isLoading: false
    });

    const nextStep = () => {
        updateForm(formData + 1);
    }

    const prevStep = () => {
        updateForm( formData - 1);
    }

    const handleChange = input => e => {
        updateForm({[input]: e.target.value});
    }

    const CurrentPane = () => {
        switch (formData.step) {
            case 1: 
              return (
                <NFTLookup />
            )
            case 2: 
              return (
                <NFTConfirmation />
            )
            case 3: 
              return (
                <PaymentInfo />
            )
            case 4:
              return (
                <Success />
            )
        }
    }

    return (
      <div className="bg-stone-100 w-full min-h-[100vh] overflow-hidden font-poppins">
        <div className="flex flex-col p-10">
            <header className="mx-auto max-w-[190px] p-5 rounded mb-10">
                <img className="max-w-[150px] mx-auto" src={logoDark} />
            </header>
            <div className="flex flex-row align-center h-[100%] justify-center align-center">
                <ValueProps />
                <div className="bg-white border-stone-200 border-solid border rounded max-w-[430px] w-full p-10">
                <CurrentPane />
                </div>
            </div>
            <footer className="mt-10 text-sm font-stone-600 text-center"><span>© 2022 BluBlock Inc. All rights reserved.</span><a href="https://www.assemblyai.com/terms" target="_blank" rel="noreferrer">Terms of Service</a><a href="https://www.assemblyai.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></footer>
        </div>
      </div>
    )
  }
  
  export default Signup