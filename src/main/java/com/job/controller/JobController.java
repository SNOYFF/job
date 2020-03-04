package com.job.controller;
import	java.awt.print.Pageable;


import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.job.mapper.CityMapper;
import com.job.mapper.JobMapper;
import com.job.pojo.City;
import com.job.pojo.JSONResult;
import com.job.pojo.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
/*全部*/

@RestController
@EnableAutoConfiguration
public class JobController {

    @Autowired
    private JobMapper jobMapper;

    @RequestMapping("/queryJob")
    public JSONResult queryCity(@RequestParam(value="pn",defaultValue ="1")Integer pn, Model model){
        /*查询之前需要调用，传入页码，以及每页的大小*/
        PageHelper.startPage(pn,10);
        List jobs = jobMapper.queryJobs();
        /*封装了页面的信息，包括查询出来的数据 ，传入连续显示的页数*/
        PageInfo page = new PageInfo(jobs,5);

        return JSONResult.success(page);
    }

}
