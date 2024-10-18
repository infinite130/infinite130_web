package com.narae.infinite130_web;

import com.narae.infinite130_web.config.JwtConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
@EnableConfigurationProperties(JwtConfig.class)  // JwtConfig를 명시적으로 활성화
public class Infinite130WebApplication {

  public static void main(String[] args) {
    SpringApplication.run(Infinite130WebApplication.class, args);
  }
}