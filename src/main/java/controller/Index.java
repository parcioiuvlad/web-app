package controller;
/**
 * Created by vlad on 6/7/2015.
 */
import model.Person;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@RestController
public class Index {

    @RequestMapping(value = "/testRest", method = RequestMethod.GET, produces = "application/json")
    public Person testRest() {
        Random rand = new Random();
        Person person = new Person("test", rand.nextLong());

        return person;

    }

    @RequestMapping(value = "/testRestList", method = RequestMethod.GET, produces = "application/json")
    public List<Long> testRestList() {
        ArrayList<Long> results = new ArrayList<Long>();
        Random rand = new Random();
        for(int i=0;i<10;i++) {
            results.add(rand.nextLong());
        }
        return results;
    }

    @RequestMapping(value = "/testRestPost", method = RequestMethod.POST, consumes = "application/json")
    @ResponseBody
    public void testRestPost(@RequestBody Person person) {
        System.out.println(person.getName());
    }

}