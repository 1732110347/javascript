
4.14（1）前端验证：检查输入的内容是否符合规则 js标准是ECMAScriot
JavaScriot 由ECMAScriot（标准）  DOM（文档对象模型，给予对象可操作网页）  BOM（给予对象可操作浏览器） 构成
特点 解释型语言（不用编译直接运行） 类似与C和Java的语法结构   动态语言    基于原型的面向对象 

4.15（2）计算机语言是人与计算机传递信息的媒介，有三种
   1机器语言  最终计算机都是执行机器语言 由0,1组成的二进制数，为计算机语言的基础。
   2汇编语言  通过类似于人类语言来控制计算机的一系列指令，它有固定的格式和词汇（不同的编程语言和词汇不一样）必须遵守 和机器语言都是直接对硬件操作，但指令采用英文缩写的标识符
   3高级语言  不是特指具体的某一语言而是包括很多，常用有C++,Java,Python,PHP,JavaScipt,GO,Objective-C,Swift
   编译器可以将源代码编译成机器语言
   编程语言有很强的逻辑和行为能力。这是主动的
   标记语言不用于向计算机发出指令，常用于格式化和链接，被用来读取，它是被动的。

4.16 (3)(4)(5) 是一种运行在客户端的脚本语言 不需要编译，运行过程由js解释器（js引擎）进行解释并执行。  目前可以基于Node.js技术进行服务器端编程（后台）
    脚本语言是读一行就进行翻译
    表单动态校验（密码强度检测） 网页特效  服务端开发（Node.js）  桌面程序（Electron)  App(Cordova)  控制硬件-物联网（Ruff） 游戏开发（cocos2d-js)
   
4.17 (6)(7)(8)浏览器分为两部分
    1渲染引擎：用来解析HTML与CSS，俗称内核。
    2JS引擎：用来读取网页中的JavaScriot代码，对其处理后运行。
    （7）浏览器本生不会执行JS代码，而是通过内置JavaScript来执行。JS引擎执行代码时逐行解释每一句源码（转换成机器语言），然后由计算机执行，所以为脚本语言，逐行解释执行。
    js由语法ECMAScript和DOM（页面文档对象模型）和BOM（浏览器对象模型）组成
    DOM是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过DOM提供的接口可以对页面各种元素进行操作（大小，位置，颜色）
    BOM提供独立于内容，可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框，浏览器跳转，获取分辨率。
    （8）三种书写位置，行内，内嵌和外部
    行内直接写到body <input type="button"value="点我试试"onclick="alert('ss')">
    内嵌在head <script>alert('xx');</script>
    外部在外面建xx.js <script src="xx.js"></script>中间不能写代码

4.18  (9)(10)(11)(12)常用的输出语句
     prompt(xxx)浏览器弹出输入框，用户可输入
     alert（）浏览器弹出警示框
     console.log（）浏览器控制台打印输出信息（log日志）
     变量的本质是程序在内存中申请的一块用来存放数据的空间
     变量名对应变量

4.19  (13)声明变量  var age;声明一个名称为age的变量
     var是一个js关键字,来声明变量(variable变量的意思)
     age是变量名，访问内存分配的空间 赋值age=xx;
     console.log(age);

     声明变量并赋值，我们称为变量的初始化

4.20  (14)(15)var myname=prompt ('名字')
     
4.21  (16)var age=1,
     ada=23;只var一次
     只声明不赋值结果为undefined
     不声明不赋值会报错
     不声明直接赋值可以运行但是变全局变量

4.22 (17)变量命名规范
    由字母，数字，下划线_，美元符号组成
    严格区分大小写
    不能以数字开头
    不能是关键字
    变量名必须有意义
    遵循驼峰命名法，首字母小写，后面的字母大写
    
4.23 (18)(19)临时变量  var a,b,c;
      a=1,b=2;
      c=a,a=b,b=c;console.log(a,b);

