# SSM框架
## Spring ApplicationContext.xml配置
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans" xmlns:context="http://www.springframework.org/schema/context" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:aop="http://www.springframework.org/schema/aop"
    xmlns:tx="http://www.springframework.org/schema/tx" xmlns:p="http://www.springframework.org/schema/p" xmlns:util="http://www.springframework.org/schema/util" xmlns:jdbc="http://www.springframework.org/schema/jdbc"
    xmlns:cache="http://www.springframework.org/schema/cache"
    xsi:schemaLocation="
    http://www.springframework.org/schema/context
    http://www.springframework.org/schema/context/spring-context.xsd
    http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/tx
    http://www.springframework.org/schema/tx/spring-tx.xsd
    http://www.springframework.org/schema/jdbc
    http://www.springframework.org/schema/jdbc/spring-jdbc-3.1.xsd
    http://www.springframework.org/schema/cache
    http://www.springframework.org/schema/cache/spring-cache-3.1.xsd
    http://www.springframework.org/schema/aop
    http://www.springframework.org/schema/aop/spring-aop.xsd
    http://www.springframework.org/schema/util
    http://www.springframework.org/schema/util/spring-util.xsd">
 
    <!-- 自动扫描web包 ,将带有注解的类 纳入spring容器管理 -->
    <context:component-scan base-package="com.eduoinfo.finances.bank.web"></context:component-scan>
 
    <!-- 引入jdbc配置文件 -->
    <bean id="propertyConfigurer" class="org.springframework.beans.factory.config.PropertyPlaceholderConfigurer">
        <property name="locations">
            <list>
                <value>classpath*:jdbc.properties</value>
            </list>
        </property>
    </bean>
 
    <!-- dataSource 配置 -->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">
        <!-- 基本属性 url、user、password -->
        <property name="url" value="${jdbc.url}" />
        <property name="username" value="${jdbc.username}" />
        <property name="password" value="${jdbc.password}" />
 
        <!-- 配置初始化大小、最小、最大 -->
        <property name="initialSize" value="1" />
        <property name="minIdle" value="1" />
        <property name="maxActive" value="20" />
 
        <!-- 配置获取连接等待超时的时间 -->
        <property name="maxWait" value="60000" />
 
        <!-- 配置间隔多久才进行一次检测，检测需要关闭的空闲连接，单位是毫秒 -->
        <property name="timeBetweenEvictionRunsMillis" value="60000" />
 
        <!-- 配置一个连接在池中最小生存的时间，单位是毫秒 -->
        <property name="minEvictableIdleTimeMillis" value="300000" />
 
        <property name="validationQuery" value="SELECT 'x'" />
        <property name="testWhileIdle" value="true" />
        <property name="testOnBorrow" value="false" />
        <property name="testOnReturn" value="false" />
 
        <!-- 打开PSCache，并且指定每个连接上PSCache的大小 -->
        <property name="poolPreparedStatements" value="false" />
        <property name="maxPoolPreparedStatementPerConnectionSize" value="20" />
 
        <!-- 配置监控统计拦截的filters -->
        <property name="filters" value="stat" />
    </bean>
 
    <!-- mybatis文件配置，扫描所有mapper文件 -->
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean" p:dataSource-ref="dataSource" p:configLocation="classpath:mybatis-config.xml" p:mapperLocations="classpath:com/eduoinfo/finances/bank/web/dao/*.xml" />
 
    <!-- spring与mybatis整合配置，扫描所有dao -->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer" p:basePackage="com.eduoinfo.finances.bank.web.dao" p:sqlSessionFactoryBeanName="sqlSessionFactory" />
 
    <!-- 对dataSource 数据源进行事务管理 -->
    <bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager" p:dataSource-ref="dataSource" />
 
    <!-- 配置使Spring采用CGLIB代理 -->
    <aop:aspectj-autoproxy proxy-target-class="true" />
 
    <!-- 启用对事务注解的支持 -->
    <tx:annotation-driven transaction-manager="transactionManager" />
 
    <!-- Cache配置 -->
    <cache:annotation-driven cache-manager="cacheManager" />
    <bean id="ehCacheManagerFactory" class="org.springframework.cache.ehcache.EhCacheManagerFactoryBean" p:configLocation="classpath:ehcache.xml" />
    <bean id="cacheManager" class="org.springframework.cache.ehcache.EhCacheCacheManager" p:cacheManager-ref="ehCacheManagerFactory" />
 
</beans>
```
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

## Spring Bean
### Bean的实例化
- 构造方法实例化 (最常用的实例方法)
- 静态工厂实例化
- 实例工厂实例化

#### 实例化过程
```java
// 构造实例
public class BeanClass{
    public String message;
    public BeanClass(){
        message = "构造方法实例化";
    }
    public BeanClass(String s){
        message = s;
    }
}

//  实例工厂
public class BeanInstanceFactory{
    public BeanClass BeanInstanceFactory(){
        return new BeanClass("实例工厂方法实例化");
    }
}

// 静态工厂
public class BeanStaicFactory{
    public static BeanClass beanInstance = new BeanClass("调用静态工厂方法");
    public static BeanClass createInstance(){
        return beanInstance;
    }
}



// 配置类
@Configuration
public class JavaConfig{
    /**
    构造方法实例
    **/
    @Bean(vvalue = "beanClass")
    public BeanClass getBeanClass(){
        return new BeanClass();
    }
    
    // 静态工厂
    @Bean(value = "beanStaticFactory")
    public BeanClass getBeanStaticFactory(){
        return BeanStaticFactory.createInstance();
    }
    
    // 实例化工厂
    @Bean(value = "beanInstanceFactory")
    public BeanClass getBeanInstanceFactory(){
        BeanInstanceFactory bi = new BeanInstanceFactory();
        return bi.createBeanClassInstance();
    }
}


