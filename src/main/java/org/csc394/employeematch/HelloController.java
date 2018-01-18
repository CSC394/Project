package org.csc394.employeematch;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @RequestMapping("/")
    public String index(){
        return "Hello CSC 394 Teammates!";
    }
}
