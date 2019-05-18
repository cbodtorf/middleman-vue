<template>
    <header>
        <nav class="load">
            <ul>
                <li><a id="menu_about" class="link" href="javascript:void(0);">ABOUT</a></li>
                <li><a class="link" href="mailto:cbodtorf@gmail.com">CONTACT</a></li>
            </ul>
        </nav>
        <div id="logo" class="load">
        <a class="link" href="index.html">
            <span>C</span><span>B</span><span>O</span><span>D</span><br>
            <span class="logo_tec01">T</span><span class="logo_tec02">O</span><span class="logo_tec03">R</span><span class="logo_tec02">F</span>
        </a>
        </div>
        <div id="job" class="load">Developer</div>
        <div id="cr" class="load">©BODTORF</div>
    </header>
</template>

<script>
    export default {
        name: 'headerComponent'
    }
</script>

<style lang="scss" scoped>
    header{
        position: fixed;
        z-index: 300;
    }


    nav{
    position: fixed;
    top:10%;
    right:-7%;
    display: inline-flex;
    text-align: right;
    color: white;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 12px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    nav ul li{
    margin-bottom: 15px;
    }
    nav ul li a{
    text-decoration: none;
    letter-spacing: 1px;
    color: white;
    position: relative;
    display: inline-block;
    transition: .3s;
    }

    .hover-delay{
    position: fixed;
    height: 100%;
    width: 100%;
    // background: url(../img/space.png);
    z-index: 10000
    }

    .hover-delay.load{
    display: none;
    }

    #logo,#job,nav,#cr{
    opacity: 0;
    }

    #logo{
    position: fixed;
    top:10%;
    left:-7%;
    color: white;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    #logo a{
    color: white;
    }

    #logo span{
    /*letter-spacing: 6.5px;*/
    display: inline-block;
    width:18px;
    }
    #logo .logo_tec01{
    margin-left: 1px;
    }
    #logo .logo_tec02{
    margin-left: -1px;
    }
    #logo .logo_tec03{
    margin-left: 1px;
    }

    #job{
    position: fixed;
    bottom:10%;
    left:-7%;
    color: white;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.5px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    #logo.load,#job.load{
    opacity: 1;
    left:5%;
    }

    #cr{
    position: fixed;
    bottom:10%;
    right:-7%;
    color: white;
    font-family: aktiv-grotesk, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.5px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    nav.load,#cr.load{
    opacity: 1;
    right:5%;
    }
</style>