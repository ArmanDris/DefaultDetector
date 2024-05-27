<script context="module">
    export const prerender = true;
</script>

<script>
    import { onMount } from 'svelte';
    import { faForward, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
    import { library, dom } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import Predictions from './Predictions.svelte';

    let customersTable = "loading sample customers...";
    let ids;
    let answers;
    let predictions;

    export async function getCustomers() {
        ids = undefined
        answers = undefined
        predictions = undefined
        fetch("http://0.0.0.0:5000/getSample")
            .then((response) => response.text())
            .then((data) => {
                customersTable = data;
            })
            .catch((error) => console.error("Error:", error));
    }

    export async function runPredictions() {
        fetch("http://0.0.0.0:5000/predict", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customersTable }) // Send table as string as key 'customersTable'
        })
        .then(response => {
            if (!response.ok) { throw new Error(response.body ) }
            return response.json();
        })
        .then(data => {
            ids = data['ids']
            answers = data['answers']
            predictions = data['predictions']

            setTimeout(scrollToPredictions, 0);
        })
        .catch(error => {
            console.error("Error: Could not get predictions - " + error)
        })
    }

    function scrollToPredictions() {
        const element = document.getElementById('predictions');
        if (element) {
            const offset = 200; // Desired offset from the top of the viewport
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            // Use window.scrollTo to achieve smooth scroll with custom offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    onMount(() => {getCustomers();})

    library.add(faForward);
    library.add(faArrowsRotate);
    dom.watch();
</script>

<div id="list" class="w-full mt-16 min-h-[75vh]">
    <h2 class="my-4 font-sans text-[28px] text-black">Sample of 10 clients:</h2>
    <div class="h-[300px] w-full overflow-scroll">{@html customersTable}</div>
    <button class="bg-[#d3368240] text-[#d33682]" on:click={getCustomers}>Get new Sample<FontAwesomeIcon icon={faArrowsRotate} class="w-[1em] h-[1em] px-2 inline" /></button>
    <button class="bg-[#85990040] text-[#859900]" on:click={runPredictions}>Run Prediction<FontAwesomeIcon icon={faForward} class="w-[1em] h-[1em] px-2 inline" /></button>
    {#if typeof predictions !== 'undefined'}
    <div id="predictions" class="w-full h-full">
        <Predictions {predictions} {answers} {ids}/>
    </div>
    {/if}
</div>

<style>
    button {
        font-family: sans-serif;
        font-weight: bold;
        padding: 14px;
        margin: 14px;
        border-radius: 14px;
    }
</style>