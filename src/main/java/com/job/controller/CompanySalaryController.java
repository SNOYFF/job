package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.CompanySalaryMapper;
import com.job.pojo.CompanySalary;

import java.util.List;

/*不同的融资阶段公司薪酬*/
@RestController
@EnableAutoConfiguration

public class CompanySalaryController {

    @Autowired
    private CompanySalaryMapper companySalaryMapper;

    @RequestMapping("/queryCompanySalary")
    public List<CompanySalary> queryCity(){
        List citys = companySalaryMapper.queryCompanySalary();
        return citys;
    }

}
