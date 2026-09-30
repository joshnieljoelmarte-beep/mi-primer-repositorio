const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const copyButton = document.querySelector('[data-copy]');
copyButton?.addEventListener('click', async () => {
  const code = `-- Mi primer script en Roblox\nprint("¡Hola, Roblox!")\n\nlocal jugador = "Aprendiz"\nlocal monedas = 10\n\nprint(jugador .. " tiene " .. monedas .. " monedas")`;

  try {
    await navigator.clipboard.writeText(code);
    copyButton.textContent = '¡Código copiado!';
    setTimeout(() => (copyButton.textContent = 'Copiar código'), 1800);
  } catch {
    copyButton.textContent = 'Selecciona y copia el código';
  }
});
