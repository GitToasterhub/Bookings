package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Controller
public class HomeController {
	
	@RequestMapping({"/index","/"})
	public String index(){
		
		return "index";
	}
	
	@RequestMapping("/hello")
	public String hello(){
		return "hello";
	}
	
	@RequestMapping("/add")
	public String add(){
		return "add";
	}
}
