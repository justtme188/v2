async function loadFooter() {
  try {
    const res = await fetch("server-info.php");
    if (!res.ok) throw new Error("Gagal ambil data server-info");
    const data = await res.json();

    const footerHTML = `
      <footer class="py-4 bg-dark mt-auto">
        <div class="container-fluid px-4">
          <div class="d-flex align-items-center justify-content-between small" style="margin:auto;width:fit-content;">
            <div class="text-muted text-center">
              <img alt="JELLPLAY" 
                   src="/" 
                   style="max-width:10%;height:auto;">
              <br>Copyright &copy; 
             JELLPLAY ${new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    `;

    document.getElementById("layoutAuthentication_footer").innerHTML = footerHTML;
  } catch (err) {
    console.error("Error:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadFooter);
