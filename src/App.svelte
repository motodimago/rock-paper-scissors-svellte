<script>
  import Button from './components/Button.svelte';

  const Rock = 'Rock';
  const Paper = 'Paper';
  const Scissors = 'Scissors';
  
  const Win = 'Win';
  const Draw = 'Draw';
  const Lose = 'Lose';

  let result = "";
  let enemyHand = Rock;
  let myHand = Rock;

	function handleClick(hand) {
    myHand = hand;
    const rnd = Math.floor(Math.random() * 3)
    enemyHand = [Rock, Paper, Scissors][rnd];
    result = getResult(myHand, enemyHand);
  }
  
  function getResult(myHand, enemyHand) {
    if (myHand === enemyHand) {
      return Draw;
    }
    if (myHand === Rock && enemyHand === Scissors) {
      return Win;
    }
    if (myHand === Paper && enemyHand === Rock) {
      return Win;
    }
    if (myHand === Scissors && enemyHand === Paper) {
      return Win;
    }
    return Lose;
  }
</script>

<main>
  <div class="enemy"><img src="img/{enemyHand}.svg" alt="enemy"></div>
  <div 
    class="result" 
    class:win="{result === Win}"
    class:draw="{result === Draw}"
    class:lose="{result === Lose}"
  >{result}</div>
  <div class="mine"><img src="img/{myHand}.svg" alt="mine"></div>
  <div class="buttons">
    <Button on:click={() => handleClick(Rock)} name={Rock} />
    <Button on:click={() => handleClick(Paper)} name={Paper} />
    <Button on:click={() => handleClick(Scissors)} name={Scissors} />
  </div>
</main>

<style>
.buttons {
  width: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.result {
  font-weight: 900;
  font-size: 50px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.win {
  color: #9DCC78;
}
.lose {
  color: #CC8E78;
}
.draw {
  color: #999999
}

.enemy,
.mine {
  width: 160px;
  height: 160px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.enemy {
  transform:rotate(180deg);
}
</style>