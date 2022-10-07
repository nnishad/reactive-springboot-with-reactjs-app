package com.nikhilnishad.springreactapp.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/ddd")
    public String home(){
        return "index";
    }
}
