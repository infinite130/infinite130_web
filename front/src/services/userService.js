// src/services/userService.js

import {getUserProfile} from "../api/userApi";
import {getToken} from "../utils/tokenUtils";

export const fetchUserProfile = async () => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('인증되지 않은 유저입니다');
    }

    const profile = await getUserProfile(token);
    return profile;
  } catch (error) {
    console.error('프로필 인증 실패:', error);
    throw error;
  }
};