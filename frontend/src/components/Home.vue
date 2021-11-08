<template>
 <div id="Home-page">
   <AppNavbar/>
   <div>
      <router-view/>
   </div> 
  </div>   
</template>
<script>
import Navbar from '@/components/Navbar';
export default{
    name: 'Home',
    components:{
        AppNavbar: Navbar
    },
}
</script>
<style></style>