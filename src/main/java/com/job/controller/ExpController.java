package com.job.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.job.mapper.ExpMapper;
import com.job.pojo.Exp;

import java.util.List;

/*工作经验*/
@RestController
@EnableAutoConfiguration

public class ExpController {

    @Autowired
    private ExpMapper expMapper;

    @RequestMapping("/queryExp")
    public List<Exp> queryCity(){
        List exp = expMapper.queryExp();
        return exp;
    }

}
