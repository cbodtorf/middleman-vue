<template>
  <header>
    <nav class="load fadedown">
      <ul>
        <li><a id="menu_about" class="link" href="javascript:void(0);">ABOUT</a></li>
        <li><a class="link" href="mailto:cbodtorf@gmail.com">CONTACT</a></li>
      </ul>
    </nav>
    <div id="logo" class="load">
    <a class="link fadedown" href="/">
      <span>C</span><span>B</span><span>O</span><span>D</span><br>
      <span class="logo_tec01">T</span><span class="logo_tec02">O</span><span class="logo_tec03">R</span><span class="logo_tec02">F</span>
    </a>
    </div>
    <div id="job" class="load fadedown">Developer</div>
    <div id="cr" class="load fadedown">©BODTORF</div>
  </header>
</template>

<script>
  export default {
    name: 'headerComponent'
  }
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    z-index: 300;
  }

  nav {
    position: fixed;
    top:10%;
    right:-7%;
    display: inline-flex;
    text-align: right;
    color: #fed8f9;
    font-family: Harbour, sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 12px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  nav ul li {
    margin-bottom: 15px;
    list-style: none;
  }
  nav ul li a {
    text-decoration: none;
    letter-spacing: 1px;
    color: #1a1427;
    position: relative;
    display: inline-block;
    transition: .3s;
  }

  .hover-delay {
    position: fixed;
    height: 100%;
    width: 100%;
    // background: url(../img/space.png);
    z-index: 10000
  }

  .hover-delay.load {
    display: none;
  }

  #logo, #job, nav, #cr {
    opacity: 0;
  }

  #logo {
    position: fixed;
    top:10%;
    left:-7%;
    color: #fed8f9;
    font-family: Harbour, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  #logo a {
    color: #fed8f9;
  }

  #logo span {
    /*letter-spacing: 6.5px;*/
    display: inline-block;
    width:18px;
  }
  #logo .logo_tec01 {
    margin-left: 1px;
  }
  #logo .logo_tec02 {
    margin-left: -1px;
  }
  #logo .logo_tec03 {
    margin-left: 1px;
  }

  #job {
    position: fixed;
    bottom:10%;
    left:-7%;
    color: #fed8f9;
    font-family: Harbour, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.5px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  #logo.load, #job.load {
    opacity: 1;
    left:5%;
  }

  #cr {
    position: fixed;
    bottom:10%;
    right:-7%;
    color: #1a1427;
    font-family: Harbour, sans-serif;
    font-weight: normal;
    font-style: normal;
    font-size: 10px;
    letter-spacing: 0.5px;
    -moz-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    -webkit-transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  nav.load,#cr.load {
    opacity: 1;
    right:5%;
  }
</style>