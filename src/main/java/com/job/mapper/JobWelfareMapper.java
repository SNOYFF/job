package com.job.mapper;

import com.job.pojo.JobWelfare;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface JobWelfareMapper {

    public List<JobWelfare> queryJobWelfare();

}
