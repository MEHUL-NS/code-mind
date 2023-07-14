<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script lang="ts">
    import axios from "axios"
    import { onMount } from "svelte";
    const fetchData  = async() => {
        const res = await axios.get("https://projecteuler.net/problem=1");
        console.log(res)
    };

    onMount(() => {
        fetchData();
    } )

</script>


