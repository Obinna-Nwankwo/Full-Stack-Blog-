import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Aos({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: "ease",
      once: true,
    });
  }, []);
  return <div>{children}</div>;
}
