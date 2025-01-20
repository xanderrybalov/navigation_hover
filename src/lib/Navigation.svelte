<script>
  export let active = "Branding";
  const links = ["Animation", "Branding", "Illustration"];
</script>

<nav aria-label="Main Navigation" class="flex justify-center items-center w-full bg-transparent py-4">
  <ul class="flex space-x-10 text-lg font-semibold text-gray-400">
    {#each links as link}
      <li class="relative">
        <button
          class="cursor-pointer hover:text-white transition-colors duration-300 focus:outline-none"
          on:click={() => {
            console.log('Previous active:', active);
            active = link;
            console.log('New active:', active);
          }}
          on:keydown={(e) => e.key === 'Enter' && (active = link)}
          aria-current={active === link ? 'page' : undefined}
        >
          <span class="{active === link ? 'text-white' : ''}">{link}</span>
          {#if active === link}
          <div 
          class="absolute left-0 right-0 top-11 h-0.5 bg-white transform scale-x-0 transition-transform ease-in-out duration-1000 origin-center"
          class:scale-x-100={active === link}
        ></div>
          {/if}
        </button>
      </li>
    {/each}
  </ul>
</nav>

