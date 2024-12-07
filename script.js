document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("infi-list");

  // Function to add list items
  const addListItems = (count) => {
    const currentCount = list.children.length;
    for (let i = 1; i <= count; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${currentCount + i}`;
      list.appendChild(listItem);
    }
  };

  // Add initial 10 items
  addListItems(10);

  // Infinite scroll logic
  list.addEventListener("scroll", () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      addListItems(2); // Add 2 more items when scrolled to the bottom
    }
  });
});
