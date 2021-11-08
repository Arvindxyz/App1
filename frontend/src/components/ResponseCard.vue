<template>
  <div class="Card">
    <div class="Form-name">
       <h3>{{response.name}}</h3>
       <div class="Status">
          <span>Status: </span>
          <span v-if="response.isActive" class="status-active">active</span>
          <span v-else class="status-inactive">inactive</span>
          <button @click="changeStatus">Change Status</button>
       </div>
    </div>
    <div class="View-response">
       <div class="Count-response">
          <span>Number of responses received = </span>
          <span>{{response.participantsResponses.length}}</span>
        </div>
       <span @click="showTable" class="btn">view responses</span>
    </div>
    <div>
       <span>Share using link : </span>
       <span>{{formLink}}/pages/form/{{response.formId}}</span> 
    </div>
  </div>
</template>
<script>
  import AppConfig from '@/config';
  const { apiBaseUrl } = AppConfig;
  export default{
      name:'ResponseCard',
      props:{
        response:{
            type:Object,
            required:true
        },
        index:{
          type:Number,
          required:true
        },
      },
      data(){
          return{
            formLink: apiBaseUrl,
            forms:[],
            passData:{
               status: !this.response.isActive,
               id: this.response.formId,
            }
          }
      },
       methods:{
           changeStatus(){
               this.$emit("fromChild", this.passData);
           },
           showTable(){
             this.$emit("showTable", this.response.participantsResponses);
           },
      },
  };
</script>
<style scoped>
.Card{
    padding:0 1em 1em;
    border:1px solid black;
    background-color:rgb(200,200,130);
}
.Form-name ,.View-response{
    display:flex;
    justify-content:space-between;
}
.Count-response,.Form-name>.Status{
    display:flex;
    flex-direction:row;
    align-items:center;
}
.Status span{
  padding:3px;
}
.status-active{
  background-color:green;
  color:white;
}
.status-inactive{
  background-color:red;
  color:white;
}
.Count-response{
  align-self:center;
}
.btn{
  background-color:rgb(150,200,230);
}
</style>