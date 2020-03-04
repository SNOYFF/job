package com.job.controller;


import com.job.mapper.SalaryMapper;
import com.job.pojo.Salary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*全部的城市和全国薪酬情况*/
@RestController
@EnableAutoConfiguration

public class SalaryController {

    @Autowired
    private SalaryMapper salaryMapper;

    @RequestMapping("/avgSalary")
    public Salary avgSalary(){
        Salary salary = salaryMapper.avgSalary();
        return salary;
    }
    @RequestMapping("/highSalary")
    public Salary highSalary(){
        Salary salary = salaryMapper.highSalary();
        return salary;
    }
    @RequestMapping("/lowSalary")
    public Salary lowSalary(){
        Salary salary = salaryMapper.lowSalary();
        return salary;
    }

    @RequestMapping("/avgSalaryWithBJ")
    public Salary avgSalaryWithBJ(){
        Salary salary = salaryMapper.avgSalaryWithBJ();
        return salary;
    }


    @RequestMapping("/highSalaryWithBJ")
    public Salary highSalaryWithBJ(){
        Salary salary = salaryMapper.highSalaryWithBJ();
        return salary;
    }
    @RequestMapping("/lowSalaryWithBJ")
    public Salary lowSalaryWithBJ(){
        Salary salary = salaryMapper.lowSalaryWithBJ();
        return salary;
    }

    @RequestMapping("/avgSalaryWithSH")
    public Salary avgSalaryWithSH(){
        Salary salary = salaryMapper.avgSalaryWithSH();
        return salary;
    }
    @RequestMapping("/highSalaryWithSH")
    public Salary highSalaryWithSH(){
        Salary salary = salaryMapper.highSalaryWithSH();
        return salary;
    }
    @RequestMapping("/lowSalaryWithSH")
    public Salary lowSalaryWithSH(){
        Salary salary = salaryMapper.lowSalaryWithSH();
        return salary;
    }

    @RequestMapping("/avgSalaryWithSZ")
    public Salary avgSalaryWithSZ(){
        Salary salary = salaryMapper.avgSalaryWithSZ();
        return salary;
    }
    @RequestMapping("/highSalaryWithSZ")
    public Salary highSalaryWithSZ(){
        Salary salary = salaryMapper.highSalaryWithSZ();
        return salary;
    }
    @RequestMapping("/lowSalaryWithSZ")
    public Salary lowSalaryWithSZ(){
        Salary salary = salaryMapper.lowSalaryWithSZ();
        return salary;
    }

    @RequestMapping("/avgSalaryWithHZ")
    public Salary avgSalaryWithHZ(){
        Salary salary = salaryMapper.avgSalaryWithHZ();
        return salary;
    }
    @RequestMapping("/highSalaryWithHZ")
    public Salary highSalaryWithHZ(){
        Salary salary = salaryMapper.highSalaryWithHZ();
        return salary;
    }
    @RequestMapping("/lowSalaryWithHZ")
    public Salary lowSalaryWithHZ(){
        Salary salary = salaryMapper.lowSalaryWithHZ();
        return salary;
    }

    @RequestMapping("/avgSalaryWithGZ")
    public Salary avgSalaryWithGZ(){
        Salary salary = salaryMapper.avgSalaryWithGZ();
        return salary;
    }
    @RequestMapping("/highSalaryWithGZ")
    public Salary highSalaryWithGZ(){
        Salary salary = salaryMapper.highSalaryWithGZ();
        return salary;
    }
    @RequestMapping("/lowSalaryWithGZ")
    public Salary lowSalaryWithGZ(){
        Salary salary = salaryMapper.lowSalaryWithGZ();
        return salary;
    }

    @RequestMapping("/avgSalaryWithCD")
    public Salary avgSalaryWithCD(){
        Salary salary = salaryMapper.avgSalaryWithCD();
        return salary;
    }
    @RequestMapping("/highSalaryWithCD")
    public Salary highSalaryWithCD(){
        Salary salary = salaryMapper.highSalaryWithCD();
        return salary;
    }
    @RequestMapping("/lowSalaryWithCD")
    public Salary lowSalaryWithCD(){
        Salary salary = salaryMapper.lowSalaryWithCD();
        return salary;
    }

    @RequestMapping("/avgSalaryWithWH")
    public Salary avgSalaryWithWH(){
        Salary salary = salaryMapper.avgSalaryWithWH();
        return salary;
    }
    @RequestMapping("/highSalaryWithWH")
    public Salary highSalaryWithWH(){
        Salary salary = salaryMapper.highSalaryWithWH();
        return salary;
    }
    @RequestMapping("/lowSalaryWithWH")
    public Salary lowSalaryWithWH(){
        Salary salary = salaryMapper.lowSalaryWithWH();
        return salary;
    }

    @RequestMapping("/avgSalaryWithNJ")
    public Salary avgSalaryWithNJ(){
        Salary salary = salaryMapper.avgSalaryWithNJ();
        return salary;
    }
    @RequestMapping("/highSalaryWithNJ")
    public Salary highSalaryWithNJ(){
        Salary salary = salaryMapper.highSalaryWithNJ();
        return salary;
    }
    @RequestMapping("/lowSalaryWithNJ")
    public Salary lowSalaryWithNJ(){
        Salary salary = salaryMapper.lowSalaryWithNJ();
        return salary;
    }

}
