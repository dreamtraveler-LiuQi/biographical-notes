var config = {
    /*在这里配置你的基本信息，所有数据以字符串形式给出*/
    name: "刘琦",
    sex: "男",
    age: "27",
    phone: "19354357035",
    email: "LiuQi99512@aliyun.com",
    address: "现居河北省保定市",
    qq: "wxid_u1vagyzv71pg22",
    log: "Fantasy",
    excpect_work: "前端开发工程师",


    /*在这里配置首页的座右铭集合*/
    motto: [
        "明天不一定会更好，但要坚信更好的明天一定会来。",
        "要做的事情总找得出时间和机会，不愿意做的事情也总能找得出借口。",
        "Gor For It!",
        "有智者立长志，无志者长立志。",
        "那些过去的眼泪终将风干在记忆里。",
        "真相，是为了剿灭幻想。",
        "我欲将心向明月，奈何明月照沟渠。",
        "春风得意马蹄疾，一日看尽长安花。",
        "天凉好个秋！",
        "老骥伏枥，志在千里。烈士暮年，壮心不已。",
        "老当益壮，宁移白首之心。穷且益坚，不坠青云之志。",
        "我们必须拿我们所有的， 去换我们所没有的",
        "蒹葭苍苍，白露为霜；所谓伊人，在水一方。",
        "数风流人物，还看今朝！"
    ],


    /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
    welcome: "青青子衿，悠悠我心<br>" +
        "但为君故，沉吟至今<br>" +
        "你好，我是刘琦，一名前互联网兴趣爱好者<br>" +
        "很高兴见到你!",


    /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
    about: "<p>你好！我叫刘琦，性别男，一名前互联网兴趣爱好者。我期望的工作岗位是前端开发。</p>" +
        "<p>我有着较多的编程经验，计算机基础知识掌握扎实，能够在工作中很好的完成自己的任务。此外，我有着充满激情的工作态度，团队协同作战能力强，同时我也具备独立开发的能力，擅于发现并解决问题。我的执行力强、责任感高、集体荣誉感强、敢于担当，能够接受加班等安排</p>" +
        "<p>十分期待与您的联系!</p>",



    /** 
     * 在这里配置你的技能点
     * ["技能点", 掌握程度, "技能条颜色"]
     */
    skills: [
        ["javascript", 80, "red"],
        ["typescript", 77, "blue"],
        ["vue.js", 75, "#1abc9c"],
        ["HTML5", 67, "rgba(0,0,0)"],
        ["CSS3", 60, "yellow"],
        ["react.js", 70, "pink"]
    ],


    /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
    skills_description: "<ul>" +
        "     <li>操作系统、计算机网络等编程基础知识良好。</li>" +
        "     <li>熟练掌握javascript基础。</li>" +
        "     <li>熟悉vue.js, react.js等基础框架。</li>" +
        "     <li>了解mvvm原理。</li>" +
        "     <li>熟悉小程序开发知识。</li>" +
        "     <li>熟悉react-native ，能够通过 react-native+android-studio 实现 App 的开发。</li>" +
        "     <li>熟悉基本Linux命令操作。</li>" +
        "     <li>熟悉ajax 技术，能够很好的配合后端工程师完成数据请求、渲染等。</li>" +
        "     <li>熟悉 webpack（打包工具）、gulp（构建工具）、babel（编译工具）等工具的使用。</li>" +
        "     <li>了解 Node.js 开发，能够使用 nodejs 和 express 实现服务器端功能。</li>" +
        "     <li>熟悉 egg、mock 等模拟数据工具，并操作 json 数据与前端页面进行对接。</li>" +
        " </ul>",


    /**
     * 这里填写你的个人作品展示
     * ["img"，"url", "ProjectName", "brief"]
     * img表示您的作品图片链接，url表示您的项目地址，ProjectName表示您的仓库或作品名称，brief是一句简短的介绍
     * 通过查看实际效果以调整字题长度
     */
    portfolio: [
        ["./images/pro-1.png", "https://dreamtraveler-liuqi.github.io/liuqi_blogs/", "个人博客", "这里记录了我的前端学习笔记<br>持续更新"],
        ["./images/pro-2.png", "https://gitee.com/home_liuqi/mrliublog", "面向个人的开源的集成文章发表、页面创建、知识小册等功能的CMS系统。", "next.js：前端页面框架 + nest.js：服务端框架"],
        ["./images/screenshot-3.png", "https://gitee.com/home_liuqi/live2d-widget", "es6写的卡通萌妹子(修复版)", "es6+html5"]
    ],


    /**
     * 这里填写您的工作经历
     * ["日期"， "工作"， "介绍"]
     * 你可以内嵌HTML标签以排版格式
     */
    work: [
        //如果您内有工作经历，您可以采取下列写法
        // ["————————", "", "<p>暂无工作经历，期待您的联系。</p>"]

        ["2020 — 至今", "<br>河 北 浪 潮 信 息 技 术 有 限 公 司",
            "<p><strong>IDC研发部</strong></p>" +
            "<p>负责符合 W3C 标准、多浏览器兼容、语义化的 Web 前端网页产品功能的开发，调试和维护,实现一流的用户交互 WEB/WebApp 界面。</p>" +
            "<p>运用 vue.js、uniapp 实现应用，webpack 构建工具打包、压缩代码，并使用 git 进行代码版本管理。</p>" +
            "<p>项目中会用到 webpack 的依赖模块理和打包。</p>" +
            "<p>通过 Ajax + Jsonp 与后台数据进行交互，与后端工作有效对接，优化网站前端性。</p>" +
            "<p>运用 Layui、iView、Ant Design、Element-ui 等前端 ui 框架，提高团队开发效率。</p>" +
            "<p>团队讨论具体功能的细节问题，与其他技术人员沟通并制定设计规范。</p>" +
            "<p>维护后台管理系统功能</p>"
        ],
        ["2019 — 2020", "<br>临 云 军 视 网 络 科 技 有 限 公 司",
            "<p><strong>WEB研发部</strong></p>" +
            "<p>利用 javascript 和 jQuery、bootstrap、vue.js 实现页面的动态效果。</p>" +
            "<p>对之前的管理后台及官网项目进行维护更新。</p>" +
            "<p>前端业务的工程化、流程化、模板化，提高前端开发效率。</p>" +
            "<p>持续的优化前端体验和页面响应速度，并保证兼容性和执行效率。</p>" +
            "<p>后期项目版本更新迭代，维护以及 bug 修复，优化用户体验。</p>"
        ],
        ["2017 — 2019", "<br>北 京 慕 华 信 息 科 技 有 限 公 司",
            "<p><strong>IDC研发部</strong></p>" +
            "<p>与产品经理沟通，充分理解产品的每个需求，做好每一个细节。</p>" +
            "<p>使用 javascript.js、jQuery.js、vue.js 等技术开发 webApp。</p>" +
            "<p>使用 HTML、Css、Bootstrap 编写页面，通过优雅降级，处理各种浏览器兼容性问题。</p>" +
            "<p>使用了 bootstrap、media 查询实现 PC 页面和移动端的适配。</p>" +
            "<p>与设计团队、后端开发团队紧密配合，确保软件实施、优化网站前端性能。</p>" +
            "<p>配合测试人员，解决所测试到的 bug 保证产品给用户最好的体验。</p>" +
            "<p>根据产品需求对公司项目进行开发，并不断维护。</p>"
        ]
    ],


    /**
     * 这里填写你的其他经历
     * ["日期"， "经历"， "介绍"]
     * 建议填写您的校级及以上得奖经历或或其他证书
     */
    others: [
        ["2022-01", "移动数字政府一网通管", "主要面向社区人员以及党员。为管理员提供了人员管理，权限管理，普通户用则可以发布信息以及上传文件，浏览发布的新政策并作出评价，在党员选举期间可以在指定的区域、指定的时间内发起选举投票。使用 uni-app 前端框架作为底层脚手架进行开发，引用 iView 移动端 ui 库实现前端的页面交互效果及动画效果"],
        ["2021-09", "数字政府", "为政府人员提供了便捷的数据统计，简洁明了的看到人员信息及团队信息，还可以对数据进行更改，做到可视化实时更新。vuejs、Ant Design、Echart 框架的数据大屏项目"],
        ["2021-02", "学堂在线", "主要为成人或在职人员提供在线课程教育，并有专业的导师不定时在线直播。而且还有客服提供在线咨询服务。技术栈：vue.js2.0、ant-design-vue、webpack"],
        ["2020-10", "课堂周边", "以市场和数据为导向，向在职人员以及有需求的人员提供在线的教育，以及实时的课程推送。技术栈：reactjs、webpack、ant-design。"]
    ],


    /**
     * 在这里填写您的社交网络平台
     * ["img", "url", "desc"]
     * img是社交平台的图标，在./svg目录下我们已经准备好了 微博、简书、掘金、小红书、知乎、csdn、facebook、github、力扣、CF和qq的图标
     * url是您链接
     * desc是一段描述，将鼠标移入将会显示该描述
     * 建议您放置数量 <= 5
     */
    icon: [
        // ["./svg/LeetCode.svg", "https://dreamtraveler-liuqi.github.io/liuqi_blogs/", "我的QQ"],
        ["./svg/github.svg", "https://gitee.com/home_liuqi", "我的GitHub主页"],
        ["./svg/博客.svg", "https://dreamtraveler-liuqi.github.io/liuqi_blogs/", "我的个人博客"],
        // ["./svg/掘金.svg", "https://juejin.cn/user/3853167638625000", "我的掘金主页"],
        // ["./svg/知乎.svg", "wxid_u1vagyzv71pg22", "我的微信号"]
    ],


    //这是一些图片链接，建议您仅更改第二个头像图片
    url: [
        //背景图、头像、作品展示背景、其他经历背景
        "./images/intro-bg.jpg",
        "./images/2.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]

}