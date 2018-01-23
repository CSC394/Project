package org.csc394.employeematch;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping(path="/api")
public class TestController {
	@GetMapping(path = "/hello-world")
    @CrossOrigin(origins = "http://localhost:4200")
	public String helloWorld(){
		return "Hello world! (this is loaded from a spring API)";
	}
}