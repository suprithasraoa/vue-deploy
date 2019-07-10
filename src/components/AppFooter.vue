    <template>
  <!-- Footer section
  ==================================================-->
  <footer>
    <div class="container">
      <b-row>
      
        <b-col class="col-md-6 nopad">
          <b-row>
            <b-col class="ftul">
              <span>Company</span>
              <ul class="wow fadeInUp nopad" data-wow-delay="0.6s">
                <li>
                  <router-link to="/about">About</router-link>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                   <router-link to="/terms-conditions">Terms & Conditions</router-link>
                </li>
              
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
            </b-col>
            <b-col class="ftul">
              <span>Contact</span>
              <ul class="wow fadeInUp nopad" data-wow-delay="0.6s">
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Media</a>
                </li>
               
              </ul>
            </b-col>
            <b-col class="ftul">
              <span>Social</span>
              <ul class="wow fadeInUp nopad" data-wow-delay="0.6s">
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

    
<script>
export default {
  name: "AppFooter",
   methods:
	    { 
			setpage()
			{
			//	alert("yes");
this.$cookie.set("ppg", "home", { expires: "1D" });
 this.$router.push("/home"); 
      },
      },
};
</script>