package com.job.mapper;

import com.job.pojo.Nature;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface NatureMapper {
    public List<Nature> queryNature();

}