// 测试主类
public static void main( String[] args){
    // 初始化Spring容器ApplicationContext
    AnnotationConfigApplicationContext appCon = new AnnotationConfigApplicationContext(JavaConfig.class);
    // 构造方法
    BeanClass b1 = (BeanClass)appCon.getBean("beanClass");
    // 静态实例
    BeanClass b2 = (BeanClass)appCon.getBean("beanStaticFactory");
    // 实例工厂
    BeanClass b1 = (BeanClass)appCon.getBean("beanInstanceFactory");
}

```

**@Scope("......")**
- singleton：默认的作用域  只能有一个Bean实例
- prototype：每次都会新建一个Bean的实例
- request： 不同的HTTP请求返回不同的Bea实例，只允许在Web Spring应用上下文中使用
- session：HTTP请求返回同一个Bean实例，只允许在Web Spring应用上下文中使用
- application：在每个ServletContext对象创建一个实例，同一个应用共享一个Bean实例，只允许在Web Spring应用上下文中使用
- websocket：为每一个WebSocket对象创建一个实例，只允许在Web Spring应用上下文中使用

### Bean的初始化和销毁
**在Bean使用之前或者是使用之后需要做一些必要的操作**
```java
//  MyService类 方法实现
public class MyService { 
    public void initService(){
        // 初始化方法
    }
    
    public MySevice(){
        // 构造方法
    }
    
   public void destroyService() {
        // 销毁方法
   }
}

// 配置类
@Configuration
public class JavaConfig {
    @Bean( initMethod = "initService", destroyMethod = "destroyMethod")
    public MyService getMyService() {
        return new MyService();
    }
}
```
## Spring 数据库编程
### Spring JDBC的XML配置
```xml
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driverClass}"/>
        <property name="jdbcUrl" value="${jdbc.jdbcUrl}"/>
        <property name="user" value="${jdbc.user}"/>
        <property name="password" value="${jdbc.password}"/>
 </bean>
<!--配置JdbcTemplate对象-->
<!--该对象也依赖于数据源-->
<bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate">
    <!--属性注入   采用set方式-->
    <property name="dataSource" ref="dataSource"/>
</bean>
```
### Spring JDBC 的Java配置
```java
@Configuration
@ComponentScan(basePackages = "dao" )  // 配置扫描包
@PropertySource("classpath:/db.properties")//加载指定的property文件
public class jdbcConfigration {

    @Value("${jdbc.driverClassName}")
    String driverClassName;
    @Value("${jdbc.url}")
    String url;
    @Value("${jdbc.username}")
    String username;
    @Value("${jdbc.password}")
    String password;

    /**
     * 实例化Druid
     */
    @Bean
    public DataSource getDataSource(){
        DruidDataSource source=new DruidDataSource();
        source.setDriverClassName(this.driverClassName);
        source.setUrl(this.url);
        source.setUsername(this.username);
        source.setPassword(this.password);
        return source;
    }
    
