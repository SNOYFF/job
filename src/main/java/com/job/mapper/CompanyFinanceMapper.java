package com.job.mapper;

import com.job.pojo.CompanyFinance;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyFinanceMapper {

    public List<CompanyFinance> queryCompanyFinance();
}
