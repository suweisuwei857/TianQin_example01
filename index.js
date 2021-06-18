// 轮播图 start

//跑动的次数
var count = 0;
//动画的执行方向
var isgo = false;
//定义计时器对象
var timer = null;

window.onload = function() {
    // 获取轮播图内<ul>元素
    var ul_img = document.getElementsByClassName("ul_img")[0];
    //获取所有的li图片元素
    var li_img = document.getElementsByClassName("li_img");
    var arrow = document.getElementsByClassName("arrow");
    var li_go = document.getElementsByClassName("li_go");
    li_go[0].style.backgroundColor = "#fff";

    showtime();

    function showtime() {
        timer = setInterval(function() {
            if (isgo == false) {
                count++;
                ul_img.style.transform = "translate(" + -800 * count + "px)";
                if (count >= li_img.length - 1) {
                    count = li_img.length - 1;
                    isgo = true;
                }
            } else {
                count--;
                ul_img.style.transform = "translate(" + -800 * count + "px)";
                if (count <= 0) {
                    count = 0;
                    isgo = false;
                }
            }
            for (var i = 0; i < li_go.length; i++) {
                li_go[i].style.backgroundColor = " #c0c4c6";
            }
            li_go[count].style.backgroundColor = "#fff";
            // 在这里
            // }
            // 每次延迟1秒
        }, 1000)
    }


    //获取控制方向的箭头元素
    var arrow = document.getElementsByClassName("arrow");
    for (var i = 0; i < arrow.length; i++) {
        //鼠标悬停时
        arrow[i].onmouseover = function() {
                //停止计时器
                clearInterval(timer);
            }
            //鼠标离开时
        arrow[i].onmouseout = function() {
            //添加计时器
            showtime();
        }
        arrow[i].onclick = function() {
            //区分左右
            if (this.title == 0) {
                count++;
                if (count > 3) {
                    count = 0;
                }
            } else {
                count--;
                if (count < 0) {
                    count = 3;
                }
            }
            ul_img.style.transform = "translate(" + -800 * count + "px)";
            for (var i = 0; i < li_go.length; i++) {
                li_go[i].style.backgroundColor = "#c0c4c6";

            }
            li_go[count].style.backgroundColor = "#fff";
        }
    }
    left.onclick = function() {
        list.style.left = parseInt(list.style.left) - 542 + 'px';
    }
    right.onclick = function() {
        list.style.left = parseInt(list.style.left) + 542 + 'px';
    }

    function change(offset) {
        list.style.left = parseInt(list.style.left) + offset + 'px';
    }

    left.onclick = function() {
        change(-542);
    }

    right.onclick = function() {
        change(542);
    }



    // 底部的点点
    //鼠标悬停在底部按钮的操作
    for (var b = 0; b < li_go.length; b++) {
        li_go[b].index = b;
        // 鼠标悬停事件
        li_go[b].onmouseover = function() {
            clearInterval(timer);

            for (var a = 0; a < li_go.length; a++) {
                li_go[a].style.backgroundColor = " #c0c4c6";
            }
            li_go[this.index].style.backgroundColor = "#fff";
            //为了控制方向
            if (this.index == 3) {
                isgo = true;
            }
            if (this.index == 0) {
                isgo = false;
            }
            //让count值对应
            count = this.index;
            ul_img.style.transform = "translate(" + -800 * this.index + "px)";
        }
        li_go[b].onmouseout = function() {
            //添加计时器
            showtime();
        }
    }
}

// 轮播图 end