<h1>
    This is from a component
</h1>


<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";

    let problemName

    const fetchData = async() => {
        const res = await axios.get(`http://localhost:5000/displayProblem`)
       problemName = res.data
    }
    
    onMount(() => {
        fetchData();
    })
</script>

<p>{problemName}</p>