
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
