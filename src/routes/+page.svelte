<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
    import { onMount } from "svelte";
    import Tester from "../Components/Tester.svelte";
 
    onMount(() => {       
        console.log("Hello")
    } )

</script>

<a href="/src/routes/testing.svelte">Click me</a>


<div class="giveSpacing"></div>
<style>
    .giveSpacing{
        height: 200px;
    }
</style>

<Tester />


