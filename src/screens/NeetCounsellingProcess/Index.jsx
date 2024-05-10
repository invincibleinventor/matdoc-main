import { useEffect } from "react";

const NeetCounsellingProcess = () => {
  useEffect(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, []);
  return <div></div>;
};

export default NeetCounsellingProcess;
