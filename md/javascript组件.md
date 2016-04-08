

# tab切换


<div class="alert alert_success" role="alert">
                <strong>注意！</strong>需引用  tab.js  
</div>


通过结合 `data` 属性，可以轻松地创建一个标签页界面。通过这个插件您可以把内容放置在标签页或者是胶囊式标签页甚至是下拉菜单标签页中。

## 用法

* 通过 `data` 属性：您需要添加 `data-toggle="tab"` 或 `data-toggle="pill" `到锚文本链接中。
添加 `nav` 和 `nav_tabs` 类到 `ul` 中，将会应用标签样式，添加 `nav` 和 `nav_pills `类到 ul 中，将会应用胶囊式样式。无需编写额外的javascript，就可以激活选项卡切换效果。

<div class="bs-example">
    <ul class="nav nav_tabs">
        <li class="active"><a href="#home11" data-toggle="tab">菜单一</a></li>
        <li><a href="#ios" data-toggle="tab">菜单二</a></li>
        <li class="dropdown">
            <a href="#"  class="dropdown_toggle" data-toggle="dropdown">菜单三 
                <b class="caret"></b>
            </a>
            <ul class="dropdown_menu"  >
                <li><a href="#jmeter" tabindex="-1" data-toggle="tab">a</a></li>
                <li><a href="#ejb" tabindex="-1" data-toggle="tab">b</a></li>
            </ul>
        </li>
    </ul>
    <div  class="tab_content">
         <div class="tab_pane fade in active" id="home11">
             <p>1</p>
         </div>
         <div class="tab_pane fade" id="ios">
             <p>2</p>
         </div>
         <div class="tab_pane fade" id="jmeter">
             <p>3</p>
         </div>
         <div class="tab_pane fade" id="ejb">
             <p>4</p>
         </div>
    </div>
</div>

```html
<ul class="nav nav_tabs">
    <li class="active"><a href="#home11" data-toggle="tab">菜单一</a></li>
    <li><a href="#ios" data-toggle="tab">菜单二</a></li>
    <li class="dropdown">
        <a href="#"  class="dropdown_toggle" data-toggle="dropdown">菜单三 
            <b class="caret"></b>
        </a>
        <ul class="dropdown_menu"  >
            <li><a href="#jmeter" tabindex="-1" data-toggle="tab">a</a></li>
            <li><a href="#ejb" tabindex="-1" data-toggle="tab">b</a></li>
        </ul>
    </li>
</ul>
<div  class="tab_content">
     <div class="tab_pane fade in active" id="home11">
         <p>1</p>
     </div>
     <div class="tab_pane fade" id="ios">
         <p>2</p>
     </div>
     <div class="tab_pane fade" id="jmeter">
         <p>3</p>
     </div>
     <div class="tab_pane fade" id="ejb">
         <p>4</p>
     </div>
</div>
```


* 通过 `JavaScript：`您可以使用 `Javscript` 来启用标签页，如下所示：

<div class="bs-example">
    <ul class="nav nav_tabs" id="myTab"> 
        <li class="active"><a href="#home1">Home</a></li> 
        <li><a href="#profile1">Profile</a></li> 
        <li><a href="#messages1">Messages</a></li> 
        <li><a href="#settings1">Settings</a></li> 
    </ul> 
       
    <div class="tab_content"> 
        <div class="tab_pane fade in active" id="home1">...1</div> 
        <div class="tab_pane fade" id="profile1">...2</div> 
        <div class="tab_pane fade" id="messages1">...3</div> 
        <div class="tab_pane fade " id="settings1">...4</div> 
    </div> 
</div>

```html
<ul class="nav nav_tabs" id="myTab"> 
    <li class="active"><a href="#home1">Home</a></li> 
    <li><a href="#profile1">Profile</a></li> 
    <li><a href="#messages1">Messages</a></li> 
    <li><a href="#settings1">Settings</a></li> 
</ul> 
   
<div class="tab_content"> 
    <div class="tab_pane fade in active" id="home1">...1</div> 
    <div class="tab_pane fade" id="profile1">...2</div> 
    <div class="tab_pane fade" id="messages1">...3</div> 
    <div class="tab_pane fade " id="settings1">...4</div> 
</div> 
```

