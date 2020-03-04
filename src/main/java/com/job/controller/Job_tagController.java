package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.Job_tagMapper;
import com.job.pojo.Job_tag;

import java.util.List;

/*城市招聘数量排行*/
@RestController
@EnableAutoConfiguration

public class Job_tagController {

    @Autowired
    private Job_tagMapper job_tagMapper;

    @RequestMapping("/queryJob_tag")
    public List<Job_tag> queryCity(){
        List citys = job_tagMapper.queryJob_tag();
        return citys;
    }

}
