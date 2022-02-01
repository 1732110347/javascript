
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

4.18  (9)(10)(11)(12)
      多行注释shift alt a
     常用的输出语句
     prompt('xxx')浏览器弹出输入框，用户可输入
     alert（）浏览器弹出警示框
     console.log（）浏览器控制台打印输出信息（log日志）
     变量的本质是程序在内存中申请的一块用来存放数据的空间
     变量名对应变量

4.19  (13)声明变量  var age;声明一个名称为age的变量
     var是一个js关键字,来声明变量(variable变量的意思)
     age是变量名，访问内存分配的空间 赋值age=xx;
     console.log(age);
      var age=18;
     声明变量并赋值，我们称为变量的初始化

4.20  (14)(15)var myname=prompt ('名字')存储变量
     
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
     String单引号或双引号最好单 可以嵌套外双内单 外单内双
     字符串也有特殊字符，转义字符
     \n换行符，n是newline的意思
     \\斜杠\
     \'单引号
     \"双引号    '
     \t tab缩进
     \b空格，b是blank的意思

 4.27  (25)(26) 字符串型String 字符串长度。通过length可以获取整个字符串的长度。alert(xxx.length);
      字符串的拼接 字符串+(字符串)(数字)第一个是字符串那么整个就是字符串类型
      数值相加字符相连

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

4.29 (29)boolean以及undefin和null
      true=1 false=0
      如果一个变量未定义，那就是undefined类型
      Undefined和数字相加为NAN
      undefin和字符串为正常
      null和数字为数字
      null和字符为正常

5.1(30)typeof检测变量数据类型
       console.log(typeof xxx)
       数字number 字符string  true boolean  undefined undefined   null object 
      (31)字面量
      蓝色数字型
      黑色字符型
      浅蓝色布尔型
      浅灰色 undefined和null

       (32)转换数字类型
       转为字符串
       toString()  xx=xx.toString()
       String  String(xx)
       加号拼接 xx加字符串
       数字型
       布尔

5.2    (33)转换为数字型parselnt和parseFloat
        parselnt(string) 只取整 单位全去 非数字的去掉
        parseFloat(string) 得到小数 浮点数 整数

        (34)转换为数字类型Number和隐式转换
        Number(string)
        隐式转换
        xx-xx字符转数字
        '2'-0
        '2'-'1'
        xx*xx
        xx/xx


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
      + - * / %
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

5.31   (106)筛选数组方法1
        var a = [2,3,4,1,5,7];
       var max = [];
       var j=0;
       for (var i =0;i<a.length;i++){
             if(a[i]>3){
                   max[j] = a[i];
             j++
             }
       }
       console.log(max);

       筛选数组方法2
        var a = [2,3,4,1,5,7];
       var max = [];
       var j=0;
       for (var i =0;i<a.length;i++){
             if(a[i]>3=){
                   max[max.length] = a[i];        
             }
       }
       console.log(max);

6.1  (108)删除数组指定元素
       var a=[1,2,3,4,1,5,5];
       var b=[];
       for(var i =0;i<a.length;i++){
             if(a[i] !=1){
                   b[b.length] =a[i];
             }
       }

       (109)翻转数组
        var a=[1,2,3,4,1,5,5];
       var b=[];
       for(var i =a.length-1;i>=0;i--){
                   b[b.length] =a[i];
            
       }

6.2   (110)复习交换两个变量值
       var num1 = 1;
       var num2 = 2;
       var temp;
       temp = num1;
       num1 = num2;
       num2 = temp;
       console.log(num1,num2);

       (111)冒泡排序
       var a=[2,1,4,3];
       for (var i=0;i<=a.length-1;i++){外层循环管趟数
             for(var j=0;j<=a.length-i-1;j++){里面循环管 每一趟的交换次数
             内部交换2个变量的值 前一个和后面一个数组元素相比较
       if(a[j]>a[j+1]){
       var b=a[j];
       a[j]=a[j+1];
       a[j+1]=b;
        }
             }
       }

6.3   (113)函数   封装一段可以被重复执行调用的代码快 
       function geiSum(num1,num2){
             var sum =0;
             for(var i = num1;i<=num2;i++){
                   sum+=i;
             }
             console.log(sum);
       }
       getSum(1,100);

       (115)函数使用
        function 声明的关键字 全部小写
        函数是做某件事，函数名一般是动词sayHi
        函数不调用自己不执行

        声明函数  function 函数名(){函数代码}
        function sayHi(){
              console.log('xx');
        }
        2调用函数
        函数名()；
        sayHi();
        调用函数的时候要加小括号

