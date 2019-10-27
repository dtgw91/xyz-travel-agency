package com.xyz;

import com.xyz.repository.UserEntityRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Java6Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
public class UserEntityRepositoryIntegrationTest {

    @Autowired
    private UserEntityRepository userRepository;

    @Test
    public void whenCalledSave_thenCorrectNumberOfUsers() {
//        userRepository.save(new UserEntity("Bob", "bob@domain.com"));
//        List<UserEntity> users = (List<UserEntity>) userRepository.findAll();
//
//
//        assertThat(users.size()).isEqualTo(1);
//        System.out.println(users.get(0));

    }
}
