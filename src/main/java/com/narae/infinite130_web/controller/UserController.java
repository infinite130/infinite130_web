package com.narae.infinite130_web.controller;

import com.narae.infinite130_web.service.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/signup")
  public String signup(@RequestParam String username, @RequestParam String password,
      @RequestParam String email) {

    try {
      userService.registerUser(username, password, email);
      return "회원가입이 완료되었습니다.";
    } catch (IllegalArgumentException e) {
      return e.getMessage(); // 비밀번호 검증 실패 시 오류 메시지 반환
    }


  }

}
