// src/pages/Profile.js

import React, {useState, useEffect} from 'react';

function Profile() {  // 컴포넌트 이름을 대문자로 수정
  const [profile, setProfile] = useState(null);  // useState Hook 사용

  useEffect(() => {
    // 프로필 데이터를 가져오는 로직
    const fetchProfile = async () => {
      try {
        // 프로필 데이터를 가져오는 API 호출
        const response = await fetch('/api/profile');  // API 경로는 상황에 맞게 수정하세요
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('프로필 가져오기 실패:', error);
      }
    };

    fetchProfile();
  }, []);  // useEffect Hook 사용

  if (!profile) {
    return <p>프로필 로딩 중...</p>;
  }

  return (
      <div>
        <h1>Profile Page</h1>
        <p>이름: {profile.username}</p>
        <p>이메일: {profile.email}</p>
      </div>
  );
}

export default Profile;
