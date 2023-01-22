<template>
  <h1>Computed Properties</h1>
  <h2>{{ fullname }}</h2>
  <button @click="prices.push(50)">add to prices arr</button>
  <h2>Total for laptops is : {{ total }}</h2>
  <h2>List</h2>
  <p v-for="e in expensiveItems" :key="e">{{ e }}</p>
  <h2>Getters and setters in computed properties</h2>
  <button @click="changeName()">Change</button>
  <h2>Watchers...</h2>
  <p>{{ volume }}</p>
  <button @click="volume += 1">increase volume</button>
  <input v-model="movie" />
  <input v-model="movieCreds.movieRating" />
  <button @click="movies.push('Wonder Woman')">Add</button>
</template>
<script>
export default {
  name: "ComputedProps",
  data() {
    return {
      fname: "Tatheer ",
      lname: "Mehdi",
      prices: [100, 100, 200, 1000, 2000],
      // full:'Tatheer Mehdi'
      volume: 0,
      movie: "Batman",
      movieCreds: { movieRating: 0 },
      movies: ["Batman", "Superman"],
    };
  },
  methods: {
    changeName() {
      this.fullname = "Clark kenk";
    },
  },
  computed: {
    //getters
    fullname: {
      get() {
        return `${this.fname + this.lname}`;
      },
      set(val) {
        this.fname = val.split(" ")[0];
        this.lname = val.split(" ")[1];
      },
    },
    total() {
      return this.prices.reduce((accum, val) => accum + val, 0);
    },
    expensiveItems() {
      return this.prices.filter((p) => p > 500);
    },
    //setters -setting computed props
  },
  watch: {
    volume(newVal, oldVal) {
      if (newVal >= 5) {
        alert("Hearing can be damaged " + oldVal + " is fine.");
      }
    },
    movie: {
      handler(val) {
        console.log(val, "is updated");
      },
      immediate: true,
    },
    movies: {
      handler(val) {
        console.log(val.map((v) => v));
      },
      deep: true,
    },
    movieCreds: {
      handler(val) {
        console.log(typeof val);
      },
      deep: true,
    },
  },
};
</script>
