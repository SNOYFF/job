package com.job.mapper;

import com.job.pojo.Job_tag;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface Job_tagMapper {
    public List<Job_tag> queryJob_tag();

}
