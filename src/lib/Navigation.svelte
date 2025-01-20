<script>
    export let active = "Branding";
    const links = ["Animation", "Branding", "Illustration"];
  </script>
  
  <nav aria-label="Main Navigation" class="flex justify-center items-center h-screen bg-gradient-to-b from-blue-900 to-black">
    <ul class="flex space-x-10 text-lg font-semibold text-gray-400">
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
                class="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-white transition-transform duration-300 scale-x-100"
              ></div>
            {/if}
          </button>
        </li>
      {/each}
    </ul>
  </nav>

  <style>
    nav ul li button {
      padding-bottom: 0.5rem;
    }
    </style>
  
  