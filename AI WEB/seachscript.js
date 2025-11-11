const searchBtn = document.querySelector(".search-bar button");
  const searchInput = document.querySelector(".search-bar input");

  function goToSearchPage() {
    const value = searchInput.value.trim();

    if (value.length < 1) {
      // You can show alert or keep silent. Your choice ↓
      alert("Please type something to search.");
      return;
    }

    const query = encodeURIComponent(value);
    window.location.href = `allproductslisting.html?search=${query}`;
  }

  // Click Search Button → Go
  searchBtn.addEventListener("click", goToSearchPage);

  // Press ENTER → Go
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      goToSearchPage();
    }
  });

