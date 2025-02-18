package com.IoTCore.IoTCoreblog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"controller", "service", "repository", "config", "com.IoTCore.IoTCoreblog"})
@EntityScan("model")
@EnableJpaRepositories("repository")
public class IoTCoreblogApplication {

	public static void main(String[] args) {
		SpringApplication.run(IoTCoreblogApplication.class, args);
	}

}
