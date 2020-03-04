package com.job.mapper;
import com.job.pojo.Salary;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface SalaryMapper {

    public Salary avgSalary();
    public Salary highSalary();
    public Salary lowSalary();

    public Salary avgSalaryWithBJ();
    public Salary highSalaryWithBJ();
    public Salary lowSalaryWithBJ();

    public Salary avgSalaryWithSH();
    public Salary highSalaryWithSH();
    public Salary lowSalaryWithSH();

    public Salary avgSalaryWithSZ();
    public Salary highSalaryWithSZ();
    public Salary lowSalaryWithSZ();

    public Salary avgSalaryWithHZ();
    public Salary highSalaryWithHZ();
    public Salary lowSalaryWithHZ();

    public Salary avgSalaryWithGZ();
    public Salary highSalaryWithGZ();
    public Salary lowSalaryWithGZ();

    public Salary avgSalaryWithCD();
    public Salary highSalaryWithCD();
    public Salary lowSalaryWithCD();

    public Salary avgSalaryWithWH();
    public Salary highSalaryWithWH();
    public Salary lowSalaryWithWH();

    public Salary avgSalaryWithNJ();
    public Salary highSalaryWithNJ();
    public Salary lowSalaryWithNJ();


}
