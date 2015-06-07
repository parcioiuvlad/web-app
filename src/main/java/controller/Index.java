package controller;
/**
 * Created by vlad on 6/7/2015.
 */
import model.Person;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Index {

    @RequestMapping(value = "/testRest", method = RequestMethod.GET, produces = "application/json")
    public Person testRest() {
        Person person = new Person("test", 1l);

        return person;

    }

}