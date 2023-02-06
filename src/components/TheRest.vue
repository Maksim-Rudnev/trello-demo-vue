<template>
  <div class="game-container">
    <div class="snake" v-for="(block, index) in snake" :key="index"
      :style="{ left: block.x + 'px', top: block.y + 'px' }"
    />
    <div class="food" :style="{ left: food.x + 'px', top: food.y + 'px' }"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snake: [{ x: 0, y: 0 }],
      food: { x: 100, y: 100 },
      direction: 'right',
      width: 800,
      height: 800,
    };
  },
  mounted() {
    document.addEventListener('keydown', this.changeDirection);
    setInterval(this.move, 70);
  },
  methods: {
    move() {
      const newHead = { ...this.snake[0] };
      if (this.direction === 'right') newHead.x += 10;
      if (this.direction === 'left') newHead.x -= 10;
      if (this.direction === 'up') newHead.y -= 10;
      if (this.direction === 'down') newHead.y += 10;

      if (newHead.x >= this.width || newHead.x < 0 || newHead.y >= this.height || newHead.y < 0) {
        window.location.reload();
      }

      if (newHead.x === this.food.x && newHead.y === this.food.y) {
        this.generateFood();
      } else {
        this.snake.pop();
      }

      this.snake.unshift(newHead);
    },
    changeDirection(event) {
      if (event.keyCode === 37 && this.direction !== 'right') this.direction = 'left';
      if (event.keyCode === 38 && this.direction !== 'down') this.direction = 'up';
      if (event.keyCode === 39 && this.direction !== 'left') this.direction = 'right';
      if (event.keyCode === 40 && this.direction !== 'up') this.direction = 'down';
    },
    generateFood() {
      this.food = {
        x: Math.floor(Math.random() * (this.width / 10)) * 10,
        y: Math.floor(Math.random() * (this.height / 10)) * 10,
      };
    },
  },
};
</script>

<style>
.game-container {
  margin: 30px auto;
  width: 800px;
  height: 800px;
  position: relative;
  background-color: #ddd;
}

.snake,
.food {
  width: 10px;
  height: 10px;
  position: absolute;
  background-color: green;
}
.food {
  background-color: red;
}
</style>
