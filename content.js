(async () => {
    const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  
    chrome.storage.local.get("lastShownDate", (result) => {
      if (result.lastShownDate === today) return; // already shown today, do nothing
  
      // Store today's date
      chrome.storage.local.set({ lastShownDate: today }, () => {
        showDialog();
      });
    });
  
    function showDialog() {
      const dialog = document.createElement("div");
      dialog.innerHTML = `
        <div class="custom-dialog">
          <h2>Hello World!</h2>
          <p>Hope you have a good one.</p>
          <button id="close-btn">Close</button>
        </div>
      `;
      dialog.className = "dialog-overlay";
      document.body.appendChild(dialog);
  
      document.getElementById("close-btn").onclick = () => {
        dialog.remove();
      };
    }
})();  