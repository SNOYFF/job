package com.job.mapper;
import com.job.pojo.SalaryBox;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface SalaryBoxMapper {
    public List<SalaryBox> querySalaryBox();

}
