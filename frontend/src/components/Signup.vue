<template>
  <div class="Container">
    <div id="Signup">
      <h1 class="Title">Forms app</h1>
      <form 
        id="Signup-form"
        name="signup-form" 
        v-on:submit.prevent="signup()"
      >
        <label for="Signup-name">Enter your name</label>
        <input
          id="Signup-name"
          class="Login-input"
          type="text"
          name="name"
          placeholder="name"
          v-model="newUserCredentials.name"
          required
        />
        <label for="Signup-email">Enter your email</label>
        <input
          id="Signup-email"
          class="Login-input"
          type="email"
          name="email"
          placeholder="Email"
          v-model="newUserCredentials.email"
          required
        />
        <label for="Signup-passward">Enter password</label>
        <input
          id="Signup-passward"
          class="Login-input"
          type="password"
          name="passward"
          placeholder="password"
          v-model="newUserCredentials.passward"
          required
        />
       <!-- <label for="Signup-Cpassward">Confirm password</label>
        <input
          id="Signup-Cpassward"
          class="Login-input"
          type="password"
          name="Cpassward"
          placeholder="Confirm password"
        />-->
        <button 
          type="submit" 
          id="Signup-btn" 
          class="Login-input"
          @click="signup"
        >
          Signup
        </button>
      </form>
     <div id="Small-font">
        <router-link to="/">Go to login</router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
//import { register } from '@/services/signup';
export default {
  name: 'Signup',
  data(){
      return{
         status: 'LOADIND',
         newUserCredentials:{
              name:'',
              email:'',
              passward:''
          }
      };        
   },
   methods:{
       signup(){ 
            this.$store.dispatch( 'register', this.newUserCredentials )
                .then( this.$router.push({name: 'forms'}) )
                .catch( error => {
                      alert( error.message );
                    });
            }
           
   },
};
</script>
<style scoped>
.Container{
  margin:0 auto;
}
.Title {
  text-align: center;
}
label{align-self:flex-start;}
#Signup{
  padding:1em;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
#Signup-form {
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  background-color:;
}
#Signup-btn {
  background-color: rgb(200, 200, 200);
  text-align: center;
  border-radius: 20px;
}
.Login-input {
  margin-bottom: 1em;
  padding: 5px;
}
input[type="password" i] {
    -webkit-text-security: disc !important;
}
#Signup-btn {
  background-color: rgb(200, 200, 200);
  text-align: center;
  border-radius: 20px;
}
#Signup-btn:hover {
    cursor: pointer;
  }
#Signup-btn:active {
    color: blue;
  }
a {
  text-decoration: none;
 } 
a:hover {
    cursor: pointer;
 }
a:action {
    color: aquamarine;
 }
#Small-font {
  font-size: 13px;
  display: flex;
  justify-content: center;
}
@media (min-width: 700px) {
   #Signup {
    margin:0 auto; 
    max-width:700px;
  }
}
.row{
  font-weight: bold;
  background-color:red;
  position: absolute;
  top:50%;
  right:50%;
  transform:translate(-50%,-50%);  
}
</style>
