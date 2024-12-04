import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline); // removing the intervals as soon as the page changes a we only have to show this on the body
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return true or false
  return isOnline;
};

export default useOnline;
