package com.job.controller;


import com.job.mapper.CitySalaryMapper;
import com.job.pojo.CitySalary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*工资排行*/
@RestController
@EnableAutoConfiguration

public class CitySalaryController {

    @Autowired
    private CitySalaryMapper citySalaryMapper;

    @RequestMapping("/queryCitySalary")
    public List<CitySalary> queryCity(){
        List citys = citySalaryMapper.query();
        return citys;
    }

}
