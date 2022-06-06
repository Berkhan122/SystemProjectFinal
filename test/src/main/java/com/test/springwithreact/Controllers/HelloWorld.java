package com.test.springwithreact.Controllers;

public class HelloWorld {
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HelloWorld(String Message) {
        this.message = Message;
    }

}
