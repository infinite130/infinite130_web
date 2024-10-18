package com.narae.infinite130_web.controller;

import com.narae.infinite130_web.entity.User;
import com.narae.infinite130_web.repository.UserRepository;
import com.narae.infinite130_web.util.JwtUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")  // 여기서 경로를 설정
public class AuthController {


  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtUtil jwtUtil;

  public AuthController(UserRepository userRepository, PasswordEncoder passwordEncoder,
      JwtUtil jwtUtil) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtUtil = jwtUtil;
  }

  @PostMapping("/login")
  public String login(@RequestParam String username, @RequestParam String password) {
    User user = userRepository.findByUsername(username);
    if (user == null) {
      return "사용자가 존재하지 않습니다.";
    }
    if (!passwordEncoder.matches(password, user.getPassword())) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return jwtUtil.generateToken(username);
  }


}
