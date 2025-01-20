<script>
    export let active = "Home";
    const links = ["Home", "About", "Contact"];
</script>

<nav aria-label="Main Navigation">
    <ul class="flex space-x-6 text-lg font-medium text-gray-400">
        {#each links as link}
            <li class="relative">
                <button
                    class="cursor-pointer hover:text-white transition-colors duration-300 focus:outline-none"
                    on:click={() => (active = link)}
                    on:keydown={(e) => e.key === 'Enter' && (active = link)}
                    aria-current={active === link ? 'page' : undefined}
                >
                    <span class="{active === link ? 'text-white' : ''}">{link}</span>
                    {#if active === link}
                        <div
                            class="absolute left-0 right-0 bottom-[-6px] h-[2px] bg-white transition-all duration-300"
                        ></div>
                    {/if}
                </button>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
    }
</style>