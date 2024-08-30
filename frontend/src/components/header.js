export function Header() {
    const $header = document.createElement('header');
  
    $header.classList.add("bg-blue-500", "text-white", "text-center", "py-4");
  
    $header.innerHTML = `
      <h1 class="text-2xl">SPA Vanilla JS</h1>
      <nav>
      <ul class="flex justify-center mt-4">
        <li class="mr-6">
          <a href="/" class="hover:underline">Home</a>
        </li>
        <li>
          <a href="/login" class="hover:underline">Login</a>
        </li>
      </ul>
      </nav>
    `
  
    return $header
  }