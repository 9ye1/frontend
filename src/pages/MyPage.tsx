import React, { useState, useEffect } from 'react';
import ProfileCard from '@/components/ui/profile';
import babyProfile from '@/assets/babyprofile.png';
import momProfile from '@/assets/momprofile.png';
import dadProfile from '@/assets/dadprofile.png';
import BackButton from '@/components/ui/button/backButton';
import httpClient from '@/lib/client/http-client';

const MyPage = () => {
  const [babyName, setBabyName] = useState('아기이름');
  const [babyAge, setBabyAge] = useState('생후 0일');
  const [momPhone, setMomPhone] = useState('긴급연락처를 적어주세요');
  const [dadPhone, setDadPhone] = useState('긴급연락처를 적어주세요');
  const [isEditing, setIsEditing] = useState(false); // 수정 모달 표시 상태

  /*{useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await httpClient.post('/users/me');
        const { baby, parentContacts } = response.data;

        setBabyName(baby?.babyName || '아기이름');
        setBabyAge(baby?.birthDate || '생후 0일');
        setMomPhone(parentContacts?.momPhoneNumber || '긴급연락처를 적어주세요');
        setDadPhone(parentContacts?.dadPhoneNumber || '긴급연락처를 적어주세요');
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchProfileData();
  }, []); }*/

  const handleEditClick = () => {
    setIsEditing(true); // 모달 열기
  };

  const handleSave = () => {
    // 저장 로직 추가 (서버에 데이터 전송)
    console.log('수정 데이터 저장:', { babyName, babyAge, momPhone, dadPhone });
    setIsEditing(false); // 모달 닫기
  };

  const handleClose = () => {
    setIsEditing(false); // 모달 닫기
  };

  return (
    <div
      className="flex flex-col items-center justify-around h-[823px] w-[386px] mx-auto bg-[#E8F8F5] pt-5"
      style={{ position: 'relative' }}
    >
      {/* 뒤로가기 버튼 */}
      <BackButton to="/" className={'w-full flex justify-start pl-5'} />
      
      {/* 프로필 카드 섹션 */}
      <div className="flex flex-col items-center justify-around h-[823px] w-[386px] p-20">
        {/* 아기 프로필 */}
        <ProfileCard
          name={babyName}
          age={babyAge}
          imgSrc={babyProfile}
          alignment="left"
        />

        {/* 엄마 프로필 */}
        <ProfileCard
          name="엄마"
          phone={momPhone}
          description="이 번호로 긴급 전화가 가요"
          imgSrc={momProfile}
          alignment="right"
        />

        {/* 아빠 프로필 */}
        <ProfileCard
          name="아빠"
          phone={dadPhone}
          description="이 번호로 긴급 전화가 가요"
          imgSrc={dadProfile}
          alignment="left"
        />
      </div>
      
      {/* 수정 버튼 */}
      <button
        onClick={handleEditClick}
        className="text-sm text-blue-500 py-7 bg-transparent hover:underline"
      >
        수정하기
      </button>

      {/* 수정 모달 */}
      {isEditing && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
            <h2 className="text-lg font-bold mb-4">정보 수정</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  우리 아이 이름
                </label>
                <input
                  type="text"
                  id="name"
                  value={babyName}
                  onChange={(e) => setBabyName(e.target.value)}
                  placeholder="우리 아이 이름"
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="birthDate" className="block text-sm font-medium">
                  우리 아이 생일
                </label>
                <input
                  type="date"
                  id="birthDate"
                  value={babyAge}
                  onChange={(e) => setBabyAge(e.target.value)}
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="momPhone" className="block text-sm font-medium">
                  엄마 전화번호
                </label>
                <input
                  type="tel"
                  id="momPhone"
                  value={momPhone}
                  onChange={(e) => setMomPhone(e.target.value)}
                  placeholder="010-"
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dadPhone" className="block text-sm font-medium">
                  아빠 전화번호
                </label>
                <input
                  type="tel"
                  id="dadPhone"
                  value={dadPhone}
                  onChange={(e) => setDadPhone(e.target.value)}
                  placeholder="010-"
                  className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </form>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
              >
                취소
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage;
