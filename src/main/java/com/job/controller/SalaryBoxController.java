package com.job.controller;


import com.job.mapper.SalaryBoxMapper;
import com.job.pojo.SalaryBox;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

/*工资箱型图*/
@RestController
@EnableAutoConfiguration

public class SalaryBoxController {

    @Autowired
    private SalaryBoxMapper salaryBoxMapper;

    @RequestMapping("/querySalaryBox")
    public List<SalaryBox> SalaryBox(){
        List salaryBoxes = salaryBoxMapper.querySalaryBox();
        return salaryBoxes;
    }

}