    /**
    *配置jdbcTemplate
    */
    @Bean(value = "jdbcTemplate")
    public JdbcTemplate getJdbcTemplate( ){
        return new JdbcTemplate(getDataSource( ));
    }
}
```

### 基于@Transactional注解的声明式事务管理
**@Transactional注解可以用于接口、接口方法、类以及类方法上**
```java
@EnableTransactionManagment // 用于开启声明式事务的支持

/**
为数据源添加事务管理器
**/
public DataSoureTransactionManager transactionManager( ) {
    DataSourceTransactionManager dt = new DataSoureTransactionManager( );
    dt.setDataSource(dataSource( ));
    return dt;
}
```
在Service层处理数据时，要使用注解 **@Transactional**
#### 在事务处理中捕获异常信息
声明式事务处理流程是
- Spring根据配置完成事务定义，设置事务属性
- 执行代码逻辑
- 若代码出现异常并满足事务回滚的配置条件，则事务回滚，否则事务提交
- 事务资源释放

但在代码中添加try catch语句后，无法正常得到事务回滚的异常信息
因此，需要将@Transactional注解修改为@Transactional( rollbackFor = { Exception.class })
**rollbackFor 指定回滚生效的异常类，多个异常类需要用逗号分割，noRollbackFor指定回滚失效的异常类**
并在catch语句中添加 **throw new RuntimeException( );** 语句

## Spring MVC
### SpringMVC的工作原理
框架主要由DispatcherServlet、处理器映射、控制器、视图解析器、视图组成
![844a12b90c0431eb7ad3941e9a1813fb.png](en-resource://database/945:1)
### Spring MVC 的XML配置
web.xml中主要配置springMVC的前端控制器（核心控制器）
```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://java.sun.com/xml/ns/javaee" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd" version="3.0">
  <display-name>spring_mvc</display-name>
    <!-- springMVC的前端控制器 -->
   <servlet>
  	<servlet-name>springmvc</servlet-name>
  	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <!--init-param配置文件的位置 如果springmvc.xml是以xxx-servlet.xml命名，并且位于/WEB-INF下则不需要配置 -->
        <init-param>
  		<param-name>contextConfigLocation</param-name>
  		<param-value>classpath:springmvc.xml</param-value>
  	</init-param>
  	<load-on-startup>1</load-on-startup><!-- 立即加载 -->
  </servlet>
  <servlet-mapping>
  	<servlet-name>springmvc</servlet-name>
  	<url-pattern>/</url-pattern>
  </servlet-mapping>
