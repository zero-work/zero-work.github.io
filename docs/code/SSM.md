# SSM框架
## Spring IOC
### Spring 常用注解
1.声明Bean注解
- @Component:用于表示Bean对象，可以在任何层下使用
- @Repository:用于数据层（Dao）的类表示为Bean对象
- @Service:用于业务逻辑层（Service）的类表示为Bean对象
- @Controller:用于控制器组件类（Controller）

2.注入Bean的注解 （对于变量、方法、构造方法进行标注，完成自动装配的工作）
- @Autowired：默认按照Bean的类型进行装配
- @Resource：默认按照名称来装配
- @Qualifier：与@Autowired注解配合使用，当使用Autowired需要按照名称来装配时，就需要跟Qualifier注解一起使用。
### 基于注解的依赖注解
**Spring Ioc容器负责创建和注入Bean。Spring提供使用XML配置、注解、Java配置以及groovy配置实现Bean的创建和注入。**

- @Repository("[Dao实现类]")
- @Service("[Service实现类]")
- @Controller  **Controller类名上**
- @Configuration  **声明当前类是一个配置类，相当于Spring中的XMl配置文件**
  @ComponentScan("[包名]") **自动扫描包名下的注解，并注册为Bean** 
  *相当于Spring中XML配置中的<context：component-scan base-package="Bean所在包路径">*
### Java配置
*Dao、Service、Controller层都不需要使用注解*
- 创建配置类
``` java
@Configuration
public class JavaConfig{
    @Bean
    public TestDao getTestDao(){
        return new TestDao();
    }
    @Bean
    public TestService getTestService(){
        TestService ts = new TestService();
        // 使用set方法注入testDao
        ts.setTestDao(getTestDao());
        return ts;
    }
    @Bean
    public TestController getTestController(){
        TestController tc = new TestController();
        // 使用set方法注入
        tc.getTestService( getTestService() );
        return tc;
    }
}
```
## Spring AOP
**提供了面向切面编程实现，多用于在事务处理、日志记录、安全控制等操作中被广泛使用。**
#### AOP术语
- 切面：封装横切到系统功能的类
- 连接点：程序运行中的一些时间点，如方法的调用或者异常的抛出。
- 切入点：那些需要进行处理的连接点
- 通知：由切面添加到特定的连接点的一段代码（通知是切面的具体实现）
- 引入：允许在现有的实现类中添加自定义方法和属性
- 目标对象：所有被通知的对象
- 代理：通知应用到目标对象之后，被动态创建的对象
- 织入：将切面代码插入到目标对象上，从而生成代理对象的过程
### 基于注解开发AspectJ
- 环绕通知：在目标方法执行前和执行后实施增强的，可以用于日志记录、事务处理等
- 前置通知：在目标方法前实施增强的，用于权限管理
- 后置返回通知：目标方法成功执行后实施增强的，可以用于关闭流、删除临时文件等
- 后置最终通知：目标方法执行后实施增强的，不管方法是否执行成功，用于释放资源
- 异常通知：方法抛出异常后实施增强的，用于处理异常、记录日志等
- 引入通知：在目标类中添加一些新的方法或者属性，用于修改目标类
```java
 @Aspect  // 定义一个切面，注解在切面类上
 @Pointcut  // 用于定义切入点表达式
 @Before  // 定义前置通知
 @AfterReturning  // 定义后置返回通知
 @Around  // 定义环绕通知
 @AfterThrowing  // 定义异常通知
 @After  // 定义后置最终通知
```
**实例代码**
```java
// 使用Repository注解写好Dao层与DaoImpl层

// 定义切面类
@Aspect  // @Aspect声明一个切面
@Component  // @Component 设置当前类被Spring管理为Bean
public class MyAspect {
    @Pointcut("execution(* aspect.dap.*.(..))")   // （）内的是切入点表达式，匹配包中任意方法的执行
/*
execution( )  // 表示式主体
*  // 返回类型 *代表所有类型
aspect.dao  // 需要匹配的包名
*.*  // 第一个*代表包下所有类，第二个代表类下所有方法
（..）  // 表示方法的参数，.. 代表了所有参数
*/
private void myPointcut(){...}

// 前置通知 使用Jpinpoint接口作为参数获取目标对象信息
@Before("myPointcut()")  // myPointcut()是切入点的定义方法
public void before(JoinPoint jp){...}

// 后置通知
@AfterReturning("myPointcut()")
public void afterReturning(JoinPoint jp){...}

/*
环绕通知
ProceedingJoinPoint 是JoinPoint子接口  代表可以执行的目标方法
返回值必须为Object
必须一个参数是ProceedingJoinPoint类型
必须throws Throwable
*/
@Around("myPointcut()")
public Object around(ProceedingJoinPoint pjp) throws Throwable{...}

// 异常通知
AfterThrowing(value="myPointcut()" ,throwing = "e")
public void except(Throwable e){...}

// 后置最终通知
@After("myPointcut()")
public void after(){...}
}



// 设置aspectj的配置类

@Configuration  // 声明配置类
@ComponentScan("aspectj")  // 自动扫描aspectj包下的注解
@EnableAspectJAutoProxy  // 开启spring对AspectJ的支持

public class AspectJAOPConfig{...}

// 测试类
main(){
    AnnotationConfigApplication appCon= new AnnotationConfigApplicationContext(AspectJAOPConfig.class);
    TestDao testDao = appCon.getBean(TestDao.class);
    // 下面正常调用方法即可
}
```