<script type="text/javascript">
    
$(function () { 
    $("#myTab a").click(function (e) { 
        e.preventDefault();//阻止a链接的跳转行为 
        $(this).tab('show');//显示当前选中的链接及关联的content 
    }) 
}) 

</script>

```javascript
    $(function () { 
        $('#myTab a:last').tab('show');//初始化显示哪个tab 
        // $('#myTabs a[href="#profile"]').tab('show') // 按名称选择选项卡
        // $('#myTabs a:first').tab('show') // 选择第一个选项卡
        // $('#myTabs a:last').tab('show') // 选择最后一个选项卡
        // $('#myTabs li:eq(2) a').tab('show') // 选择第三个选项卡 (从 0 开始编制索引)

        $('#myTab a').click(function (e) { 
            e.preventDefault();//阻止a链接的跳转行为 
            $(this).tab('show');//显示当前选中的链接及关联的content 
        }) 
    }) 
```

* 如果需要为标签页设置淡入淡出效果，请添加 `.fade` 到每个 `.tab-pane` 后面。第一个标签页必须添加 `.in` 类，以便淡入显示初始内容，如下面实例所示：

```html
<div class="tab_content">
    <div class="tab_pane  fade in active" id="home">1</div>
    <div class="tab_pane fade" id="profile">2</div>
    <div class="tab_pane fade" id="messages">3</div>
    <div class="tab_pane fade" id="settings">4</div>
</div>
```

## 事件

下表列出了标签页（Tab）插件中要用到的事件。这些事件可在函数中当钩子使用。
<table class="table table_hover table_bordered table_striped">
        <thead>
            <tr>
                <th>事件</th>
                <th>描述</th>
                <th>实例</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>show.bs.tab</th>
                <td>该事件在标签页显示时触发，但是必须在新标签页被显示之前。分别使用 event.target 和 event.relatedTarget 来定位到激活的标签页和前一个激活的标签页。</td>
                <td>
$('a[data-toggle="tab"]').on('show.bs.tab', function (e) { 
  e.target // 激活的标签页
  e.relatedTarget // 前一个激活的标签页
})
                </td>
            </tr>
            <tr>
                <th>shown.bs.tab</th>
                <td>该事件在标签页显示时触发，但是必须在某个标签页已经显示之后。分别使用 event.target 和 event.relatedTarget 来定位到激活的标签页和前一个激活的标签页。</td>
                <td>
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // 激活的标签页
  e.relatedTarget // 前一个激活的标签页
})</td>
            </tr>
        </tbody>
    </table>

<div class="bs-example">
     <hr>
       <p class="active_tab"><strong>激活的标签页</strong>：<span></span></p>
       <p class="previous_tab"><strong>前一个激活的标签页</strong>：<span></span></p>
    <hr>
    <ul id="myTaba" class="nav nav_tabs">
        <li class="active"><a href="#home1" data-toggle="tab">1</a></li>
        <li><a href="#ios2" data-toggle="tab">2</a></li>
        <li class="dropdown">
            <a href="#" id="myTabDrop1" class="dropdown_toggle" data-toggle="dropdown"> a <b class="caret"></b></a>
            <ul class="dropdown_menu" role="menu" aria-labelledby="myTabDrop1">
                <li><a href="#jmeter3" tabindex="-1" data-toggle="tab">3</a></li>
                <li><a href="#ejb4" tabindex="-1" data-toggle="tab">4</a></li>
            </ul>
        </li>
    </ul>
    <div id="myTabContent" class="tab_content">
        <div class="tab_pane fade in active" id="home1">
            <p>1</p>
        </div>
        <div class="tab_pane fade" id="ios2">
            <p>2</p>
        </div>
        <div class="tab_pane fade" id="jmeter3">
            <p>3</p>
        </div>
        <div class="tab_pane fade" id="ejb4">
            <p>4</p>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(function () { 
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text(); 
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text(); 
        $(".active_tab span").html(activeTab);
        $(".previous_tab span").html(previousTab);
    });

}) 
</script>


```javascript
$(function () { 
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text(); 
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text(); 
        $(".active_tab span").html(activeTab);
        $(".previous_tab span").html(previousTab);
    });

}) 
```




# 下拉菜单 dropdown

