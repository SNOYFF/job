package com.job.pojo;

import lombok.Data;

@Data
public class Job {
    Integer id;
    String company_financing_stage;/*公司融资情况*/
    String company_industry;/*公司领域*/
    String company_location;/*公司地址*/
    String company_name;/*公司名称*/
    String company_nature;/*公司性质*/
    String company_overview;/*公司简介*/
    String company_people;/*公司人数*/
    String job_edu_require;/*学历要求*/
    String job_exp_require;/*经验要求*/
    String job_info;/*工作内容*/
    String job_name;/*工作名称*/
    String job_salary;/*工资薪资*/
    String job_tag;/*工作标签*/
    String job_welfare;/*工作福利*/
    String job_salary_low;/*最低工资*/
    String job_salary_high;/*最高工资*/
    String job_salary_avg;/*平均工资*/
    String company_location_A;/*省*/
    String company_location_B;/*区间*/
    String company_location_C;/*具体地址*/
}
