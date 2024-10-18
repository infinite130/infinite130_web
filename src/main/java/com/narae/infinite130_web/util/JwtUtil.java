package com.narae.infinite130_web.util;

import com.narae.infinite130_web.config.JwtConfig;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

  private final JwtConfig jwtConfig;

  public JwtUtil(JwtConfig jwtConfig) {
    this.jwtConfig = jwtConfig;
  }

  @PostConstruct
  public void init() {
    if (jwtConfig.getSecret() == null || jwtConfig.getSecret().isEmpty()) {
      throw new IllegalArgumentException("JWT 비밀키가 설정되지 않았습니다.");
    }
    System.out.println("JWT Secret 초기화: " + jwtConfig.getSecret());
    jwtConfig.setSecret(Base64.getEncoder().encodeToString(jwtConfig.getSecret().getBytes()));
  }

  public String generateToken(String username) {
    Map<String, Object> claims = new HashMap<>();
    return createToken(claims, username);
  }

  public String createToken(Map<String, Object> claims, String subject) {
    return Jwts.builder()
        .setClaims(claims)
        .setSubject(subject)
        .setIssuedAt(new Date(System.currentTimeMillis()))
        .setExpiration(new Date(System.currentTimeMillis() + jwtConfig.getExpiration()))
        .signWith(SignatureAlgorithm.HS512, jwtConfig.getSecret())
        .compact();
  }

  public boolean validateToken(String token) {
    try {
      Jwts.parserBuilder().setSigningKey(jwtConfig.getSecret()).build().parseClaimsJws(token);
      return true;
    } catch (ExpiredJwtException e) {
      System.out.println("토큰이 만료되었습니다.");
      return false;
    } catch (io.jsonwebtoken.security.SecurityException | io.jsonwebtoken.MalformedJwtException e) {
      System.out.println("서명이 잘못되었습니다.");
      return false;
    } catch (Exception e) {
      System.out.println("유효하지 않은 토큰입니다.");
      return false;
    }
  }

  public String getUsernameFromToken(String token) {
    Claims claims = Jwts.parserBuilder().setSigningKey(jwtConfig.getSecret()).build()
        .parseClaimsJws(token)
        .getBody();
    return claims.getSubject();
  }
}
