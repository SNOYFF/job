package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.JobTagMapper;
import com.job.pojo.JobTag;

import java.util.List;

/*各个城市岗位百分比*/
@RestController
@EnableAutoConfiguration

public class JobTagController {

    @Autowired
    private JobTagMapper jobTagMapper;

    @RequestMapping("/queryBJ")
    public List<JobTag> queryBJ(){
        List<JobTag> jobtags = jobTagMapper.queryBJ();
        return jobtags;
    }
    @RequestMapping("/querySH")
    public List<JobTag> querySH(){
        List<JobTag> jobtags = jobTagMapper.querySH();
        return jobtags;
    }
    @RequestMapping("/querySZ")
    public List<JobTag> querySZ(){
        List<JobTag> jobtags = jobTagMapper.querySZ();
        return jobtags;
    }
    @RequestMapping("/queryHZ")
    public List<JobTag> queryHZ(){
        List<JobTag> jobtags = jobTagMapper.queryHZ();
        return jobtags;
    }
    @RequestMapping("/queryNJ")
    public List<JobTag> queryNJ(){
        List<JobTag> jobtags = jobTagMapper.queryNJ();
        return jobtags;
    }
    @RequestMapping("/queryGZ")
    public List<JobTag> queryGZ(){
        List<JobTag> jobtags = jobTagMapper.queryGZ();
        return jobtags;
    }
    @RequestMapping("/queryCD")
    public List<JobTag> queryCD(){
        List<JobTag> jobtags = jobTagMapper.queryCD();
        return jobtags;
    }
    @RequestMapping("/queryWH")
    public List<JobTag> queryWH(){
        List<JobTag> jobtags = jobTagMapper.queryWH();
        return jobtags;
    }

}
