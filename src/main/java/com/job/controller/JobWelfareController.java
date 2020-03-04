package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.JobWelfareMapper;
import com.job.pojo.JobWelfare;

import java.util.List;

/*工作福利*/
@RestController
@EnableAutoConfiguration

public class JobWelfareController {

    @Autowired
    private JobWelfareMapper jobWelfareMapper;

    @RequestMapping("/queryJobWelfare")
    public List<JobWelfare> queryJobWelfare(){
        List citys = jobWelfareMapper.queryJobWelfare();
        return citys;
    }

}