使用下拉菜单（Dropdown）插件，您可以向任何组件（比如导航栏、标签页、胶囊式导航菜单、按钮等）添加下拉菜单。


> 最外层为.dropdown样式类；<br>
> 触发按钮，需要添加.toggle_dropdown样式类和data-toggle="dropdown"；<br>
> 下拉菜单为.dropdown_menu样式类和role="menu"。


<div class="alert alert_success" role="alert">
                <strong>注意！</strong>需引用  dropdown.js  
</div>

## 基本用法

* 通过 `data` 属性：向链接或按钮添加 `data-toggle="dropdown"` 来切换下拉菜单，如下所示：

<div class="bs-example">
    <div class="dropdown clearfix">
        <button class="btn btn_default dropdown_toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        下拉菜单
        <span class="caret"></span>   
        </button>
        <ul class="dropdown_menu " aria-labelledby="dropdownMenu1">
            <li><a href="#">项目一</a></li>
            <li class="active"><a href="#">项目二</a></li>
            <li><a href="#">项目三</a></li>
            <li><a href="#">项目四</a></li>
        </ul>
    </div>
</div>

```html
<div class="dropdown clearfix">
    <button class="btn btn_default dropdown_toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    下拉菜单
    <span class="caret"></span>   
    </button>
    <ul class="dropdown_menu " aria-labelledby="dropdownMenu1">
        <li><a href="#">项目一</a></li>
        <li class="active"><a href="#">项目二</a></li>
        <li><a href="#">项目三</a></li>
        <li><a href="#">项目四</a></li>
    </ul>
</div>
```


* 通过 `JavaScript` 调用下拉菜单切换

<div class="bs-example">
    <div class="dropdown clearfix">
        <button class="btn btn_default dropdown_toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        下拉菜单
            <span class="caret"></span>   
        </button>
        <ul class="dropdown_menu" >
            <li><a href="#">项目一</a></li>
            <li class="active"><a href="#">项目二</a></li>
            <li><a href="#">项目三</a></li>
            <li><a href="#">项目四</a></li>
        </ul>
    </div>
</div>

```html
<div class="dropdown clearfix">
    <button class="btn btn_default dropdown_toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    下拉菜单
        <span class="caret"></span>   
    </button>
    <ul class="dropdown_menu" >
        <li><a href="#">项目一</a></li>
        <li class="active"><a href="#">项目二</a></li>
        <li><a href="#">项目三</a></li>
        <li><a href="#">项目四</a></li>
    </ul>
</div>
```

```javascript
$(function () { 
    $('.dropdown_toggle').dropdown()
}) 
```

<script type="text/javascript">
$(function () { 
    $('.dropdown_toggle').dropdown()
}) 
</script>

## 导航下拉菜单

<div class="bs-example">
<nav class="navbar navbar_default">
    <div class="container_fluid">
        <div class="navbar_header">
            <button type="button" class="navbar_toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr_only">Toggle navigation</span>
                    <span class="icon_bar"></span>
                    <span class="icon_bar"></span>
                    <span class="icon_bar"></span>
            </button>
            <a class="navbar_brand" href="#">Brand</a>
        </div>
        <div class="collapse navbar_collapse" id="">
            <ul class="nav navbar_nav">
                <li class="active"><a href="#">Link <span class="sr_only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li class="dropdown clearfix">
                    <a href="#" class="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown_menu"  style="display:">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                    
                </li>
                
            </ul>
            <ul class="nav navbar_nav navbar_right">
                <li class="dropdown clearfix">
                    <a href="#" class="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown_menu dropdown_menu_right">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>
</div>
</nav>
</div>

```html
<nav class="navbar navbar_default">
    <div class="container_fluid">
        <div class="navbar_header">
            <button type="button" class="navbar_toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr_only">Toggle navigation</span>
                    <span class="icon_bar"></span>
                    <span class="icon_bar"></span>
                    <span class="icon_bar"></span>
            </button>
            <a class="navbar_brand" href="#">Brand</a>
        </div>
        <div class="collapse navbar_collapse" id="">
            <ul class="nav navbar_nav">
                <li class="active"><a href="#">Link <span class="sr_only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li class="dropdown clearfix">
                    <a href="#" class="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown_menu"  style="display:">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                    
                </li>
                
            </ul>
            <ul class="nav navbar_nav navbar_right">
                <li class="dropdown clearfix">
                    <a href="#" class="" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown_menu dropdown_menu_right">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</nav>
```

