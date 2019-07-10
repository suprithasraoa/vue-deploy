<template >
<div class="sticky">
	  <div class="container">

	        </div>
			     </div>
	        </template>    
	
	<script>
	import firebase from "firebase";
	export default {
    name: "AppHeader",
     data() {
    return {
      loginname:""
    }
   },
	  mounted: function() {
	    /* this.$nextTick(() => {
	        this.changeSelect(); 
		}); */
	//alert("h");
	var ppg = this.$cookie.get("ppg");
	if(ppg=="home" || ppg=="")
		 document.getElementById("myalign").setAttribute("data-aos", "fade-down");
	 //document.getElementById("myalign").removeAttribute("data-aos");
	 
		var cookieval = this.$cookie.get("isloginName");
		//alert(cookieval);
		 var location = this.$cookie.get("location");
  
    document.getElementById(
      "showCity"
    ).innerHTML = location;
	    // alert(cookieval);
	 //alert(cookieval);
	    if(cookieval!=null)
	    {
	        document.getElementById("alogin").style.display="block";
	               document.getElementById("blogin").style.display="none";
     //   document.getElementById("userName").innerHTML = cookieval;
     this.loginname = cookieval;
	    }
	   
	    },
	    methods:
	    { 
			setpage()
			{
			//	alert("yes");
this.$cookie.set("ppg", "home", { expires: "1D" });
 this.$router.push("/home"); 
			},
	       logout()
	    {
	      firebase.auth().signOut().then(()=> {
	      document.getElementById("alogin").style.display="none";
	               document.getElementById("blogin").style.display="block";
      //  document.getElementById("userName").innerHTML = "";
      this.loginname="";
	      this.$cookie.delete("isloginName");
	
	  // Sign-out successful.
	}).catch(function(error) {
	  // An error happened.
	});
	    },
	    fnMenu()
	    {
	
	    },
	        openNav() {
	     if (window.matchMedia("(min-width: 480px)").matches) {
	         document.getElementById("mySidenav").style.width = "25%";
	    }
	else
	{
	    document.getElementById("mySidenav").style.width = "230px";
	}
	//	document.getElementById("main").style.marginLeft = "250px";
		var element = document.getElementById("back-blur");
	  element.classList.add("back-blur");
	  document.body.style.backgroundColor = "black";
	},
	
	closeNav() {
	  document.getElementById("mySidenav").style.width = "0";
	 // document.getElementById("main").style.marginLeft= "0";
	 var element = document.getElementById("back-blur");
	 element.classList.remove("back-blur");
	  document.body.style.backgroundColor = "black";
	}
	    }  
	
	};
	</script>  
	        <style>
	@import "./../assets/css/style.css";
	</style>

