<template>
<div>
  <AppNavbar/>
 <div id="Form-page">
     <div class="YourForms">
        <div 
            v-for="(form , index) in forms"
            :key="form.id"
            class="FormC"
        >
            <FormCard :form="form" :index="index"/>
        </div><br>
     </div>
     <span id="YourForms-label">Your forms </span>
     <router-link to="/createform" active-class="active" exact>new form</router-link>
     <div id="FormDisplay" ></div>
     <router-view/>
  </div>
 </div>     
</template>
<script>
//import CreateForm from './CreateForm.vue';
import Navbar from '@/components/Navbar';
import FormCard from './FormCard.vue';
import {getForms} from '../services/getForm.js';
export default{
    name:'Form',
    components:{
        FormCard,
        AppNavbar: Navbar,
    },
    data(){
        return{
            status:'LOADING',
            error:null,
            forms:[],
            isshow: false,
            gethtml:''
        }
    },
   async created(){
            try{
              const data= await getForms();
              this.status = 'LOADED';
              console.log(data);
              this.forms = data.forms;
              console.log(this.forms);
              console.log(typeof(this.forms));
            }
            catch(error){
              this.error = error;
            }
    },
    methods:{
        showforms(){
          let size= this.forms.length;
          let l= this.stringtohtml(size-1);
          console.log("in showform: ",l);
          let v= this.forms[size-1].formbody;
          document.getElementById('FormDisplay').innerHTML=v.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'); 
        },
        stringtohtml(size){
          console.log("Form before stringtohtml function:", this.forms[size-1].formbody);
          let k= document.createElement('form');
          let v= this.forms[size-1].formbody;
          let formhtml= v.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
          k.innerHTML= formhtml;
          console.log("Form in stringtohtml after conversion: ",k);
          return k; 
        },
        showForm(){
            let size= this.forms.length;
          let l= this.stringtohtml(size-1);
          console.log("in showform: ",l);
          let v= this.forms[size-1].formbody;
          document.getElementById('FormDisplay').innerHTML=v.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'); 
        },
    }      
}
</script>
<style scoped>
.YourForms{
  padding:1em 5px 10px;

  border:;
}
#YourForms-label,a{
  padding:0 5px 5px;
}
.YourForms,#YourForms-label{
  background-color:aqua;
}
 #Form-page{
   padding:0 1em;
 }
 input{
    margin:10px;
    padding:10px;
    width:90%;
    border:none;
  }
  .FormCreator input{
     margin:0 10px;
  }
.FormC:nth-child(2){
    margin-left:;
}
.FormC{
    margin:0 3px;
    display:inline-block;
    border:1px solid black;
    overflow:ellipsis;
}
.Show:hover{
    cursor:pointer;
}
a{
  background-color:blue;
  color:white;
}
</style>