<template>
    <div class="Form-group">
     <div class="FormCreator">
        <div class="UserEdit" contentEditable="true">Question</div>
        <div class="UserEdit" contentEditable="true">Description/Guide to solve/Requirements</div>
     </div>
     <div class="Participants">
        <input type="range" :name="name" class="ParticipantsEdit" placeholder="choose range">
     </div>
   </div>
</template>
<script>
   export default{
       name:'Range',
       props:{ 
       name:{
          type: String,
          required:true
       },
     },
   };
</script>
<style scoped></style>