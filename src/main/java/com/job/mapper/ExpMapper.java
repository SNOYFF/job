package com.job.mapper;

import com.job.pojo.Exp;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface ExpMapper {
    public List<Exp> queryExp();

}
