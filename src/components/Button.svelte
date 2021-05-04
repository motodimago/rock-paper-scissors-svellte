<script lang="ts">
  import type { HandKind } from '../models/Hand';
  export let name: HandKind;
</script>

<div on:click>
  <img src="/img/{name}.svg" alt="hand" />
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    border: 4px solid #1c313a;
    border-radius: 50%;
    background: #445963;
    cursor: pointer;
  }

  div:hover {
    opacity: 0.8;
  }

  img {
    width: 50%;
    height: 50%;
  }
</style>
