package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.CityMapper;
import com.job.pojo.City;

import java.util.List;
/*城市招聘数量排行*/

@RestController
@EnableAutoConfiguration
public class CityController {

    @Autowired
    private CityMapper cityMapper;

    @RequestMapping("/queryCity")
    public List<City> queryCity(){
        List citys = cityMapper.queryCitys();
        return citys;
    }

}
