<template>
   <div class="Form-card">
      <span >{{form.name}}</span>
     <!-- <div id="FormDisplay"></div>-->
   </div>
</template>
<script>
  export default{
     name:'FormCard',
     props:{
        form:{
          type:Object,
          required:true
        } 
      },
     methods:{
        showform(){
          this.stringtohtml();
          let v= this.form.formbody;
          document.getElementById('FormDisplay').innerHTML= v.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
          
        },
        stringtohtml(){
          let k= document.createElement('form');
          k.innerHTML= this.form.formbody
          console.log(this.form.formbody);
          console.log(k);
        }
      }
  };
</script>
<style scoped>
.Form-card{
  padding:5px;
}
</style>