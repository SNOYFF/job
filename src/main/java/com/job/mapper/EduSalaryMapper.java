package com.job.mapper;

import com.job.pojo.EduSalary;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface EduSalaryMapper {
    public List<EduSalary> queryEduSalary();

}
