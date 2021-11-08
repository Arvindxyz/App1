<template>
   <div  id="mypage">
      <div class="Panel">
          <div class="SelectInput">
            <div class="row">
              <label for="select" class="">Select</label>
              <select 
                  class="form-control" 
                  name="select" 
                  id="select" 
                  @change="addinput"
                  v-model="addInput"
              >
                <option value="">select input type</option>
                <option value="Text">Text</option>
                <option value="Email">Email</option>
                <option value="Number">Number</option>
              </select>
            </div>
           <!--<span @click="readonly" class="btn">make readonly</span>
              <span @click="htmltostring" class="btn">text htmltostring</span>
           -->
           <span @click="sendForm" class="btn">Send form</span>
         </div>         
         <div class="FormLink"><strong>Share this form:</strong> {{formLink}}</div> 
      </div>
      <div id="ParentFormContainer">
          <div class="flex"  ref="container" id="parentForm">
            <div class="Form-group">
                <div class="FormCreator" >
                    <input
                        type="type" 
                        class="UserEdit" 
                        placeholder="Title of form" 
                        id="FormHeading"
                        v-model="form.name"
                        required: true
                    >
                    <div class="UserEdit" contentEditable="true">Description</div>
                </div>
            </div>
          </div>
      </div>    
   </div>
</template>
<script>
 import {comText, comNumber, comEmail} from '@/inputComponents.js';
 import {addForm} from '../services/addForm.js';
  export default{
      name:'CreateForm',
      data(){
          return{
            addInput:'',
            form:{
              name:'',
              formbody:''
            },
            formLink:'',
            text:0,
            email:0,
            number:0,
          }; 
       },
      methods:{
          addinput(){
              switch(this.addInput){
                  case 'Text':
                   console.log("type of parent form:", typeof(parentForm),", parentForm is: ",document.getElementById("parentForm"));
                    try{
                         /*
                        document.getElementById("parentForm").appendChild(ShortText);
                        */
                        this.text++;
                        const insText= new comText({ propsData:{name: 'text'+this.text}});                       
                        insText.$mount();
                        this.$refs.container.appendChild(insText.$el);
                    }catch(error){
                        console.error(error.message);
                    } 
                    break;
                  case 'Email':
                    try{
                        this.email++;
                        const insEmail= new comEmail({propsData:{name: 'email'+this.email}});
                        insEmail.$mount();
                        this.$refs.container.appendChild(insEmail.$el);
                      }catch(error){
                        console.error(error.message);
                      } 
                    break;
                  case 'Number':
                      try{
                        this.number++;
                        const insNumber= new comNumber({propsData:{name: 'number'+this.number}});
                        insNumber.$mount();
                        this.$refs.container.appendChild(insNumber.$el);
                      }catch(error){
                        console.error(error.message);
                      } 
                    break;  
                  default: 
                    console.log("Invalid");
               }
           },
         readonly(){
            const UserElements= document.getElementsByClassName('UserEdit');
            const ParticipantsElements= document.getElementsByClassName('ParticipantsEdit');
            for(let i=0; i<UserElements.length;i++)
             {
                UserElements[i].setAttribute('readonly', 'true');
              }
            for(let i=0; i<ParticipantsElements.length; i++)
              {
                ParticipantsElements[i].removeAttribute('readonly', 'false');
              }
          },
       /*enableEdit(){
           const UserElements= document.getElementsByClassName('UserEdit');
           for(let i=0; i<UserElements.length;i++){
                UserElements[i].setAttribute('contentEditable', 'true');
              }
          },*/
         disableEdit(){
          const UserElements= document.getElementsByClassName('UserEdit');
          for(let i=0; i<UserElements.length;i++){
             UserElements[i].setAttribute('contentEditable', 'false');
           }
         },
         async sendForm(){
            try { 
              if(this.form.name==''){throw(this.error='title of form is required');}
              this.disableEdit();
              this.htmltostring();
              const ourFormAndLink = await addForm(this.form);
              const sendForm= ourFormAndLink.updatedForm;
              this.formLink= ourFormAndLink.link;
              console.log('sent data is:', sendForm );
            } catch( error ) {
                alert( error);
            }
          },
          htmltostring(){
              const fbcontainer= document.getElementById('ParentFormContainer');
              const v= fbcontainer.getElementsByTagName('div')[0].innerHTML;
              this.form.formbody= String(v).replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
              console.log('parentForm element: ',v);
              console.log(typeof(this.form.formbody));
              console.log('formbody: ',JSON.stringify(this.form.formbody));
          },
          
      }
  };
</script>
<style >
  *{
    box-sizing: border-box;
  }
  #mypage{
    padding:0 1em 1em;
   background-color:rgb(0,0,250);
  }
  .SelectInput,.row{
      margin:5px 10px;
      display: inline-block;
      text-align: left;
  }
   #parentForm{
    border:1px solid rgb(200,250,250);
    padding:1em;  
    background-color:rgb(0,250,250);
  }
  #FormHeading{
    Font-size:2em;
    text-align:center;
  }
  .Form-group{
    margin:0 auto;
    padding:1em;
    border:1px solid black;
    max-width:700px;
    background-color:aqua;
  }
  .UserEdit{
    padding:10px;
    background-color:white;
  }
 #parentForm input{
    margin:10px 0;
    padding:10px;
    width:100%;
    border:none;
  }
  .FormCreator input{
     margin:0 10px;
  }
  .btn{
    margin:5px;
    padding:0 3px;
    border:1px solid black;
    color:black;
    background-color:rgb(200,180,190);
  }
  .btn:hover{
    cursor:pointer;
  }
  .btn:active{
    background-color:rgb(250,200,150);
  }
  .FormLink{
    padding:1em;
    background-color:rgb(200,250,250);
  }
</style>