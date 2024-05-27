<script>
    import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

    export let ids;
    export let predictions;
    export let answers;
    let true_positive = 0;
    let true_negative = 0;
    let false_positive = 0;
    let false_negative = 0;

    let accuracy = 0;
    let f1 = 'NA';
    let recall = 'NA';

    function calculateMetrics() {
        true_positive = 0;
        true_negative = 0;
        false_positive = 0;
        false_negative = 0;

        predictions.forEach((prediction, index) => {
            const answer = answers[index];
            if (answer === 0) {
                if (prediction === 0) true_negative += 1;
                else false_positive += 1;
            } else if (answer === 1) {
                if (prediction === 0) false_negative += 1;
                else true_positive += 1;
            }
        });

        calculateAccuracy();
        calculateF1();
        calculateRecall();
    }

    function calculateAccuracy() {
        const total = true_positive + true_negative + false_positive + false_negative;
        accuracy = total > 0 ? ((true_positive + true_negative) / total) * 100 : 0;
    }

    function calculateF1() {
        const precision = true_positive / (true_positive + false_positive) || 0;
        const recalculatedRecall = true_positive / (true_positive + false_negative) || 0;
        f1 = (precision + recalculatedRecall) !== 0 ? (2 * precision * recalculatedRecall) / (precision + recalculatedRecall) : 'NA';
    }

    function calculateRecall() {
        recall = true_positive / (true_positive + false_negative) || 'NA';
    }

    function mapStats(val) {
        return val === 0 ? 'PAID' : 'DEFAULTED';
    }

    $: if (predictions && answers) {
        calculateMetrics();
    }
</script>

<h2 class="font-sans text-[28px] text-black mt-4">Model got an accuracy of {accuracy}%</h2>
<div class="my-2 mb-4">
    <span class="text-black font-sans mr-4">F1 score: {typeof f1 === 'number' ? f1.toFixed(2) : f1}
        <span class="tooltip">
            <FontAwesomeIcon icon={faInfoCircle} class="icon-info" style="color: rgba(0, 0, 0, 0.5);"/>
            <span class="tooltiptext">F1 Score is a scoring metric that compensates for class imbalance.</span>
        </span>
    </span>
    <span class="text-black font-sans">Recall: {typeof recall === 'number' ? recall.toFixed(2) : recall} 
        <span class="tooltip">
            <FontAwesomeIcon icon={faInfoCircle} class="icon-info" style="color: rgba(0, 0, 0, 0.5);"/>
            <span class="tooltiptext">Recall is only concerned about detecting people who defaulted. It does not care how many correct PAID predictions we made.</span>
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
