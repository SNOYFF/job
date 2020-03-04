package com.job.mapper;
import com.job.pojo.City;
import com.job.pojo.Job;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/*
*
* 全部数据
*
* */
@Mapper
public interface JobMapper {
    public List<Job> queryJobs();

}