## 带下拉菜单的胶囊式标签页

<div class="bs-example">
    <ul class="nav nav_pills">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Help</a></li>
        <li role="presentation" class="dropdown">
            <a class="" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown_menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </li>
    </ul>
</div>

```html
 <ul class="nav nav_pills">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Help</a></li>
        <li role="presentation" class="dropdown">
            <a class="" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown_menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
            </ul>
        </li>
</ul>
```

# 过渡动画

## 关于过渡效果
对于简单的过渡效果，只需将 `transition.js` 和其它 JS 文件一起引入即可。

## 包含的内容
`Transition.js` 是针对 `transitionEnd` 事件的一个基本辅助工具，也是对 CSS 过渡效果的模拟。它被其它插件用来检测当前浏览器对是否支持 CSS 的过渡效果。

## 禁用过度效果
通过下面的 JavaScript 代码可以在全局范围禁用过渡效果，并且必须将此代码放在 `transition.js`后面，确保在 js 文件加载完毕后再执行下面的代码：

```javascript
$.support.transition = false;
```

## 具体案例
* 具有幻灯片或淡入效果的弹出层。（弹出层 `Modal` 插件）
* 具有淡出效果的标签页。（标签 `tab` 插件）
* 具有淡出效果的警告框。 (警告框 `Alert` 插件。)
* 具有幻灯片效果的轮播板。(轮播 `Carousel` 插件。)

# 模态框(弹出层) modal
`Modals`（模态框）是使用定制的 Jquery 插件创建的。它可以用来创建模态窗口丰富用户体验，或者为用户添加实用功能。您可以在 `Modals`（模态框）中使用 `Popover`（弹出框）和 `Tooltip`（工具提示插件）。


<div class="bs-callout bs-callout-warning" id="callout-stacked-modals">
    <h4>不支持同时打开多个模态框</h4>
    <p>千万不要在一个模态框上重叠另一个模态框。要想同时支持多个模态框，需要自己写额外的代码来实现。</p>
</div>
<div class="bs-callout bs-callout-warning" id="callout-modal-markup-placement">
    <h4>模态框的 HTML 代码放置的位置</h4>
    <p>务必将模态框的 HTML 代码放在文档的最高层级内（也就是说，尽量作为 body 标签的直接子元素），以避免其他组件影响模态框的展现和/或功能。</p>
</div>

## 动态实例

点击下面的按钮即可通过 JavaScript 启动一个模态框。此模态框将从上到下、逐渐浮现到页面前。

<div class="bs-example">
<button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#myModal">
    弹出层
</button>


<div class="modal fade "  id="myModal" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
                内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容<br/>
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>
</div>

```html
<div class="modal fade "  id="myModal" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容...
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>
```

<div class="bs-callout bs-callout-warning" id="callout-modal-accessibility">
    <h4>增强模态框的可访问性</h4>
    <p>务必为 <code>.modal</code> 添加 <code>role="dialog"</code> 和 <code>aria-labelledby="..."</code> 属性，用于指向模态框的标题栏；为 <code>.modal-dialog</code> 添加 <code>aria-hidden="true"</code> 属性。</p>
    <p>另外，你还应该通过 <code>aria-describedby</code> 属性为模态框 <code>.modal</code> 添加描述性信息。</p>
</div>

## 可选尺寸
模态框提供了两个可选尺寸，通过为 `.modal_dialog` 增加一个样式调整类实现。
* `.modal_l`
* `.modal_s`

<div class="bs-example">
    <button type="button" class="btn btn_primary" data-toggle="modal" data-target="#size_l">大尺寸</button>

    <div class="modal fade " id="size_l" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" >
        <div class="modal_dialog modal_l">
            <div class="modal_content">

                <div class="modal_header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <div class="modal_title" id="myLargeModalLabel">标题</div>
                </div>
                <div class="modal_body">
                ...
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="btn btn_primary" data-toggle="modal"  data-target="#size_s">小尺寸</button>

    <div class="modal fade" id="size_s" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" >
        <div class="modal_dialog modal_s">
            <div class="modal_content">

                <div class="modal_header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <div class="modal_title" id="myLargeModalLabel">标题</div>
                </div>
                <div class="modal_body">
                ...
                </div>
            </div>
        </div>
    </div>
