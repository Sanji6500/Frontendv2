import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

export const FatherAndSonKamahamihaaaa = () => {
  const [statusSidebarValue, setstatusSidebarValue] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && statusSidebarValue) {
        setstatusSidebarValue(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [statusSidebarValue]);

  const onClose = () => {
    if (statusSidebarValue) setstatusSidebarValue(false);
  };

  return (
    <React.Fragment>
      <TopNavbar setStatusSidebar={setstatusSidebarValue} />
      <Sidebar MobileSidebarValue={statusSidebarValue} onClose={onClose} />
    </React.Fragment>
  );
};
