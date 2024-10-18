package com.narae.infinite130_web.config;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(JwtConfig.class)
public class AppConfig {
  // 추가적인 설정이 필요하다면 여기에서 작성할 수 있습니다.
}
