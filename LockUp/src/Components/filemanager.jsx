import { useState, useEffect } from "react";
import SideBar from './sidebar';
import FileUpload from "./Upload_Files";

function File_Manager(){
    return(
        <div className="flex flex-grow flex-shrink h-screen w-screen overflow-auto">
      <div className="flex flex-grow flex-shrink basis-1/5 justify-center shadow-inner shadow-teal-500">
        <SideBar />
      </div>
      <div className="flex flex-grow flex-shrink basis-4/5 justify-center bg-[#170c27]">
        <FileUpload/>
      </div>
    </div>
    )
}
export default File_Manager;