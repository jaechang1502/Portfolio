<template>
<header class="header">
  <div class="header_con">
    <div class="header_left">
      <router-link to="/">
      <img src="../assets/123.jpg" class="header_img">
      </router-link>
      <dlv>
        <nav class="ml-4">
          <ul>
            <li>+82 10-3692-5367</li>
            <li>/</li>
            <li>jaechang1502@github.com</li>
          </ul>
        </nav>
      </dlv>
    </div>
    <div class="header_right"></div>
  </div>
</header>
</template>

<script>
export default {

}
</script>

<style>
.header{
  position: absolute;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.6;
}
.header_con{
  display: flex;
  padding: 1.5rem 2.74rem;
  justify-content: space-between; 
}
.header_left{
  display: flex;
  flex-basis: 100%;
  align-items: center;
}
.header_img{
  height: 80px;
}

</style>