<template>
  <div class="header">
      <nav id="Navigation-bar">
        <div id="Mobile-user">
          <h1>My meetings</h1>
          <a href="#Navigation-menu" id="Navigation-menu-btn">=</a>
        </div>
        <div id="Navigation-menu">
          <div id="Page-links">
            <ul>
               <li>
                 <router-link to="/forms" active-class="active" exact>Forms</router-link>
               </li> 
               <hr>
               <li>
                 <router-link to="/responses" active-class="active" exact>Responses</router-link>
               </li>  
                <hr>
               <li>
              <!-- <router-link to="/results" active-class="active" exact>Results</router-link> -->
               </li>
               <hr>
             </ul>  
          </div>
          <div id="User-menu">
            <ul>
              <li>
                <span id="Present-user">Hi : {{email}}</span>
              </li>
              <li>
                <span id="logout-btn" @click="logout()">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
  export default{
    name: 'Navbar',
    computed:{
      email() {
         return this.$store.state.auth.email;
      }
    },
   methods: {
        logout() {
            this.$store.dispatch( 'logout' )
                .then( () => this.$router.push( { name: 'login' } ) );    
        }
    }
  };
</script>
<style scoped>
      .header{
         margin:0;
         padding:0;
        }
      #Navigation-bar {
        background-color: rgb(150, 150, 150);
        padding: 2em;
        padding-bottom: 10px;
        width: 100%;
        position:fixed ;
        z-index:1;
      }
      #Mobile-user {
        padding: 1em;
        border-radius: 1em;
        display: flex;
        justify-content: space-between;
      }
     
     #Navigation-menu-btn {
        padding: 1em;
        border-radius: 10px;
        align-self: center;
        background-color: rgb(160, 160, 160);
      }
     #Page-links, #User-menu {
        display: block;
        text-align: center; 
      }
     ul{
        margin:0;
        padding:0;
        list-style:none;
      }
     li { 
        color: black;
        text-decoration: none;
        text-align:center;
      }
    #Navigation-menu li:hover{
         background-color:aqua;
      }    
    #Page-links router-link:hover,
    #logout-btn {
        cursor: pointer;
      }
     @media (max-width:699px){
       .header{
          height: 140px;
        }
        #Navigation-menu {
            display: none;
            background-color:rgb(160,160,160); 
          }
        #Navigation-menu:target{
            display: flex;
            flex-flow: column nowrap;
          }
        #Present-user{
          display: none;
        }  
      }
      @media (min-width: 700px) {
        .header{
          margin-bottom:1em;
          height: 50px;
        }
        hr{/* horizontal line in mobile view*/
          display:none;
        }
        #Navigation-menu {
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
        }
        #Mobile-user {
          display: none;
        }
        #Navigation-menu ul {
          margin:0;
          padding:0;
          display: flex;
          flex-flow: row nowrap;
          background-color:;
        }
        #Page-links ul li:first-of-type{
          padding-left:0; 
        }
        li{
          padding: 0 1em;
        }
        #Page-links{
          margin:0;
          padding-bottom:0;
        }
      }
</style>