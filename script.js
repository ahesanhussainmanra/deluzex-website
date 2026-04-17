<script>
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
</script>