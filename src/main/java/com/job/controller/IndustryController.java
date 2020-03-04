package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.IndustryMapper;
import com.job.pojo.Industry;

import java.util.List;

/*公司性质*/
@RestController
@EnableAutoConfiguration

public class IndustryController {

    @Autowired
    private IndustryMapper industryMapper;

    @RequestMapping("/queryIndustry")
    public List<Industry> queryIndustry(){
        List citys = industryMapper.queryIndustry();
        return citys;
    }

}
