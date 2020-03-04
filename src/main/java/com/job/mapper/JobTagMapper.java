package com.job.mapper;
import com.job.pojo.JobTag;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface JobTagMapper {
    public List<JobTag> queryBJ();
    public List<JobTag> querySH();
    public List<JobTag> querySZ();
    public List<JobTag> queryHZ();
    public List<JobTag> queryNJ();
    public List<JobTag> queryGZ();
    public List<JobTag> queryCD();
    public List<JobTag> queryWH();

}
