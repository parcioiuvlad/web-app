package controller;
/**
 * Created by vlad on 6/7/2015.
 */
import model.Person;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
public class Index {

    @RequestMapping(value = "/testRest", method = RequestMethod.GET, produces = "application/json")
    public Person testRest() {
        Random rand = new Random();
        Person person = new Person("test", rand.nextLong());

        return person;

    }

    @RequestMapping(value = "/testRestPost", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public void testRestPost(@RequestBody Person person) {
        System.out.println(person.getName());
    }

}