import React from "react";
import LoginNav from "../Components/RegistrNav/LoginNav";
import { PrimeReactProvider } from 'primereact/api';
import PageOne from "./PageOneLogin.jsx";
import PageOneSign from "./PageOneSign.jsx";
import PageTwoSigin from "../Components/SingFlowPages/PageTwoSigin";
import PagethreeSign from "../Components/SingFlowPages/PagethreeSign";
import PageFourCreateprofil from "../Components/SingFlowPages/PageFourCreateprofil";
import PageFiveCreateProfil from "../Components/SingFlowPages/PageFiveCreateProfil";
import Page6creatProfil from "../Components/SingFlowPages/Page6creatProfil";
import PageSevenProfil from "../Components/SingFlowPages/PageSevenProfil";
import PageEateProfil from "../Components/SingFlowPages/PageEateProfil";
import PagenineProfil from "../Components/SingFlowPages/PagenineProfil";
import TheEndPage from "../Components/SingFlowPages/theEndPage";
import PageOneLogin from './PageOneLogin.jsx';

const LoginPage = () => {
  return (
    <div className="max-w-full h-[100vh]">
    
      <div className="flex justify-center items-center gap-[20px] flex-wrap">

        <PageOneLogin />
        {/* <PageOneSign /> */}
        {/* <PageTwoSigin /> */}
        {/* <PagethreeSign /> */}
        {/* <PageFourCreateprofil /> */}
        {/* <PageFiveCreateProfil /> */}
        {/* <Page6creatProfil /> */}
        {/* <PageSevenProfil /> */}
        {/* <PageEateProfil /> */}
        {/* <PagenineProfil /> */}
        {/* <TheEndPage /> */}
      </div>
    </div>
  );
};

export default LoginPage;
