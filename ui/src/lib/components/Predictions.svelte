<script>
    import { onMount } from 'svelte';
    import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    export let ids;
    export let predictions;
    export let answers;

    let true_positive;
    let true_negative;
    let false_positive;
    let false_negative;

    let accuracy;
    let recall;
    let precision;
    let f1;

    function calculateMetrics() {
        true_positive = 0;
        true_negative = 0;
        false_positive = 0;
        false_negative = 0;

        for (let i = 0; i < predictions.length; i++) 
        {
            const prediction = predictions[i]
            const answer = answers[i]

            if (answer === 1 && prediction === 1) { true_positive+=1 }
            if (answer === 1 && prediction === 0) { false_negative+=1 }
            if (answer === 0 && prediction === 1) { false_positive+=1 }
            if (answer === 0 && prediction === 0) { true_negative+=1; }
        }

        console.log("True positive: " + true_positive)
        console.log("True negative: " + true_negative)
        console.log("False positive: " + false_positive)
        console.log("False negative: " + false_negative)

        accuracy = (true_positive + true_negative) / (true_positive + true_negative + false_positive + false_negative) * 100

        if (true_positive + false_negative !== 0) {
            recall = true_positive / (true_positive + false_negative)
        } else {
            recall = 'NA'
        }

        if (false_positive + true_negative !== 0) {
            precision = true_negative / (true_negative + false_positive)
        } else { 
            precision = 'NA'
        }

        if (recall !== 'NA' && precision !== 'NA') {
            f1 = 2 * (precision * recall) / (precision + recall)
        } else {
            f1 = 'NA'
        }

        if (recall !== 'NA') { recall = recall.toFixed(2) }
        if (precision !== 'NA') { precision = precision.toFixed(2) }
        if (f1 !== 'NA') { f1 = f1.toFixed(2) }
        accuracy = accuracy.toFixed(2)
    }

    function mapStats(val) {
        return val === 0 ? 'PAID' : 'DEFAULTED';
    }

    onMount(() => {calculateMetrics();} )
</script>

<h2 class="font-sans text-[28px] text-black mt-4">Model got an accuracy of {accuracy}%</h2>
<div class="my-2 mb-4">
    <span class="text-black font-sans mr-4">F1 score: {f1}
        <span class="tooltip">
            <FontAwesomeIcon icon={faInfoCircle} class="icon-info" style="color: rgba(0, 0, 0, 0.5);"/>
            <span class="tooltiptext">F1 Score is a scoring metric that compensates for class imbalance.</span>
        </span>
    </span>
    <span class="text-black font-sans mr-4">Recall: {recall} 
        <span class="tooltip">
            <FontAwesomeIcon icon={faInfoCircle} class="icon-info" style="color: rgba(0, 0, 0, 0.5);"/>
            <span class="tooltiptext">Recall is only concerned with how the model predicted people who defaulted.</span>
        </span>
    </span>
    <span class="text-black font-sans">Precision: {precision} 
        <span class="tooltip">
            <FontAwesomeIcon icon={faInfoCircle} class="icon-info" style="color: rgba(0, 0, 0, 0.5);"/>
            <span class="tooltiptext">Precision is only concerned with how the model predicted people who did not default.</span>
        </span>
    </span>
</div>
<table class="w-full">
    <thead>
        <tr>
            <th>ID</th>
            <th>MODEL PREDICTION</th>
            <th>CORRECT ANSWER</th>
        </tr>
    </thead>
    <tbody>
        {#each ids as id, i}
            <tr>
                <td>{id}</td>
                <td class={predictions[i] === answers[i] ? 'bg-[#d1ecff]' : 'bg-[#ffd1bd]'}>{mapStats(predictions[i])}</td>
                <td class={predictions[i] === answers[i] ? 'bg-[#d1ecff]' : 'bg-[#ffd1bd]'}>{mapStats(answers[i])}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .tooltip {
        position: relative;
        display: inline-block;
    }
  
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 350px;
        background-color: #eee8d5;
        color: black;
        text-align: center;
        border-radius: 14px;

        /* Position the tooltip text */
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -175px;
    }
  
    .tooltip:hover .tooltiptext {
        visibility: visible;
        padding: 24px;
    }
</style>
