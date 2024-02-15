<script>
  import "../app.css";
  import Footer from "../lib/components/Footer.svelte";
  import Navbar from "../lib/components/Navbar.svelte";
</script>
<div class="relative font_Inter max-w-[2480px]">
  <div class=" sticky top-0 z-[100000] max-w-[2480px]">
    <Navbar/>
  </div>
    <slot />
  <Footer/>
</div>
  