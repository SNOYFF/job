package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.EduMapper;
import com.job.pojo.Edu;

import java.util.List;

/*学历要求*/
@RestController
@EnableAutoConfiguration

public class EduController {

    @Autowired
    private EduMapper eduMapper;

    @RequestMapping("/queryEdu")
    public List<Edu> queryEdu(){
        List edu = eduMapper.queryEdu();
        return edu;
    }

}
