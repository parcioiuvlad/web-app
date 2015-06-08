package model;

/**
 * Created by vlad on 6/7/2015.
 */
public class Person {
    private String name;
    private Long age;

    public Person(String name, Long age) {
        this.name = name;
        this.age = age;
    }

    public Person(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }
}
