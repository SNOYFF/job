package com.job.mapper;

import com.job.pojo.Industry;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface IndustryMapper {
    public List<Industry> queryIndustry();

}