</div>

```html

<!-- 大尺寸 -->
 <button type="button" class="btn btn_primary" data-toggle="modal" data-target="#size_l">大尺寸</button>

<div class="modal fade " id="size_l" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" >
    <div class="modal_dialog modal_l">
        <div class="modal_content">

            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal_title" id="myLargeModalLabel">标题</h4>
            </div>
            <div class="modal_body">
            ...
            </div>
        </div>
    </div>
</div>

<!-- 小尺寸 -->
<button type="button" class="btn btn_primary" data-toggle="modal"  data-target="#size_s">小尺寸</button>

<div class="modal fade" id="size_s" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" >
    <div class="modal_dialog modal_s">
        <div class="modal_content">

            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal_title" id="myLargeModalLabel">标题</h4>
            </div>
            <div class="modal_body">
            ...
            </div>
        </div>
    </div>
</div>
```

## 禁止动画效果
如果你不需要模态框弹出时的动画效果（淡入淡出效果），删掉 `.fade` 、 `data-easein=""` 、 `data-easeout=""`  即可。


## 基于触发按钮改变弹出层内容
多个按钮触发模式一样，只改变弹出层内容。使用 `event.relatedTarget` 和html的`date-* `属性来具体取决于哪个按钮被点击的内容

<div class="bs-example">
    <button type="button" class="btn btn_primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn_primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn_primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@get">Open modal for @get</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal_dialog" role="document">
    <div class="modal_content">
      <div class="modal_header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div class="modal_title" id="exampleModalLabel">New message</div>
      </div>
      <div class="modal_body">
        <form>
          <div class="form_group">
            <label for="recipient-name" class="control_label">Recipient:</label>
            <input type="text" class="form_control" id="recipient-name">
          </div>
          <div class="form_group">
            <label for="message-text" class="control_label">Message:</label>
            <textarea class="form_control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn_primary">Send message</button>
      </div>
    </div>
  </div>
</div>
</div>

```html
<button type="button" class="btn btn_primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn_primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn_primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@get">Open modal for @get</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
  <div class="modal_dialog" role="document">
    <div class="modal_content">
      <div class="modal_header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal_title" id="exampleModalLabel">New message</h4>
      </div>
      <div class="modal_body">
        <form>
          <div class="form_group">
            <label for="recipient-name" class="control_label">Recipient:</label>
            <input type="text" class="form_control" id="recipient-name">
          </div>
          <div class="form_group">
            <label for="message-text" class="control_label">Message:</label>
            <textarea class="form_control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal_footer">
        <button type="button" class="btn btn_default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn_primary">Send message</button>
      </div>
    </div>
  </div>
</div>
```

```javascript
$(function () { 
    $('#exampleModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget) 
        var recipient = button.data('whatever') 
        var modal = $(this)
        modal.find('.modal_title').text('New message to ' + recipient)
        modal.find('.modal_body input').val(recipient)
        modal.find('.modal_body textarea').val(recipient)
    })
})
```

<script type="text/javascript">
    $(function () { 
        $('#exampleModal').on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) 
            var recipient = button.data('whatever') 
            var modal = $(this)
            modal.find('.modal_title').text('New message to ' + recipient)
            modal.find('.modal_body input').val(recipient)
            modal.find('.modal_body textarea').val(recipient)
        })
    })
</script>

## 各种css3动画弹出层

css3动画效果具体参照 基础框架 `CSS3 Animate`

* 通过添加 `data-easein=""` `data-easeout=""` 属性， 给弹出层进入退出添加动画效果。

<div class="bs-example">
    <button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#Modal8">lightSpeedIn/lightSpeedOut</button>
<div class="modal"  data-easein="lightSpeedIn"  data-easeout="lightSpeedOut" id="Modal8" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>
<button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#Modal7">flipInX/flipOutX</button>
<div class="modal"  data-easein="flipInX" data-easeout="flipOutX" id="Modal7" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>
<button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#Modal6">flip/flipOutX</button>
<div class="modal"  data-easein="flip" data-easeout="flipOutX" id="Modal6" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>
</div>

