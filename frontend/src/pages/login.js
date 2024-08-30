export function LoginPage() {
    const $container = document.createElement('div');
  
    $container.classList.add("w-1/2", "mx-auto", "p-4", "bg-white", "rounded-md", "shadow-md");
    $container.innerHTML = `
      <h1 class="text-2xl">Login</h1>
      <form class="mt-4">
        <div class="mb-4">
          <label for="email" class="block text-sm">Email</label>
          <input type="email" id="email" name="email" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm">Password</label>
          <input type="password" id="password" name="password" class="w-full px-2 py-1 border border-gray-300 rounded-md">
        </div>
        <button type="submit" class="w-full py-1 bg-blue-500 text-white rounded-md">Login</button>
      </form>
    `;
  
    return $container;
  }