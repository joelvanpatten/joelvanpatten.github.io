export function Hero({ title, subtitle }) {
    return `
      <section class="py-20 text-center">
        <h1 class="text-5xl font-extrabold mb-4">${title}</h1>
        <p class="text-xl text-gray-400">${subtitle}</p>
      </section>
    `;
  }
  