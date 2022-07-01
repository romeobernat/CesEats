<template>
   <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <br><br><br><br><br><br><br><br><br><br><br>
        <br>
            <UpdateUserComponent/>
        <br>
            <DeleteUserComponent/>
        <br>
        <br>
      </div>
    </section>
    <br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import DeleteUserComponent from "../../components/Gestion_compte/DeleteUserComponent.vue";
import UpdateUserComponent from "../../components/Gestion_compte/UpdateUserComponent.vue";

export default {
  components:{
   DeleteUserComponent,
   UpdateUserComponent
  }
};
</script>

<style lang="scss" scoped>
.hero-text{
  text-align: center;
}
.hero {
  //background: url("../../assets/login.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size:cover;
  position: relative;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(46, 155, 155);
    h4 {
      text-transform: uppercase;
      font-size: 22px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 50px;
      @media (min-width: 550px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 365px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: #fff;
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>