4.24  (20)(21)js是一种弱类型或动态语言。
     js的变量数据类型是只有程序在运行，根据等号右边的值来确定

4.25  （22）数据类型分为
      简单数据类型(Number,String,Boolean,Undefined,Null)
      Number 八进制前加0,十六前加0x
      Number.MAX_VALUE最大值 Infinity无穷大
      Number.MIN_VALUE最小值 -Infinity无穷小
      NAN，not a number代表一个非数字

      复杂数据类型(object)

4.26   (23)(24)
     isNaN()这个方法用来判断非数字，并且返回一个值，如果是数字返回的是flase如果不是数字返回ture
     String单引号或双引号最好单 可以嵌套外双内单 内单外双
     字符串也有特殊字符，转义字符
     \n换行符，n是newline的意思
     \\斜杠\
     \'单引号
     \"双引号
     \t tab缩进
     \b空格，b是blank的意思

 4.27  (25)(26) 字符串型String 字符串长度。通过length可以获取整个字符串的长度。alert(xxx.length);
      字符串的拼接 字符串+(字符串)(数字)第一个是字符串那么整个就是字符串类型

4.28 (27)(28)交互编程的三个要素:
      1.用户输入 
      弹出一个输入框（prompt),让用户输入
      2.程序内部处理
      把用户输入的值用变量保存起来，把刚输出与要输出的字符串拼接
      3.输出结果
      使用alert语句弹出警示框
      var age=prompt('年龄')；
      var str='已经'+age;
      alert(str);

4.29 (29)
      如果一个变量未定义，那就是undefined类型
      Undefined和数字相加为NAN
      undefin和字符串为正常
      null和数字为数字
      null和字符为正常

5.1(30)typeof检测变量数据类型
       console.log(typeof xxx)
       数字number 字符string  true boolean  undefined undefined   null object 

       (32)转换数字类型
       转为字符串
       toString()  xx=xx.toString()
       String  String(xx)
       加号拼接 xx加字符串
       数字型
       布尔

5.2    (33)转换为数字型parselnt和parseFloat
        parselnt(string) 只取整 单位全去
        parseFloat(string) 得到小数 浮点数 整数

        (34)转换为数字类型Number和隐式转换
        Number(string)
        xx-xx字符转数字
        xx*xx

5.3     (35)计算年龄案例     
        var year=prompt('输入')
        var age=2018-year;
        alert(age)

5.4     (36)简单加法案例
         var num1=prompt();
         var num2=prompt();
         var result=parseFlota(num1)+parseFloat(num2);
         alert(result);

         (37)转布尔
         Boolean()
         代表空，否定的值会被转换为false ('' 0 NaN null undefined)

5.5     (38)解释型语言和编译型语言  
      js解释     
      java编译

      (39)拓展阅读之标识符关键字保留字

5.6  (42)算数运算符
      避免使用浮点数进行运算

      (43)表达式和返回值
      由数字，运算符，变量等组成的式子为表达式

5.7   (44)前置递增运算符      
       ++age  类似age=age+1 先自加再返回

       (45)后置
      age++ 先返回原值后自增 

5.8   (48)比较运算符  
      < > >= <= ==会自动转换数据类型把字符转换数字 !=不等于  ===全等 要求两边一模一样 
      (49)逻辑运算符 布尔运算符
      &&逻辑与  
      ||逻辑或  
      !逻辑非

5.9  (51)短路运算(逻辑中断)
       逻辑与短路运算
       xx&&xx 如果表达式1为真返回表达式2 为假即为0则返回表达式1 ('' 0 NaN null undefined)
       
       (52)逻辑或短路运算
       xx||xx 表达式1为真返回1，为假返回2
       如果运行输出则后面的不执行
       console.log(1||num++)num结果为0不会自增

