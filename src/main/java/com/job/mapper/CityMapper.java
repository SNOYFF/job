package com.job.mapper;
import com.job.pojo.City;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface CityMapper {
    public List<City> queryCitys();

}
