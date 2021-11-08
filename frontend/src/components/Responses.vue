<template>
 <div class="Response-page"> 
    <AppNavbar/>
    <div>
      <div id="Response-area" >
       <div class="LOADING" v-if="status === 'LOADING'">LOADING...</div>
       <div  v-else-if="status==='LOADED'">
            <div 
                v-for="(response, index) in responses"
                :key="response.id" 
                id=""
                class="Response-column "
              >
                <ResponseCard 
                  :response="response"  
                  :index="index"
                  @fromChild="changeStatus"
                  @showTable="showTable"
                />
            </div>
           <div v-if="isShow" class="View-table"> 
              <span class="Close" @click="closeBtn">&times;</span>
              <div v-if="tableData.length==0">No response</div>
              <div v-else class="Table-container">
                <Table :tableData="tableData"></Table>
              </div>
           </div>   
       </div>
       <div v-else>{{error.message}}</div>
      </div>
    </div>     
  </div>
</template>
<script>
  import Navbar from '@/components/Navbar';
  import ResponseCard from './ResponseCard.vue';
  import Table from '@/components/Table/Table.vue';
  import {getResponses} from '../services/getResponses.js';
  import {changeFormStatus} from '../services/changeFormStatus.js';
  export default{
    name:'Response',
    components:{
       AppNavbar:Navbar,
       ResponseCard,
       Table,
    },
    data(){
        return{
            status:'LOADING',
            error:null,
            responses:[],
            isShow: false,
            tableData:[],
        }
    },
   async created(){
         try{
              const Rdata= await getResponses();
              this.status = 'LOADED';
              console.log(Rdata);
              this.responses = Rdata.responses;
              console.log(this.responses);
              console.log(typeof(this.responses));
          }
          catch(error){
              this.error = error;
          }
    },
    methods:{
        showform(){
          let size= this.forms.length;
          let l= this.stringtohtml(size-1);
          console.log("in showform: ",l);
          let v= this.forms[size-1].formbody;
          document.getElementById('FormDisplay').innerHTML=v.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'); 
        },
       async changeStatus(value){
          try{
              const data= await changeFormStatus(value);
              this.$router.go(0);
              console.log(data);
          }catch(error){
            console.log(error.message);
          }  
        },
        showTable(value){
          this.tableData= value;
          this.isShow= !this.isShow;
          console.log('value from child: ',this.tableData);
        },
        closeBtn(){
          this.isShow= false;
        },
    }     
  };  
</script>
<style scoped>
.LOADING{
      background-color:blue;
      position:absolute;
      left:50%;
      top:50%;
      transform: translate(-50%, -50%);
  }
  .Response-area{
    margin:;
    padding:0 1em;
    background-color:;
    height:;
  }
 .View-table{
    padding:2em 1em;
    background-color:rgb(200,150,200);
    width:90%;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
 }
 .Table-container{
    overflow: scroll;
 }
 table{
    padding:1em;
    background-color:rgb(230,150,230);
    display:table;
    width:100%;
    box-shadow:none;
    border:1px solid black;
    overflow: scroll;
  }
  .Close{
    padding:0 10px;
    position: absolute;
    top:0; right:0;
    font-size:1.5em;
    font-weight:bold;
  } 
  .Close:hover{
    cursor:pointer;
    background-color:red;
  }
   @media (min-width: 700px) {
     .Response-area{
        display:flex;
        flex-flow:row wrap;
      }
      .Response-column{
        margin:0 auto 5px;
        width:90%;
      }
   }  
</style>