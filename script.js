async function fetchData() {
  console.log("Fetching data...");
  const response = await fetch("https://api.example.com/data");
  console.log("Data fetched:", response);
}

console.log("Start");
fetchData();
console.log("End");
