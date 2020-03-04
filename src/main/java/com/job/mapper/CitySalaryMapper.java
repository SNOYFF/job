package com.job.mapper;
import com.job.pojo.CitySalary;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface CitySalaryMapper {
    public List<CitySalary> query();

}
