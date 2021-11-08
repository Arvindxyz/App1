<template>
    <div class="Form-group">
     <div class="FormCreator">
        <div class="UserEdit" contentEditable="true">Question</div>
        <div class="UserEdit" contentEditable="true">Description/Guide to solve/Requirements</div>
     </div>
     <div class="Participants">
        <input type="text" :name="name" class="ParticipantsEdit" placeholder="Enter text">
     </div>
   </div>
</template>
<script>
export default{
    name: 'Text',
    props:{ 
       name:{
          type: String,
          required:true
       },
     },
}
</script>
<style scoped>
</style>