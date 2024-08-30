export function LandingPage() {
    const $container = document.createElement('div');
  
    $container.classList.add("w-1/2", "mx-auto", "p-4", "bg-white", "rounded-md");
  
    $container.innerHTML = `
      <h1 class="text-2xl">Landing</h1>
      <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
    `;
  
    return $container
  }