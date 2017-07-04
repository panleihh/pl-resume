
var Skills = React.createClass({
    render:function(){
        return(
            <div className="skill">
                <h2>Skills & Education</h2>
                <div className="skill-content">
                    <div className="skill-right">
                        <div className="right-list">
                            <p>☑ html/css: 能够编写语义化html，模块化css，能够使用flexbox实现比较复杂的布局</p>
                            <p>☑ html5/css3: 了解html5和css3的新特性，使用CSS3实现复杂的动画</p>
                            <p>☑ javascript: 熟练使用JavaScript，且能在项目中使用</p>
                            <p>☑ jquery: 熟练使用jQuery操作文档对象、选择DOM元素、事件处理等</p>
                            <p>☑ bootstrap: 能够使用bootstrap快速开发响应式页面</p>
                            <p>☑ react: 了解其组件式开发的基本思想，并能构建单页Web应用</p>
                            <p>☑ 构建工具：能够使用Gulp进行前端工程的构建</p>
                            <p>☑ 预编译语言: 能够使用Less和Scss高效编写CSS</p>
                            <p>☑ 数据库: 熟悉数据库的基本操作，并能借助navicat有效管理数据库</p>
                            <p>☑ 后端框架： 熟悉使用php的laravel框架，了解php基本用法</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var RightInfo = React.createClass({
    render:function(){
        return(
            <div className="rightInfo">
                <ul>
                    <li>
                        <h3>Name</h3>
                        <p>潘蕾</p>
                    </li>
                    <li>
                        <h3>Address</h3>
                        <p>籍贯：湖南岳阳</p>
                        <p>现居：上海浦东新区</p>
                    </li>
                    <li>
                        <h3>Contact</h3>
                        <p>手机: 15197228706</p>
                        <p>微信: pl6542580</p>
                    </li>
                    <li>
                        <h3>Link</h3>
                        <p>Github: github.com/panleihh</p>
                        <p>E-mail: 941399127@qq.com</p>
                    </li>
                    <li>
                        <h3>Honors</h3>
                        <p>优秀学生奖 <small> 2014-2015学年</small></p>
                        <p>优秀干部奖 <small> 2015-2016学年</small></p>
                    </li>
                    <li>
                        <h3>Job</h3>
                        <p>班长 <small> 2014-2015学年</small></p>
                        <p>助理班主任 <small> 2015-2016学年</small></p>
                    </li>
                </ul>
            </div>
        )
    }
});
var LeftInfo = React.createClass({
   render:function(){
       return(
           <div className="leftInfo">
               <section className="summery">
                   <h2>Basic-information</h2>
                   <p>意向职位：前端工程师</p>
                   <p>教育：湖南科技大学 | 本科 | 物联网工程 | 2017年6月毕业</p>
                   <p>专业技能：HTML | CSS | javaScript | jQuery | React | gulp | SVN</p>
                   <p>语言技能：CET6</p>
               </section>
               <section className="experience">
                   <div className="part">
                       <div className="hr"></div>
                       <h2> Experience</h2>
                   </div>
                   <div className="project">
                       <h4>上海润欣科技股份有限公司(2016.08-2017.04)</h4>
                       <div className="project-profile">
                           <p>☆ 负责电子元器件垂直搜索平台项目的前端开发和维护</p>
                           <p>☆ 项目前端界面多由原生javaScript和jQuery完成</p>
                           <p>☆ 负责部分模块的后端接口和数据库实现</p>
                       </div>
                       <h4>个人博客</h4>
                       <div className="project-profile">
                           <p>☆ 博客中用到了一些定位来控制相关组件的位置等</p>
                           <p>☆ 用预编译语言less完成项目的css样式部分</p>
                           <p>☆ 使用CSS3来实现页面的动画效果</p>
                       </div>
                       <h4>简单信息页</h4>
                       <div className="project-profile">
                           <p>☆ 用bootstrap框架开发的大众简洁化的响应式网页</p>
                           <p>☆ 通过layout可视化布局完成轮换图部分，实现快速布局</p>
                       </div>
                   </div>
               </section>
           </div>
       )
   }
});
var Info = React.createClass({
    render:function(){
        return(
            <section className="info-content">
                <LeftInfo />
                <RightInfo />
            </section>
        )
    }
});

var Top = React.createClass({
   render:function(){
       return(
           <header>
               <h1>Katherine</h1>
               <h3>● Front End Engineer ●</h3>
           </header>
       )
   }
});

var Katherine = React.createClass({
    render:function(){
        return(
            <div className="wrapper">
                <Top />
                <Info />
                <Skills />
            </div>
        )
    }
});

ReactDOM.render(
    <Katherine />,
    document.getElementById('box')
);