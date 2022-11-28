import { logoDark, star, shield, arrowUp } from "./assets";
import ValueProps from "./components/signup/ValueProps";
import NFTLookup from "./components/signup/NFTLookup";
import NFTConfirmation from "./components/signup/NFTConfirmation";
import PaymentInfo from "./components/signup/PaymentInfo";
import Success from "./components/signup/Success";
import {loader} from './assets';
import {useState} from 'react';

function Signup() {

    const [formStep, updateStep] = useState(1);

    const [formData, updateForm] = useState({
        email: '',
        NFTId: '',
        license_history: '',
        isLoading: false
    });

    const nextStep = () => {
        updateStep(formStep + 1);
        if (formStep === 1 ) {
          toggleIsLoading(true);
          setTimeout(() => {
            toggleIsLoading(false);
          }, 1000);
        }
    }

    const toggleIsLoading = (isLoading) => {
      updateForm({
        ...formData,
        isLoading : isLoading
      })
    }

    const prevStep = () => {
        updateForm( formData - 1);
    }

    const handleChange = input => e => {
        updateForm({[input]: e.target.value});
        console.log(formData);
    }

    const CurrentPane = () => {
        switch (formStep) {
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
      <div className="bg-stone-100 w-full overflow-hidden font-poppins">
        <div className="flex flex-col min-h-screen justify-between p-10">
            <header className="mx-auto max-w-[190px] p-5 rounded mb-10">
                <img className="max-w-[150px] mx-auto" src={logoDark} />
            </header>
            <div className="flex flex-row align-center h-[100%] justify-center align-center">
                <ValueProps />
                <div className="bg-white border-stone-200 flex flex-col justify-between border-solid border rounded max-w-[430px] w-full p-10">
                <CurrentPane />
                <a onClick={nextStep} className="rounded cursor-pointer font-poppins p-4 text-center w-full text-white bg-blue-700 flex flex-row justify-center items-center">
                    { formData.isLoading ? <img src={loader} className="max-w-[25px]" /> : "Next"}
                </a>
                </div>
            </div>
            <footer className="mt-10 text-sm font-stone-600 text-center"><span>© 2022 BluBlock Inc. All rights reserved.</span><a className="mx-2" href="https://www.assemblyai.com/terms" target="_blank" rel="noreferrer">Terms of Service</a><a mx-2 href="https://www.assemblyai.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></footer>
        </div>
      </div>
    )
  }
  
  export default Signup