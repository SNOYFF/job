package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.EduSalaryMapper;
import com.job.pojo.EduSalary;

import java.util.List;

/*学历对应工资*/
@RestController
@EnableAutoConfiguration

public class EduSalaryController {

    @Autowired
    private EduSalaryMapper eduSalaryMapper;

    @RequestMapping("/queryEduSalary")
    public List<EduSalary> queryEduSalary(){
        List citys = eduSalaryMapper.queryEduSalary();
        return citys;
    }

}
