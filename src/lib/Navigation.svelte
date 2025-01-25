<script>
export let active = "Branding";
const links = ["Animation", "Branding", "Illustration"];
</script>

<nav aria-label="Main Navigation" class="flex justify-center items-center w-full bg-transparent py-4">
    <ul class="flex space-x-10 text-lg font-semibold text-gray-400">
        {#each links as link}
        <li class="relative">
            <button
                class="cursor-pointer hover:text-white transition-colors duration-300 focus:text-white focus:outline-none"
                tabindex="0"
                on:click={() => {
                active = link;
                console.log(`Active link changed to: ${link}`);
                }}
                aria-current={active === link ? 'page' : undefined}
                aria-label={`Go to ${link} section`}
                >
                <span class="{active === link ? 'text-white' : ''}">{link}</span>
                <div
                    class="absolute left-5 right-5 top-11 h-0.5 bg-white rounded transition-all duration-300 ease-in-out"
                    style="transform: scaleX({active === link ? 1 : 0})"
                    ></div>
            </button>
        </li>
        {/each}
    </ul>
</nav>
