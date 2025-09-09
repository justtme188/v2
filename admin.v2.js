function loadFooter() {
  const footerHTML = `
    <footer class="py-4 bg-dark mt-auto">
      <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small" style="margin:auto;width:fit-content;">
          <div class="text-muted text-center">
            <br>Source &copy; 
             <img alt="JELLPLAY" 
                 src="https://cdn.jsdelivr.net/gh/justtme188/footer@00f0fecbfd9e2395b9020b5e395e31e5a8460842/logo.png" 
                 style="max-width:10%;height:auto;">
            JELLPLAY ${new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  `;
  document.getElementById("layoutAuthentication_footer").innerHTML = footerHTML;
}
document.addEventListener("DOMContentLoaded", loadFooter);
