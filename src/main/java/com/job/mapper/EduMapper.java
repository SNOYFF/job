package com.job.mapper;

import com.job.pojo.Edu;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface EduMapper {
    public List<Edu> queryEdu();

}