1.8   (117)函数的参数
      function (形参)声明
      (实参)调用

      (119)函数形参和实参匹配问题
      实参多于形参不取多的
      少于NaN

      (120)函数的返回值return
      function gitResult(){
            return 123;
      }
      console.log(gitResult());

      (123)return终止函数并且只能返回一个值
      return 后面的不会执行
      一次只能返回一个值 多个返回最后一个
      用数组返回可以返回多个

      (124)函数返回值2个注意事项
      函数没有return则返回undefined

      (126)arguments的使用
      function getMax(){
            var max=arguments[0];
      }
      里面存储所有传进来的实参
      每个函数都有内置
      伪数组
      1具有length属性
      2按照索引号存储
      3没有真正数组的一些方法 pop( ) push()

      (131)函数调用另一个函数
      function fn1(){
            fn2();
      }

      (133)函数的两种声明方式
      1命名函数
      2函数表达式 匿名函数
      var 变量名 =function(){}
      变量名()
      是变量名不是函数名
      也可以进行传参

      (135)作用域
      在某个范围内起作用 减少命名冲突 提高程序的可靠性
      全局作用域 整个scri标签或者是一个js文件
      局部作用域 在函数内部 只在函数内部起作用

      (136)全局变量和局部变量
      全局变量所有地方可以用
      在函数内部没有声明直接赋值的也属于全局变量

      局部变量只能在函数内部使用
      函数形参也可以看做局部

      全局变量只有浏览器关闭才会销毁 比较占资源
      局部变量 程序结束就结束

      (137)没有块级作用域
      es6新加块级
      块级{}
      块级写变量可以调用

      (138)作用域链
      内部函数可以访问外部函数变量
      查找最靠近一级

      (141)预解析
      console.log(num);
      var num =10;  undefined

      fun(); 报错
      var fun=function(){console.log(22);}

      js引擎运行js分两步 预解析  代码执行
      预解析 把所有var还有function提到当前作用域的最前面
      代码执行 按照代码书写顺序从上往下

      预解析 
      1变量提升 把所有变量声明提升到当前作用域最前面 不提升赋值操作
      2函数提升 把所有函数声明提升到当前作用域前面 不调用函数

