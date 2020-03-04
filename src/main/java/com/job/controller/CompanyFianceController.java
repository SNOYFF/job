package com.job.controller;


import com.job.mapper.CompanyFinanceMapper;
import com.job.pojo.CompanyFinance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/*公司规模*/
@RestController
@EnableAutoConfiguration

public class CompanyFianceController {

    @Autowired
    private CompanyFinanceMapper companyFinanceMapper;

    @RequestMapping("/queryCompanyFinance")
    public List<CompanyFinance> queryFinanceMapper(){
       List com = companyFinanceMapper.queryCompanyFinance();
        return com;
    }


}
