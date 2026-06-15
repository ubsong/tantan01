import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Ggsaptest = () => {

  useGSAP(() => {
    // gsap code here...
    gsap.fromTo("#blue-box", { 
      y: -360, // 시작 위치 (오른쪽에서 시작)    
    }, { 
      y: 0, // 끝 위치 (왼쪽으로 이동)
      duration: 2, // 애니메이션 지속 시간 (초)
      ease: "power1.inOut", // 부드러운 애니메이션 효과
      scrollTrigger: {
        trigger: "#blue-box", // 애니메이션이 시작될 요소
        start: "top 20%", // 애니메이션이 시작되는 시점 (요소의 top이 뷰포트의 70% 지점에 도달할 때)
      }
    }); 
  }, []);

  return (
    <div className="mt-20 w-full h-screen flex items-center justify-center">
      <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-2xl p-2 font-bold text-white flex items-center justify-center">
        Animate me!
      </div>
      <div id="green-box" className="w-20 h-20 bg-green-500 rounded-2xl p-2 font-bold text-white flex items-center justify-center">
        Animate me!
      </div>
    </div>
  );
};

export default Ggsaptest;
