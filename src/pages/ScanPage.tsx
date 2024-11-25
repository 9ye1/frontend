import React from 'react';
import { useNavigate } from 'react-router-dom';
import babyMonitoringImage from '../assets/babyImage3.png';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[386px] h-[823px] mx-auto pt-2 pb-4 px-4 bg-[#f6efe9] rounded-lg flex flex-col items-center">
      {/* 뒤로가기 버튼 */}
      <div className="w-full flex justify-start mb-2">
        <button 
          className="w-8 h-8 bg-[#edf8ec] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          ←
        </button>
      </div>
      
      {/* 제목 텍스트 */}
      <div className="text-center mb-4">
        <p className="text-xl font-semibold">아이 모니터링 카메라 설치</p>
      </div>
      
      {/* 아기 이미지 */}
      <div className="text-center mb-8">
        <img src={babyMonitoringImage} alt="Baby Monitoring" className="w-full max-w-xs h-auto border-4 border-red-500" />
      </div>
      
      {/* 안내 텍스트 */}
      <div className="w-full max-w-md text-left mb-6">
        <p className="text-xl mb-2">! 침대 프레임이 나오도록 촬영해주세요</p>
        <p className="text-xl">! 아기가 화면 안에 다 나오게 해주세요</p>
      </div>
      
      {/* 모니터링 시작하기 버튼 */}
      <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md mt-6 mb-2">모니터링 시작하기</button>
    </div>
  );
};

export default Dashboard;