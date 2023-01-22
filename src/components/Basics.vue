<script>
export default {
  name: "Hello World",
  data() {
    return {
      //Directives starter
      mustacheSyntax: "Mustache",
      name: "Batman-",
      name2: "Superman",
      html: "<b>Bold Superhero XD</b>",
      disabled: false,
      btn: "btn",
      red: "red",
      isBlue: "blue",
      isPink: true,
      isBold: true,
      inlineStyle: { backgroundColor: "orange", opacity: 0.4 },
      color: true,
      //conditional directives
      n1: 1,
      batzy: "bruce",
      tony: "tony",
      superhero: { n1: "Batman", n2: "Ironyy" },
      show: true,
      //list
      myNiggas: ["Jabran Tahir", "Sarim Chaudhary", "Zaryab Khan", "Hamza"],
      details: { name: "X", role: "Sigma" },
      //methods
      baseSumVal: 100,
      //event handlers
      val: "Tony",
      c: 1,
      formdata: { name: "", description: "", age: 0 },
    };
  },
  methods: {
    printSum(a, b) {
      return this.baseSumVal + a + b;
    },
    incByNum(num, e) {
      this.c += num;
      console.log(e);
    },
    consoleInputVal(e) {
      console.log(e.target.value);
    },
    sub(e) {
      e.preventDefault();
      console.log(this.formdata.name);
    },
  },
};
</script>

<template>
  <!-- <div>
    <h3>Binding</h3>
    <h1>{{ mustacheSyntax }}</h1>
    <h1 v-text="name + name2"></h1>
    <span v-html="html"></span>
    <button v-bind:id="btn" v-bind:disabled="disabled">
      Helo I am button XE
    </button>
    <h1 v-bind:class="red">Red1</h1>
    <h1 v-bind:class="red">Red2</h1>
    <h1 v-bind:class="isBlue && 'blue font'">Blue Agent</h1>
    <h1 v-bind:class="[isPink && 'pink', isBold && 'move']">Motion</h1>
    <h1
      v-bind:class="{
        pink: isPink,
        font: 'font',
      }"
    >
      z
    </h1>
    <p
      v-bind:style="{
        ...inlineStyle,
      }"
    >
      Inline Stylings...
    </p> -->
  <!-- <button onclick="switchColor()">Switch backgroundColor</button> -->
  <!-- <p :id="color && 'mod'">Color</p>
  </div> -->

  <!-- <h2>PropPassed:{{ typeof counter }}</h2> -->
  <div>
    <h1>Conditional Rendering..</h1>
    <div>
      <p v-if="n1 === 100">100</p>
      <p v-else>lolx</p>
    </div>
    <div>
      <p v-if="batzy === 'bruce'">{{ superhero.n1 }}</p>
      <p v-else-if="batzy === 'iron'">{{ superhero.n2 }}</p>
      <p v-else>{{ `Defaulter` }}</p>
    </div>
  </div>
  <div v-show="show" :class="red">Red</div>
  <h1>List Rendering</h1>
  <div>
    <ul>
      <li
        v-show="nigga !== 'Hamza'"
        v-for="(nigga, index) in myNiggas"
        :key="nigga"
        :style="{ color: nigga !== 'Zaryab Khan' ? 'red' : 'orange' }"
      >
        {{ index + nigga }}
      </li>
    </ul>
    <!-- <div v-for="d in details" :key="d.role">
      <h2>{{ d.name }}</h2>
      <h2>{{ d.role }}</h2>
    </div> -->
    <h1 v-for="(d, k, i) in details" :key="d">{{ i + " " + k + " " + d }}</h1>
  </div>
  <div>
    <h2>{{ printSum(1, 2) }}</h2>
  </div>
  <div>
    <h1>Event</h1>
    <h1 v-on:click="c = c + 1">{{ c }}</h1>
    <h1 v-on:click="val = val === 'Tony' ? 'Stark' : 'Tony'">{{ val }}</h1>
    <button v-on:click="incByNum(100, $event)">{{ val }}</button>
    <button @click="() => incByNum(100)">{{ val }}</button>
    <input @input="consoleInputVal" />
  </div>
  <div>
    Form Handling
    <h1>{{ formdata }}</h1>
    <form @submit="sub">
      <input placeholder="name" v-model.trim="formdata.name" />
      <textarea placeholder="description" v-model="formdata.description" />
      <input type="number" v-model.number="formdata.age" />
      <button>S</button>
    </form>
  </div>
</template>

<style scoped>
#mod {
  transform: translateX(-300px);
  background: #23d887;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.font {
  font-size: 5rem;
}
.move {
  transform: translateX(200px);
}
.pink {
  background-color: pink;
}
</style>