```html
<button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#Modal8">lightSpeedIn/lightSpeedOut</button>
<div class="modal"  data-easein="lightSpeedIn"  data-easeout="lightSpeedOut" id="Modal8" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
         </div>
    </div>
</div>

<button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#Modal7">flipInX/flipOutX</button>
<div class="modal"  data-easein="flipInX" data-easeout="flipOutX" id="Modal7" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>

<button type="button" class="btn btn_primary btn_lg js_name" data-toggle="modal" data-target="#Modal6">flip/flipOutX</button>
<div class="modal"  data-easein="flip" data-easeout="flipOutX" id="Modal6" tabindex="-1" role="dialog" >
    <div class="modal_dialog" >
        <div class="modal_content">
            <div class="modal_header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div class="modal_title">标题</div>
            </div>
            <div class="modal_body">
                内容
            </div>
            <div class="modal_footer">
                <button type="button" class="btn btn_default" data-dismiss="modal">关闭</button>
                <button type="button" class="btn btn_primary">保存</button>
            </div>
        </div>
    </div>
</div>
```

## 用法
通过 `data` 属性或 JavaScript 调用模态框插件，可以根据需要动态展示隐藏的内容。模态框弹出时还会为 <body> 元素添加 `.modal_open` 类，从而覆盖页面默认的滚动行为，并且还会自动生成一个 `.modal_backdrop` 元素用于提供一个可点击的区域，点击此区域就即可关闭模态框。

### 通过 data 属性
不需写 JavaScript 代码也可激活模态框。通过在一个起控制器作用的元素（例如：按钮）上添加 `data-toggle="modal"` 属性，或者 `data-target="#foo"` 属性，再或者 `href="#foo"` 属性，用于指向被控制的模态框

```html
<button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
```

### 通过 JavaScript 调用
只需一行 JavaScript 代码，即可通过元素的 id myModal 调用模态框：

```javascript
$('#myModal').modal(options)
```

## 参数
可以将选项通过 `data` 属性或 `JavaScript` 代码传递。对于 `data` 属性，需要将参数名称放到 `data-` 之后，例如 `data-backdrop=""` 。
<table class="table table_hover table_bordered table_striped">
        <thead>
            <tr>
                <th>名称</th>
                <th>类型</th>
                <th>默认值</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>backdrop</td>
                <td>boolean 或 字符串 static</td>
                <td>true</td>
                <td>指定静态的背景下，不关闭弹出层上点击</td>
            </tr>
            <tr>
                <td>keyboard</td>
                <td>boolean</td>
                <td>true</td>
                <td>键盘上的 esc 键被按下时关闭模态框。</td>
            </tr>
            <tr>
                <td>show</td>
                <td>boolean</td>
                <td>true</td>
                <td>模态框初始化之后就立即显示出来。</td>
            </tr>
            <tr>
                <td>remote</td>
                <td>path</td>
                <td>false</td>
                <td>如果提供的是 URL，将利用 jQuery 的 load 方法从此 URL 地址加载要展示的内容（只加载一次）并插入 .modal-content 内。如果使用的是 data 属性 API，还可以利用 href 属性指定内容来源地址。下面是一个实例：
`<a data-toggle="modal" href="remote.html" data-target="#modal">Click me</a>`
                </td>
            </tr>
        </tbody>
</table>        




## 方法

### .modal(options)
将页面中的某块内容作为模态框激活。接受可选参数 `object`。

```javascript
$('#myModal').modal({
    keyboard: false
})
```

### .modal('toggle')
手动打开或关闭模态框。在模态框显示或隐藏之前返回到主调函数中（也就是，在触发 `shown.bs.modal` 或 `hidden.bs.modal` 事件之前）。

```javascript
$('#myModal').modal('toggle')
```

### .modal('show')
手动打开模态框。在模态框显示之前返回到主调函数中 （也就是，在触发 `shown.bs.modal` 事件之前）。

```javascript
$('#myModal').modal('show')
```

### .modal('hide')
手动隐藏模态框。在模态框隐藏之前返回到主调函数中 （也就是，在触发 `hidden.bs.modal` 事件之前）。

```javascript
$('#myModal').modal('hide')
```


