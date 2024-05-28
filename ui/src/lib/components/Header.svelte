<script>
    import { page } from '$app/stores';

    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
    import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

    let path;
    $: if ($page) {
    path = $page.url.pathname;
}
</script>

<header class=" px-[15%] border-b-[1px] border-[#2aa198] text-[#2aa198] flex items-center justify-between">
    <a href="/"><h1 class="font-bold text-[24px] text-left leading-[2.5rem]">DEFAULT DETECTOR</h1></a>
    <div class="text-[20px]">
        <a href="/" class="px-2" class:bold={path === '/'}>HOME</a>
        <a href="/about" class="px-2" class:bold={path === '/about'}>ABOUT</a>
        <a href="https://github.com/ArmanDris/DefaultDetector" class="px-2" target="_blank">SOURCE CODE<FontAwesomeIcon icon={faExternalLinkSquareAlt} class='ml-[6px] w-[1em] h-[1em] inline'/></a>
    </div>
</header>

<style>
    .bold {
        font-weight: bold;
    }
</style>