1.9   (144)什么是对象以及为什么需要
      对象是由属性和方法组成
      属性是事物的特征
      方法事物的行为
      (145)利用对象字面量创建对象
      一个属性对应一个属性值
      各个属性用逗号隔开
      方法冒号后面跟的是一个匿名函数

      var obj={
            uname:'zsf',
            age:18,
            sex:'nan',
            sayHi:function(){
                  console.log('hi');
            }
      }
      使用对象的属性 用对象.属性名  obj.age
      对象名['属性名'] obj['age']
      调用方法 对象名.方法名()
      obj.sayHi();

      (146)变量属性函数方法的区别
      变量 单独声明 使用直接写变量名 单独存在
      属性 在对象里不需要声明 使用必须对象.属性
      函数 单独存在 通过函数名()就可以调用
      方法对象.方法名()调用

      (147)利用new Object创建对象
      等号赋值的方法
      分号结束
      new obj =new Object();
      obj.name='zsf';
      obj.sayHi = function(){}

      (149)构造函数对象
      function Star(uname,age,sex){
            this.name=uname;
            this.sing=function(s){ }
      }
       var ldh= new Star('dasas',18,'nan');
      构造函数首字母大写
      构造函数不需要return 

      (151)构造函数和对象区别
      构造函数是一个大类
      对象是一个具体的事物
      构造函数创建对象为实例化

      (152)new关键字执行过程
      1new构造函数可以在内存中创建了一个空对象
      2this就会指向新创建的空对象
      3执行构造函数里面的代码 给这个空对象添加属性和方法
      4返回这个对象N

      (153)遍历对象属性
      for(变量 in 对象){k变量属性输出的是属性名 对象[k]输出属性值}
      for(var k in obj){console.log(k); console.log(obj[k])}
      
      (156)内置对象
      自定义对象 内置对象 浏览器对象
      内置对象 自带的方法

      (157)查阅MDN文档

      (158)数组对象Math最大值方法
      Math.max()
      
      (160)Math绝对值和三个取值方法
      Math.PI 圆周率
      Math.floor() 向下取整
      Math.celil()向上取整
      Math.round()四舍五入 -.5是往大取
      Math.abs() 绝对值
      Math.max()最大
      Math.min()最小

      (161)Math随机数方法
      Math.random()返回一个随机的小数
      得到一个两数之间的随机整数 包括两个数在内
      function getRandomIntInclusive(min,max){
            min=Math.ceil(min);
            max=Math.floor(max);
            return Math.floor(Math.random()*(max-min+1))+min;
      }

      (163)Date日期对象的使用
      构造函数必须用new来创建日期对象
      var date=new DATE();
      数字型 2020,10,1 字符型'2020-2-2 2:2:2' '2020/1/1'

      (164)格式化日期年月日星期
      getFullYear() 获取年
      getMonth()    获取月(0-11) 返回的月少一个月
      getDate()     获取日期
      getDay()      获取星期几(周日0 到周六6)
      getHour()     获取当前小时
      getMinutes()  获取当前分钟
      getSeconds()  获取当前秒

      (166)Date总的毫秒数
      从1970年开始 date.valueOf()
      date.getTime
      var date1=+new Date();
      Date.now()

      (167)倒计时
      d=parseInt(总秒数/60/60/24);天数
      h=parseInt(总秒数/60/60%24);小时
      m=parseInt(总秒数/60%60);分
      s=parseInt(总秒数%60);秒
      function countDown(time){
            var nowTime = +new Date();
            var inputTime=+new Date(time);
            var times=(inputTime-nowTime)/1000;
      d=parseInt(times/60/60/24);天数
      h=parseInt(总秒数/60/60%24);小时
      m=parseInt(总秒数/60%60);分
      s=parseInt(总秒数%60);秒
      return d+h+m+s;
      }

      (169)数组创建的两种方式
      数组字面量
      var arr=[1.2]

      new Array()
      var arr=new Array()创建了一个空数组
      var arr=new Array(2)创建了长度为2空数组
      var arr=new Array(2,3)创建了[2,3]数组

      (170)检测是否为数组两种方式
      instanceof
      console.log(arr instanceof Arrayy)

      Array.isArray(参数)

      (171)添加数组元素
      push()在数组末尾添加一个或多个数组元素
      arr.push(xx);
      返回数组长度
      参数直接写数组元素

      unshift()在开头添加数组

      (172)删除数组元素
      pop()删除数组最后一个元素
      返回被删的元素

      shift()删除第一个

      (174)数组排序
      翻转数组 arr.reverse();

      冒泡排序 arr.sort();
      arr.sort(function(a,b){
            return a-b;升序
            return b-a;降序
      })

      (175)获取数组元素索引
      arr.indexOf()返回该数组元素的索引号
      只返回第一个满足的
      -1表示没有该元素

      lastIndexOf()从后面的

      (176)数组去重案例
      放入新数组看有没有相同的
      function unique(arr){
            var newArr=[];
            for(var i=0;i<arr.length;i++){
                if(newArr.indexOf(arr[i])===-1){
                      newArr.push(arr[i]);
                }
            }
            return newArr;
      }

      (177)数组转换为字符串
      arr.toString()
      toString()将数组转换为字符串

      join('分隔符')

      concat()连接两个或多个数组 不影响原数组 返回应该新的数组
      slice()数组截取slice(begin,end) 返回被截取项目的新数组
      splice() 数组删除splice(第几个开始，要删除个数) 返回被删除项目的新数组，这个会影响原数组

      (178)基本包装类型
      把简单数据类型包装为复杂数据类型
      var str='aread'
      var temp=new String('aread')
      把临时变量的值给str
      str=temp
      销毁临时变量
      temp=null

      (179)字符串不可变
      值是不可变的只是指向新空间

      (180)根据字符返回位置
      indexOf('查找字符',起始位置)
 
      (182)根据位置返回字符
      返回数字位置的字符
      arr.charAt(数字)

      charCodeAt()返回索引号的字符ASCII值

      arr[数字]

      (183)统计出现次数最多的字符
              var str='adsd';
        var o={};
        for(var i=0;i<1;i++){
            var chars=str.charAt(i);
            if (o[chars]) {//o[chars]得到属性值         
                o[chars]++;
            }
            else{
                o[chars]=1
            }
        }     
        console.log(o);
        
      (185)拼接以及截取字符串
      concat(str1,str2...)  拼接字符串相当于+ +
      substr(start,length)  从start开始 取length的个数
      slice(start,end)      从start开始 截取到end位置 end取不到
      substring(start,end)  从start开始，截取到end位置，end取不到 基本和slice一样但是不接受负值

      .concat('asd')

      (186)替换字符串以及转换为数组
      replace('被替换的字符'，'替换为的字符') 只替换第一个
      split('分隔符')将字符转换为数组
      str='red,pink,ads'

      toUpperCase() 转换为大写
      toLowerCase() 转换为小写

      (188)数据类型内存分配
      值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身   string number boolean undefined null(返回的是一个空的对象)
      引用类型：复杂数据类型，在存储变量中存储的仅仅是地址
      通过new关键字创建的对象(系统对象、自定义对象)如Object、Array、Date

      栈(操作系统):由操作系统自动分配释放存放函数的参数值、局部变量的值。
      简单数据类型存放到栈里面
      堆(操作系统):存储复杂类型，又程序员分配释放，若程序员不释放，由垃圾回收机制回收
      复杂数据类型存放到堆里面
      简单数据类型 是存放在栈里面 里面直接1开辟一个空间存放的是值
      复杂数据类型 首先在栈里面存放地址 16进制表示 然后这个地址指向堆里面数据

      (189)简单数据类型传参
      把值作为参数传给函数的形参时，是把变量在栈空间里的值复制一份给形参，方法内部对形参做任何修改，都不会影响到外部变量

      (190)复杂数据类型传参
      函数的形参可以看做是一个变量，当我们应该把引用类型变量传给形参时，
      就是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实是保存的是同一个堆地址，操作的是同一个对象








































