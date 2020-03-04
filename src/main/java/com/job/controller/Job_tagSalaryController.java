package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.Job_tagSalaryMapper;
import com.job.pojo.Job_tagSalary;

import java.util.List;

/*岗位对应的工资*/
@RestController
@EnableAutoConfiguration

public class Job_tagSalaryController {

    @Autowired
    private Job_tagSalaryMapper job_tagSalaryMapper;

    @RequestMapping("/queryJob_tagSalary")
    public List<Job_tagSalary> queryJob_tagSalary(){
        List citys = job_tagSalaryMapper.queryJob_tagSalary();
        return citys;
    }

}
