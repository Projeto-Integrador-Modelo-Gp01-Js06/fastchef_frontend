import { useEffect } from "react";

const useHealthCheck = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://fastchef.onrender.com")
        .then((response) => {
          if (response.ok) {
            console.log("Api está ativa");
          } else {
            console.log("Erro ao verificar Api:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Erro ao verificar Api:", error.message);
        });
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
};

export default useHealthCheck;