## 事件
用于监听并执行你自己的代码

<table class="table table_hover table_bordered table_striped">
        <thead>
            <tr>
                <th>事件类型</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>show.bs.modal</td>
                <td>show 方法调用之后立即触发该事件。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 relatedTarget 属性进行访问。</td>
            </tr>
            <tr>
                <td>shown.bs.modal</td>
                <td>此事件在模态框已经显示出来（并且同时在 CSS 过渡效果完成）之后被触发。如果是通过点击某个作为触发器的元素，则此元素可以通过事件的 relatedTarget 属性进行访问。</td>
            </tr>
            <tr>
                <td>hide.bs.modal</td>
                <td>hide 方法调用之后立即触发该事件。</td>
            </tr>
            <tr>
                <td>hidden.bs.modal</td>
                <td>此事件在模态框被隐藏（并且同时在 CSS 过渡效果完成）之后被触发。</td>
            </tr>
            <tr>
                <td>loaded.bs.modal</td>
                <td>从远端的数据源加载完数据之后触发该事件。</td>
            </tr>
        </tbody>
</table>

```javascript
$('#myModal').on('hidden.bs.modal', function (e) {
  // 
})
```


# 警告框 scrollspy

# 工具提示 tooltips

## 提供四个选项：顶部，右边，底部和左对齐
<div class="bs-example bs-example-tooltip" >
    <div class="tooltip left" role="tooltip">
        <div class="tooltip_arrow"></div>
        <div class="tooltip_inner">提示左侧显示</div>
    </div>
    <div class="tooltip top" role="tooltip">
        <div class="tooltip_arrow"></div>
        <div class="tooltip_inner">提示顶部显示</div>
    </div>
    <div class="tooltip bottom" role="tooltip">
        <div class="tooltip_arrow"></div>
        <div class="tooltip_inner">提示底部显示</div>
    </div>
    <div class="tooltip right" role="tooltip">
        <div class="tooltip_arrow"></div>
        <div class="tooltip_inner">提示右侧显示</div>
    </div>
</div>

## 四方向示例

<div class="bs-example">

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="left" title="我是提示" >
  左侧提示
</button>

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="top" title="我是提示">
  顶部提示
</button>

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="bottom" title="我是提示">
  底部提示
</button>

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="right" title="我是提示" >
  右侧提示
</button>
</div>


```html
<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="left" title="我是提示" >
  左侧提示
</button>

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="top" title="我是提示">
  顶部提示
</button>

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="bottom" title="我是提示">
  底部提示
</button>

<button type="button" class="btn btn btn_primary" data-container="body" data-toggle="tooltip" data-placement="right" title="我是提示" >
  右侧提示
</button>

```


```javascript
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.tooltip_show').tooltip('show');
})
```

<script type="text/javascript">
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.tooltip_show').tooltip('show');
})
</script>

## 用法

* 通过 `data` 属性：如需添加一个工具提示`（tooltip）`，只需向一个锚标签添加 `data-toggle="tooltip"` 即可。锚的 `title `即为工具提示`（tooltip）`的文本。默认情况下，插件把工具提示`（tooltip）`设置在顶部。

<div class="bs-example">
    <a href="#" data-toggle="tooltip" title="tooltip">请悬停在我的上面</a>
</div>

```html
<a href="#" data-toggle="tooltip" title="tooltip">请悬停在我的上面</a>
```

* 通过 JavaScript：通过 JavaScript 触发工具提示（tooltip）

```javascript
$(function () {
    $("[data-toggle='tooltip']").tooltip(); 
});
```


## 选项

