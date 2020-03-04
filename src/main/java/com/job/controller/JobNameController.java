package com.job.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.JobNameMapper;
import com.job.pojo.JobName;

import java.util.List;

/*岗位排行*/
@RestController
@EnableAutoConfiguration

public class JobNameController {

    @Autowired
    private JobNameMapper jobNameMapper;

    @RequestMapping("/jobname")
    public List<JobName> jobname(){
        List<JobName> jobName = jobNameMapper.alljobname();
        return jobName;
    }
}
