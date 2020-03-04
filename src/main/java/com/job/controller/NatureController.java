package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.NatureMapper;
import com.job.pojo.Nature;

import java.util.List;

/*公司性质*/
@RestController
@EnableAutoConfiguration

public class NatureController {

    @Autowired
    private NatureMapper natureMapper;

    @RequestMapping("/queryNature")
    public List<Nature> queryNature(){
        List citys = natureMapper.queryNature();
        return citys;
    }

}