<table class="table table_hover table_bordered table_striped">
        <thead>
            <tr>
                <th>选项名称</th>
                <th>类型/默认值</th>
                <th>Data 属性名称</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>animation</td>
                <td>boolean默认值：true</td>
                <td>data-animation</td>
                <td>向工具提示应用 CSS 褪色过渡效果。</td>
            </tr>
            <tr>
                <td>html</td>
                <td>boolean默认值：false</td>
                <td>data-html</td>
                <td>向工具提示插入 HTML。如果为 false，jQuery 的 text 方法将被用于向 dom 插入内容。如果您担心 XSS 攻击，请使用 text。</td>
            </tr>
            <tr>
                <td>placement</td>
                <td>string|function默认值：top</td>
                <td>data-placement</td>
                <td>规定如何定位工具提示（即 top|bottom|left|right|auto）。 当指定为 auto 时，会动态调整工具提示。例如，如果 placement 是 "auto left"，工具提示将会尽可能显示在左边，在情况不允许的情况下它才会显示在右边。</td>
            </tr>
            <tr>
                <td>selector</td>
                <td>string默认值：false</td>
                <td>data-selector</td>
                <td>如果提供了一个选择器，工具提示对象将被委派到指定的目标。</td>
            </tr>
            <tr>
                <td>title</td>
                <td>string | function默认值：''</td>
                <td>data-title</td>
                <td>如果未指定 title 属性，则 title 选项是默认的 title 值。</td>
            </tr>
            <tr>
                <td>trigger</td>
                <td>string默认值：'hover focus'</td>
                <td>data-trigger</td>
                <td>定义如何触发工具提示： click| hover | focus | manual。您可以传递多个触发器，每个触发器之间用空格分隔。</td>
            </tr>
            <tr>
                <td>content</td>
                <td>string | function默认值：''</td>
                <td>data-content</td>
                <td>如果未指定 data-content 属性，则使用默认的 content 值。</td>
            </tr>
            <tr>
                <td>delay</td>
                <td>number | object默认值：0</td>
                <td>data-delay</td>
                <td>延迟显示和隐藏工具提示的毫秒数 - 对 manual 手动触发类型不适用。如果提供的是一个数字，那么延迟将会应用于显示和隐藏。如果提供的是对象，结构如下所示：delay: { "show": 500, "hide": 100 }</td>
            </tr>
            <tr>
                <td>container</td>
                <td>string | false默认值：false</td>
                <td>data-container</td>
                <td>向指定元素追加工具提示。实例： container: 'body'</td>
            </tr>
        </tbody>
</table>  

## 方法

工具提示（Tooltip）插件中有用的方法： 

<table class="table table_hover table_bordered table_striped">
        <thead>
            <tr>
                <th>方法</th>
                <th>描述</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Options: .tooltip(options)</td>
                <td>向元素集合附加提示工具句柄。</td>
                <td>$().tooltip(options)</td>
            </tr>
            <tr>
                <td>Toggle: .tooltip('toggle')</td>
                <td>切换显示/隐藏元素的提示工具。</td>
                <td>$('#id').tooltip('toggle')</td>
            </tr>
            <tr>
                <td>Show: .tooltip('show')</td>
                <td>显示元素的提示工具。</td>
                <td>$('#id').tooltip('show')</td>
            </tr>
            <tr>
                <td>Hide: .tooltip('hide')</td>
                <td>隐藏元素的提示工具。</td>
                <td>$('#id').tooltip('hide')</td>
            </tr>
            <tr>
                <td>Destroy: .tooltip('destroy')</td>
                <td>隐藏并销毁元素的提示工具。</td>
                <td>$('#id').tooltip('destroy')</td>
            </tr>
        </tbody>
</table>     

# 按钮

实现效果点击加载中禁用点击，请求完成还原按钮效果。

# 滚动条监听

# 表单验证

# 简单AJAX加载路由

> 加载 `snippet.js`

- `href` 连接地址是要加载的地址
- `data-snippet` 给定加载生成的节点位置`snippet#id`

```html
<a href="/test/buttons.html" class="btn btn_primary btn_sm" id="testUl" data-snippet="snippet#wrap_button">加载按钮</a>
<a href="/test/image.html" class="btn btn_primary btn_sm" data-snippet="snippet#wrap_button">加载表格</a>

<div id="wrap_button"></div>
<div id="wrap_table"></div>
<script type="text/javascript">
    $.snippet({
        headers : {tokean: 'aaa'}
    }).on('snippet.show',function(){
        console.log("snippet")
    });
</script>
```


- `snippet.show` 加载成功之后触发此事件。
- `snippet` 方法传`{headers : {tokean: 'aaa'} }` 用于Ajax发送添加额外的 header 信息

```javascript
$.snippet().on('snippet.show',function(){
    console.log("snippet")
});
```

# 基于iframe单页面加载

# 表格排序

## 全选

## 排序