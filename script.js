const loadData = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const info = await res.json();
  const data = info.data.tools;
  handleLoadData(data);
};

const handleLoadData = (data) => {
  for (const news of data) {
    const newsContainer = document.getElementById("news-container");
    const newsList = document.createElement("div");
    newsList.classList = "card bg-base-100 shadow-xl border";
    newsList.innerHTML = `
    <figure class="px-5 pt-5">
    <img src="${news?.image}" alt="Shoes" class="rounded-xl" />
  </figure>

<div class="items-start text-start p-5 space-y-3">
  <h2 class="card-title">Features</h2>
  <ol class="list-decimal ml-3 text-gray-400">
    <li>${news?.features[0]}</li>
    <li>${news?.features[1]}</li>
    <li>${news?.features[2]}</li>
  </ol>
  <hr>
  <div class="flex justify-between">
    <div>
      <h1 class=" text-lg font-bold">${news?.name}</h1>
      <h1 class=" text-xs">${news?.published_in}</h1>
    </div>
    <div>
      <button class=" text-5xl text-red-700 bg-red-200 rounded-full pb-2 px-2 hover:bg-red-400 ">→</button>
    </div>
  </div>
</div>
    `;
    newsContainer.appendChild(newsList);
  }
};

loadData();
