for (const link of document.querySelectorAll("[data-contact]")) {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const address = window.atob(link.dataset.contact);
    window.location.href = `mailto:${address}`;
  });
}
