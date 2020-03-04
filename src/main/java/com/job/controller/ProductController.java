package com.job.controller;/*
package com.job.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.job.pojo.JSONResult;
import com.job.pojo.Product;
import com.job.pojo.Salary;

import java.util.ArrayList;

@Controller
public class ProductController {

    @RequestMapping("/project")
    @ResponseBody
    public  JSONResult myProject(){
        ArrayList<Product> productArrayList = new ArrayList<Product>();
        Product product1 = new Product();
        product1.setProductName("袜子");
        product1.setNums(15);
        Product product2 = new Product();
        product2.setProductName("羊毛衫");
        product2.setNums(20);
        Product product3 = new Product();
        product3.setProductName("雪纺衫");
        product3.setNums(24);
        Product product4 = new Product();
        product4.setProductName("高跟鞋");
        product4.setNums(30);

        productArrayList.add(product1);
        productArrayList.add(product2);
        productArrayList.add(product3);
        productArrayList.add(product4);

        return JSONResult.success(productArrayList);
    }



    */
/*不传入参数查询工资*//*

    public JSONResult countryQuery(){
        Salary salary = new Salary();
        return null;
    }











    @RequestMapping("/success")
    @ResponseBody
    public JSONResult success() {
        return JSONResult.success("123");
    }

}
*/
