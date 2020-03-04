package com.job.controller;


import com.job.mapper.CompanyPeopleMapper;
import com.job.pojo.CompanyPeople;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*公司规模*/
@RestController
@EnableAutoConfiguration

public class CompanyPeopleController {

    @Autowired
    private CompanyPeopleMapper companyPeopleMapper;

    @RequestMapping("/queryCompanyPeople")
    public List<CompanyPeople> queryCompanyPeople(){
       List com = companyPeopleMapper.queryCompanyPeople();
        return com;
    }

}
