<template>
     <div class="Form-group">
     <div class="FormCreator">
        <div class="UserEdit" contentEditable="true">Question</div>
        <div class="UserEdit" contentEditable="true">Description/Guide to solve/Requirements</div>
     </div>
     <div class="Participants">
        <input type="file" :name="name" class="ParticipantsEdit" placeholder="Enter Email">
     </div>
   </div>
</template>
<script>
export default{
   name: 'Number',
   props:{ 
       name:{
          type: String,
          required:true
       },
     },
}
</script>
<style scoped></style>