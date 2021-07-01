<script lang="ts">
  import Button from './components/Button.svelte';
  import type { BattleResultKind } from './models/Battle';
  import Game from './models/Game';
  import { ALL_HandKind } from './models/Hand';
  import type { HandKind } from './models/Hand';
  import UgClient from './models/UgClient';

  const ug = new UgClient();
  const game = new Game();
  let isFirstPlay = true;
  let result: BattleResultKind;
  let myHand: HandKind = 'rock';
  let enemyHand: HandKind = 'rock';

  function handleClick(hand: HandKind): void {
    myHand = hand;
    result = game.play(hand);
    ug.pushEvent(result);

    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: 'virtualPageview',
      pageUrl: 'https://rps-svellte.netlify.app/' + hand,
      pageTitle: 'Select ' + hand,
    });
    enemyHand = game.getEnemyHand();
    if (isFirstPlay) {
      ug.pushCv('play');
      isFirstPlay = false;
    }
  }
</script>

<main>
  <div class="enemy"><img src="img/{enemyHand}.svg" alt="enemy" /></div>
  <div class="result" class:win={result === 'win'} class:draw={result === 'draw'} class:lose={result === 'lose'}>
    {#if result}{result}{/if}
  </div>
  <div class="mine"><img src="img/{myHand}.svg" alt="mine" /></div>
  <div class="buttons">
    {#each ALL_HandKind as hand}
      <Button on:click={() => handleClick(hand)} name={hand} />
    {/each}
  </div>
</main>

<style>
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 280px;
  }

  .result {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    font-weight: 900;
    font-size: 50px;
  }
  .win {
    color: #9dcc78;
  }
  .lose {
    color: #cc8e78;
  }
  .draw {
    color: #999999;
  }

  .enemy,
  .mine {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 160px;
    height: 160px;
  }

  .enemy {
    transform: rotate(180deg);
  }
</style>
