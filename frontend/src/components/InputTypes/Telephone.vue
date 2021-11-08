<template>
   <div class="Form-group">
     <div class="FormCreator">
        <div class="UserEdit" contentEditable="true">Question</div>
        <div class="UserEdit" contentEditable="true">Description/Guide to solve/Requirements</div>
     </div>
     <div class="Participants">
        <input type="tel" :name="name" class="ParticipantsEdit" placeholder="Enter telephone number">
     </div>
   </div>
</template>
<script>
   export default{
      name:'Telephone',
      props:{ 
       name:{
          type: String,
          required:true
       },
     },
   };
</script>
<style scoped>
</style>