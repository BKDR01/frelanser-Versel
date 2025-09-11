import React from "react";
import LoginNav from "../Components/RegistrNav/LoginNav";
import { PrimeReactProvider } from 'primereact/api';
import PageOne from "../Components/SingFlowPages/PageOneLogin";
import PageOneSign from "../Components/SingFlowPages/PageOneSign";
import PageTwoSigin from "../Components/SingFlowPages/PageTwoSigin";
import PagethreeSign from "../Components/SingFlowPages/PagethreeSign";
import PageFourCreateprofil from "../Components/SingFlowPages/PageFourCreateprofil";
import PageFiveCreateProfil from "../Components/SingFlowPages/PageFiveCreateProfil";
import Page6creatProfil from "../Components/SingFlowPages/Page6creatProfil";

const LoginPage = () => {
  return (
    <div className="max-w-full h-[100vh]">
      <LoginNav className={"mb-[50px]"} />
      <div className="flex justify-center items-center flex-wrap">
        
        {/* <PageOne /> */}
        {/* <PageOneSign /> */}
        {/* <PageTwoSigin /> */}
        {/* <PagethreeSign /> */}
        {/* <PageFourCreateprofil /> */}
        {/* <PageFiveCreateProfil /> */}
        <Page6creatProfil />

      </div>
    </div>
  );
};

export default LoginPage;
