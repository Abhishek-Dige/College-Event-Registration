package com.example.backend.model;

public class Record {

    private String id;

    private String name;
    private String email;
    private String eventName;
    private String time;

    // Constructors
    public Record() {
    }

    public Record(String name, String email, String eventName, String time) {
        this.name = name;
        this.email = email;
        this.eventName = eventName;
        this.time = time;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
