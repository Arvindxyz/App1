<template>
  <div class="Login-page">
   <div id="Login-div">
      <h1 class="Title">Forms app</h1>
      <form id="Login-form" name="loginform" 
        v-on:submit.prevent="login()"        
      >
        <label for="LoginEmail">Enter your email</label>
        <input
          class="Login-input"
          id="LoginEmail"
          type="email"
          placeholder="Email"
          name="LoginEmail"
          v-model="credentials.email"
          required
          autofocus
        />
        <label for="LoginPassward">Enter your password</label>
        <input
          class="Login-input"
          id="LoginPassward"
          type="password"
          placeholder="password"
          name="LoginPassward"
          v-model="credentials.passward"
          required
        />

        <button 
          id="Login-btn"
          class="Login-input"
          type="submit"
        >
          login
        </button>

      </form>
      <div id="Small-font">
        <!--<a href="" alt="Signin" id="Forgot-passward-btn">forgot password</a>-->
        <router-link to="/signup">New User - signup</router-link>
      </div>
    </div>
   </div> 
</template>
<script>

   export default{
       name:'Login',
       data(){
         return {
            status: 'LOADIND',
            credentials:{
              email:'',
              passward:''
            },
         };
       },
       methods: {
            login() {  
               //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
                const check= this.credentials.passward;
                if(check.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)){
                      this.$store.dispatch( 'login',this.credentials )
                       .then(this.$router.push({name: 'forms'}))
                       .catch(error=>{alert(error.message)})
                      return;
                    }
                 else{
                   this.status= 'ERROR';
                   alert('passward should have minimum 1 upper character, 1 lower character, 1 digit, 1 special character and minimum 8 characters.');
                   this.$router.go(0);
                   return;
                 }   
            },
           
        }
   };
</script>
<style scoped>
#Login-div {
  padding:1em;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.Title {
  text-align: center;
}
label{align-self:flex-start;}
#Login-form {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
}
.Login-input {
  margin-bottom: 1em;
  padding: 5px;
}
input[type="password" i] {
    -webkit-text-security: disc !important;
}
#Login-btn{
  background-color: rgb(200, 200, 200);
  text-align: center;
  border-radius: 20px;
}
#Login-btn:hover, #Signup-btn:hover {
    cursor: pointer;
  }
#Login-btn:active, #Signup-btn:active {
    color: blue;
  }
#Small-font {
  font-size: 13px;
  display: flex;
  justify-content: center;
}
#Forgot-passward-btn {
}
#Close-btn{
  font-size: 2em;
  margin-top: 0;
  margin-right: 0;
  padding: 0 10px;
  font-weight: bold;
  position: absolute;
  top:0;
  right:0;         
}
#Close-btn:hover{
  color:white;
  background-color: red;
}
@media (min-width: 700px) {
  #Login-div {
    margin: auto;
    max-width: 700px;
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