<template>
  <div id="app">
    <div>
      <b-button>Button</b-button>
      <b-button variant="danger">Button</b-button>
      <b-button variant="primary">Button</b-button>
      <b-button variant="outline-primary">Button</b-button>
      <b-button variant="custom1">Button</b-button>
    </div>

    <div class="custom-element">test</div>
    <div class="box-parent">
      <div class="box">
        <b-card title="Test 1" class="item">
          <b-card-text>Test 1</b-card-text>
        </b-card>
        <b-card title="Test 2" class="item">
          <b-card-text>Test 1</b-card-text>
        </b-card>
        <b-card title="Test 3" class="item">
          <b-card-text>Test 1</b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
// https://designer.gravit.io/
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90
export default {
  name: "app",
  created() {
    console.log("me");
    console.log(process.env);
    console.log(process.env.NODE_ENV, process.env.VUE_APP_SECRET);
  }
};
</script>

<style scoped>
.box-parent {
  background-color: #333333;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.box {
  width: 500px;
  height: 700px;
  background-color: #dfdfdf;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.item {
  width: 150px;
  height: 100px;
  background-color: #ffffff;
  border: 2px solid;
  /* flex-basis: auto; */
  /* flex-grow: 1; */
  /* flex-shrink: */

  /* flex: 1 1 auto; */
}
</style>
