<h1>
    This is from a component
</h1>


<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";

    const probset = {
        name : "",
        nos : 0,
        statement : ""        
    }
    

    const fetchData = async() => {
        const res = await axios.get(`http://localhost:5000/displayProblem`)
        probset.name = res.data.pName;
        probset.nos = res.data.pNo;
        probset.statement = res.data.pStatement
       

    }
    
    onMount(() => {
        fetchData();
    })
</script>


<div>
    <p>Name : {probset.name}</p>

    <p>Number : {probset.nos}</p>

    <p>Name : {probset.statement}</p>

</div>