5.10   (53)赋值运算符
        += -= *=  /= %= 

        (54)运算优先符
        1 ()
        2 一元 ++  --！
        3算数 先*/& 后+-
        4关系 < <= > >=
        5相等 ==  != ===  !==
        6逻辑 先&&  后||
        7赋值  =
        8逗号 ,      

5.11   (56)流程控制
       顺序流程控制 按顺序

       (57)分之流程
       分之 根据不同的条件，执行不同路径代码
       if(条件表达式){执行语句}
       else 为否定时

5.12    (61)多分之语句
        if(){}
        else if(){}
        else{}

5.13    (62)三元表达式
        如果条件表达式结果为真 则返回1如果为假则返回2
        var result =xx>xx ?xx:xx;
        
5.14   (65)switch  利用表达式的值和case后面的选项值相匹配 匹配上就执行case 没有就执行default里的
        switch(表达式){
              case xxxx:
              执行语句;
              break;
              default:
              执行最后语句;
        }
        (66)要求数字类型相同
        break 退出循环 

5.15  (68)switch和if区别
       固定值用switch 范围用 if
       switch 效率更高 
       分支比较少用if效率高
       较多用switch 结构更清晰

5.16  (71 )for 重复执行某些代码 通常跟计数有关系
       for(初始化变量；条件表达式；操作表达式){
             循环体
       }       
       初始化变量 就是用var 声明一个普通变量，通常用于作为计数器使用
       条件表达式 用来决定每一件循环是否继续执行 就是终止条件
       操作表达式 每次循环后执行的代码 经常用于我们计数器进行更新(递增或递减)

5.17  (73)断点调试
       Sources f11 watch       

5.18  (81) 
       for(var i=1;i<=5;i++){
             console.log('a');
       }
       var str='';
       for(var i=1;i<=5;i++){
             str=str+'a';
       }
       console.log(str);

5.19  (84)for双循环 外控制行 内控制列
       var str='';
       for(var i=1;i<=10;i++){
             for(var j=i;j<=10;j++){
                   str+='a';
             }
             str+='\n';
       }
       console.log(str);

5.20  (85)9x9表
        var str='';
       for(var i=1;i<=9;i++){
             for(var j=i;j<=10;j++){
                   str+=j+'x'+i+'='+i*j+'\t';
             }
             str+='\n';
       }
       console.log(str);

5.21  (87)while
       while(条件表达式){
             //循环体
       }
       当为true执行否则退出

5.22  (89)do while
       do{
             循环体
       }while(条件表达式)
       do while先执行一次循环体 在判断条件 如果条件表达式为真，则循环继续执行，否则退出

       (90)do{
             var message=prompt('a');     
       }while(message !=='a')
       alert('sa');

5.23   (91)while 和do while可以做更复杂的判断条件，比for循环更灵活    
        while先判断后执行  do while先执行一次后循环

5.24  (92)continue break
       只要遇到continue就跳过本次循环到下一个
       break退出整个循环

5.25   (97)创建数组
        var 数组名 =new Array () ;     

        var 数组名 =[];          

5.26   (99)遍历数组
        var a = ['a','s','d'];
        for(var i=0;i<=a.length;i++){
              console.log(a[i]);
        }

5.27  (101)计算机数组和及平均值
       var a = [1,2,3];
       var sum=0;
       for(var i =0;i<a.length;i++){
             sum+=a[i];
       }
       console.log(sum);

5.28 (102)求最大值
       var a = [2,3,4,1,5,7];
       var max = a[0];
       for (var i =1;i<a.length;i++){
             if(a[i]>max){
                   max = a[i];
             }
       }
       console.log(max);

5.29  (103)数组转换字符串

5.30  (104)数组新增元素
       一 修改length长度
       var a=["1"];
       a.length=3;
       console.log(a)

       二修改索引号，追加数组元素
       var b=['2','4'];
       b[3]='3';
       console.log(b)
       直接给数组名赋值会覆盖

5.31   (106)














































