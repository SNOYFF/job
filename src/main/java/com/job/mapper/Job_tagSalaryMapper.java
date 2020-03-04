package com.job.mapper;
import com.job.pojo.Job_tagSalary;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface Job_tagSalaryMapper {
    public List<Job_tagSalary> queryJob_tagSalary();

}
