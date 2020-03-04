package com.job.pojo;


import lombok.Data;

@Data
public class User {

    private Integer id;
    private String username;
    private Integer password;
    private String name;

    /*
    *在开发环境中使用 Lombok 插件后，Java 开发人员可以节省出重复构建，
    * 诸如 hashCode 和 equals 这样的方法以及各种业务对象模型的 accessor
    * 和 toString 等方法的大量时间。
    * 对于这些方法，Lombok 能够在编译源代码期间自动帮我们生成这些方法，
    * 但并不会像反射那样降低程序的性能。
    *
    * */

}
