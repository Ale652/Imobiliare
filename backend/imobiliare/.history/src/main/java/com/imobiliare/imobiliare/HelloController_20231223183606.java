package com.imobiliare.imobiliare;


@RestController
public class HelloController{

    @RequestMapping("/hello")
    public String hello(){
        return "Hello world !"
    }
}