</web-app>
```
springmvc.xml配置文件
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:aop="http://www.springframework.org/schema/aop"
    xmlns:tx="http://www.springframework.org/schema/tx"
    xmlns:context="http://www.springframework.org/schema/context"
    xsi:schemaLocation="
   http://www.springframework.org/schema/beans
   http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
   http://www.springframework.org/schema/aop
   http://www.springframework.org/schema/aop/spring-aop-3.0.xsd
   http://www.springframework.org/schema/tx
   http://www.springframework.org/schema/tx/spring-tx-3.0.xsd
   http://www.springframework.org/schema/context     
   http://www.springframework.org/schema/context/spring-context-3.0.xsd">
	
   	<!-- 配置controller -->
	<bean id="login" name="/loginController" class="com.hfxt.controller.LoginController"></bean>
	<!-- 1、配置映射处理器 ：name来映射寻找controller (默认存在，可以省略不配置，如果用到另外两种需要配置) -->
	<bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"></bean>
	<!-- 2、配置映射处理器:通过简单URL来查找controller -->
        <!-- <bean class="org.springframework.web.servlet.handler.SimpleUrlHandlerMapping">
            <property name="mappings">
                <props>
                    <prop key="login">login</prop><!-- controller的id,可以直接访问key(login) -->
                </props>
            </property>
        </bean> -->
    
        <!-- 3、配置映射处理器:控制类的类名控制器，访问时类名首字母需要小写 -->
        <!-- <bean class="org.springframework.web.servlet.mvc.support.ControllerClassNameHandlerMapping"></bean> -->
        <!-- 配置视图解析器 如何把handler 方法返回值解析为实际的物理视图  根据控制器返回的字符串拼接成jsp路径：/WEB-INF/page/xx.jsp -->
	<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
		<property name="prefix" value="/WEB-INF/page/"/><!-- 前缀 -->
		<property name="suffix" value=".jsp"/>><!-- 后缀 -->
	</bean>
</beans>
```
#### 基于Java配置的SpringMVC应用
Spring MVC的springmvc.xml
```java
@Configuration // 表明当前类是配置类
@EnableWebMvc  // 启用Web MVC功能
@ComponentScan("net.army.spring") // 组件扫描
public class SpringMvcConfig {
    // 定义内部资源视图解析器
    @Bean
    public InternalResourceViewResolver viewResolver() {
        // 创建内部资源视图解析器对象
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        // 设置内部资源视图解析器对象属性
        viewResolver.setViewClass(JstlView.class); // 设置视图类
        viewResolver.setPrefix("/WEB-INF/classes/templates/"); // 设置前缀
        viewResolver.setSuffix(".jsp"); // 设置后缀
        // 返回内部资源视图解析器对象
        return viewResolver;
    }
    /*
    *配置静态资源
    */
    @Override
    public void addResourceHandlers( ResourceHandlerRegistry registry){
        registry.addResourceHandler("/html/**").addResourceLocations("/html/");
    }
}
```
Spring MVC的web.xml配置文件
```java
public class MyWebAppInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        // 创建Web应用容器（基于注解配置类的Web应用容器）
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        // 注册配置类
        context.register(SpringMvcConfig.class); // 对应先前的spring-mvc-config.xml文件
        // 绑定当前的ServletContext对象 - 方法的参数（servletContext）
        context.setServletContext(servletContext);
        // 注册Spring MVC的前端控制器（DispatcherServlet）
        ServletRegistration.Dynamic servlet = servletContext.addServlet("dispatcher", new DispatcherServlet(context));
        // 过滤一切资源请求
        servlet.addMapping("/");
        // 设置启动加载顺序
        servlet.setLoadOnStartup(1);
    }
}
```
### 基于注解的控制器
#### @RequestMapping
使用方法：@RequestMapping（value = "请求地址"）
注解可以写在**方法**的上面，也可以写在**类**的上面
#### 接受参数
1.在使用实体Bean接收请求参数的时候，实体对象内容要与请求参数名称相同
2.若使用形参接收的话，参数名称也要与请求参数名称相同。
3.使用@RequestParam接收请求参数
public void 函数名( @RequestParam String name,@RequestParam String pass..... ){}
***区别：使用处理方法的形参接收请求参数不一致时，不会报错，而使用@RequestParam接受请求参数会报404错误***
4.使用@ModelAttribute
public void 方法名(@ModelAttribute("user") UserForm user){.....}
使用@ModelAttribute接受的参数，可以省略model.addAttribute("user", user)方法。
#### 重定向与转发
重定向是将用户从当前处理的请求定向到另一个视图或处理请求，在上一个请求存放的信息将会全部失效。（客户端行为）
转发是将用户从当前处理的请求定向到另一个视图或处理请求，但是在上一个请求存放的信息不会失效。（服务器行为）
在SpringMVC框架中，控制器类的处理方法**return默认就是转发实现**。
```java
@Controller
@RequestMapping("/index")
public class IndexController {
    @RequestMapping("/login")
    public String login(){
        // 转发到一个请求方法（同一个控制器中，可省略/index/）
        return "forward:/index/isLogin";
    }
    
    @RequestMapping("isLogin")
    public String isLogin( ){
        // 重定向到一个请求方法
        return "redirect:/index/isRegister";
    }
    
    @RequestMapping("/isRegister")
    public String isRegister(){
        // 转发到一个视图
        return "register";
    }
}
```
在MVC框架中 都需要符合视图解析器的配置，若不需要DispatcherServlet的资源，则需要配置一下文件
在MVC配置文件 需要mvc:resources配置
```xml
<mvc:resources location="/html/" mapping = "/html/**"></mvc:resources>
```
若是在配置类中，需要实现WebNvcConfigurer接口的**addResourcesHandlers(ResourcesHandlerRegistry registry)**方法，具体代码如下
```java
@Override
public void addResourcesHandlers(ResourcesHandlerRegistry registry) {
  registry.addResourceHandler("/html/**").addResourceLocations("/html/");
}
```

### 应用@Autowired进行依赖注入