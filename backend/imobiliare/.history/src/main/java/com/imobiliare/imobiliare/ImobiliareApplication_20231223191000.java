package com.imobiliare.imobiliare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class ImobiliareApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImobiliareApplication.class, args);
	}

}
