package com.job.mapper;

import com.job.pojo.JobName;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JobNameMapper {
    public List<JobName> alljobname();

}
