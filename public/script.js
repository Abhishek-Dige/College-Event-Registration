window.addEventListener("load", () => {
  setTimeout(() => {
    console.log("Initializing script.js after React render...");

    preloadDummyData();
    loadRegistrations();
    setupEventButtons();
    setupFormSubmit();
    setupClearButton();
    showInfoModal();

  }, 300);
});

function setupEventButtons() {
  const buttons = document.querySelectorAll('[data-bs-target="#applyModal"]');

  if (!buttons.length) {
    console.warn("No apply buttons found yet");
    return;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const button = e.currentTarget;
      const card = button.closest(".card");
      let eventName = "";

      if (card) {
        const titleEl = card.querySelector(".card-title");
        eventName = titleEl ? titleEl.textContent.trim() : "";
      } else {
        eventName =
          button.dataset.event ||
          button.getAttribute("data-event") ||
          button.textContent.trim();
      }

      const eventInput = document.querySelector("#event");
      if (eventInput) {
        eventInput.value = eventName;
        eventInput.readOnly = true;
      }

      const modalTitle = document.querySelector("#applyModalLabel");
      if (modalTitle) {
        modalTitle.textContent = eventName
          ? `Registering for: ${eventName}`
          : "Event Registration";
      }
    });
  });
}

function setupFormSubmit() {
  const form = document.getElementById("eventForm");

  if (!form) {
    console.warn("eventForm not found yet");
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameEl = document.getElementById("name");
    const emailEl = document.getElementById("email");
    const eventEl = document.getElementById("event");

    if (!nameEl || !emailEl || !eventEl) {
      alert("Form is not fully loaded — please try again.");
      return;
    }

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const eventName = eventEl.value.trim();

    // if (!name || !email) {
    //   alert("Please fill out all fields!");
    //   return;
    // }

    const entry = {
      name,
      email,
      eventName,
      time: new Date().toLocaleString(),
    };

    const data = JSON.parse(localStorage.getItem("registrations")) || [];
    data.push(entry);
    localStorage.setItem("registrations", JSON.stringify(data));

    form.reset();

    const modalEl = document.getElementById("applyModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    alert(`Registration successful for ${eventName}! 🎉`);

    loadRegistrations();
  });
}

function preloadDummyData() {
  const existing = JSON.parse(localStorage.getItem("registrations"));

  if (!existing || existing.length === 0) {
    const dummyData = [
      {
        name: "Aarav Patel",
        email: "aarav@example.com",
        eventName: "Dance Battle",
        time: "2025-11-08 10:30 AM",
      },
      {
        name: "Riya Sharma",
        email: "riya@example.com",
        eventName: "CodeSprint",
        time: "2025-11-08 10:45 AM",
      },
      {
        name: "Neha Mehta",
        email: "neha@example.com",
        eventName: "Drama Fiesta",
        time: "2025-11-08 11:00 AM",
      },
      {
        name: "Aditya Verma",
        email: "aditya@example.com",
        eventName: "Music Mania",
        time: "2025-11-08 11:15 AM",
      },
      {
        name: "Priya Singh",
        email: "priya@example.com",
        eventName: "Fine Art Expo",
        time: "2025-11-08 11:30 AM",
      },
    ];

    localStorage.setItem("registrations", JSON.stringify(dummyData));
  }
}

function loadRegistrations() {
  const tableBody = document.querySelector("#userTable tbody");

  if (!tableBody) {
    console.warn("userTable not found — maybe not on this page");
    return;
  }

  const data = JSON.parse(localStorage.getItem("registrations")) || [];
  tableBody.innerHTML = "";

  data.forEach((entry, index) => {
    const row = `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${entry.name}</td>
        <td>${entry.email}</td>
        <td>${entry.eventName}</td>
        <td>${entry.time}</td>
      </tr>
    `;
    tableBody.insertAdjacentHTML("beforeend", row);
  });
}

function setupClearButton() {
  const btn = document.getElementById("clearDataBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all registrations?")) {
      localStorage.removeItem("registrations");
      loadRegistrations();
    }
  });
}

function showInfoModal() {
  const modalEl = document.getElementById("infoModal");
  if (!modalEl) return;

  const modal = new bootstrap.Modal(modalEl);
  modal.show();
  
  modalEl.addEventListener("hidden.bs.modal", () => {
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("overflow");

    document.querySelectorAll(".modal-backdrop").forEach((el) => el.remove());
  });
}
