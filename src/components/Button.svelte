<script lang="ts">
	export let name;
</script>

<div on:click>
  <img src="/img/{name}.svg" alt="hand">
</div>

<style>
div {
  cursor: pointer;
  border: 4px solid #1c313a;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #445963;
}

div:hover {
  opacity: 0.8;
}

img {
  width: 50%;
  height: 50%;
} 
</style>