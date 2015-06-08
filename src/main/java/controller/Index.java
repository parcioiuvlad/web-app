package controller;
/**
 * Created by vlad on 6/7/2015.
 */
import model.Person;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Random;

@RestController
public class Index {

    @RequestMapping(value = "/testRest", method = RequestMethod.GET, produces = "application/json")
    public Person testRest() {
        Random rand = new Random();
        Person person = new Person("test", rand.nextLong());

        return person;

    }

}