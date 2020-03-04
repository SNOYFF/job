package com.job.mapper;
import com.job.pojo.CompanySalary;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface CompanySalaryMapper {
    public List<CompanySalary> queryCompanySalary();

}
