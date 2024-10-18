package com.narae.infinite130_web.service;

import com.narae.infinite130_web.entity.User;
import com.narae.infinite130_web.repository.UserRepository;
import java.util.regex.Pattern;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  // 비밀번호 유효성 검사 메서드
  public boolean validatePassword(String password) {
    String passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
    Pattern pattern = Pattern.compile(passwordRegex);
    return pattern.matcher(password).matches();
  }

  // 회원가입 로직
  public void registerUser(String username, String password, String email) {

    // 비밀번호 검증
    if (!validatePassword(password)) {
      throw new IllegalArgumentException("비밀번호는 대문자, 소문자, 숫자, 특수문자를 포함해야 하며, 최소 8자 이상이어야 합니다.");
    }

    // 비밀번호가 유효하다면 저장
    User user = new User();
    user.setUsername(username);
    user.setPassword(passwordEncoder.encode(password)); // 비밀번호 암호화
    user.setEmail(email);
    user.setRole(User.Role.USER); // 기본적으로 일반 사용자로 등록
    userRepository.save(user);
  }

}
