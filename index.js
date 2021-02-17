const data = [
  {
    id: "01",
    projectName: "Seasons",
    url: "#"
  },
  {
    id: "02",
    projectName: "",
    url: "#"
  },
]

const renderProject = item => {
  return `
    <div class="col-md-6">
      <div class="alert alert-secondary" role="alert">
        ${item.id}. ${item.projectName}
        <button
          type="button"
          class="btn bg-light text-dark py-0 float-right"
        >
          <a href="${item.url}"> Live Demo</a>
        </button>
      </div>
    </div>
  `;
}

const renderPage = () => {
  const mainContentEl = document.querySelector("[data-selector='main-content']")
  const html = `
    <h1 class="p-4 text-center">React-Projects</h1>
    <div class="row justify-content-center mt-5">
      ${data.map(renderProject).join("")}
    </div>
  `;
  mainContentEl.innerHTML = html
}

window.addEventListener('DOMContentLoaded', renderPage);
