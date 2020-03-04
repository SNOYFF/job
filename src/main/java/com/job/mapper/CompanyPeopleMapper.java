package com.job.mapper;

import com.job.pojo.CompanyPeople;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyPeopleMapper {

    public List<CompanyPeople> queryCompanyPeople();
}
