# 🚀 Intercept 3I/ATLAS API

This is a **Node.js + Express API** that serves mission data for the **Intercept 3I/ATLAS** project.  
It provides structured JSON endpoints about the mission, spacecraft, target, and intercept event.  

The project is deployed on **Render** and can be consumed by any frontend or external client.

---

## 📂 Project Structure

```

.
├── data.json        # Mission dataset (spacecraft, mission timeline, target, intercept details)
├── server.js        # Express server code
├── package.json     # Dependencies and scripts
└── README.md        # Project documentation

````

---

## ⚙️ Installation (Local Setup)

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ctrl-space-api.git
   cd ctrl-space-api
  ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. Open in browser:

   ```
   http://localhost:3000/api/data
   ```

---

## 🌐 Deployed API (Render)

Base URL:

```
https://ctrl-space-api.onrender.com
```

### Available Endpoints

| Endpoint                    | Description                               |
| --------------------------- | ----------------------------------------- |
| `/`                         | Health check message                      |
| `/api/data`                 | Full mission dataset                      |
| `/api/mission`              | Mission info (objectives, timeline, etc.) |
| `/api/spacecraft`           | Spacecraft details                        |
| `/api/spacecraft/telemetry` | Telemetry data timeline                   |
| `/api/target`               | Target comet (ATLAS) data                 |
| `/api/intercept`            | Intercept event details                   |

---

## 🛠 Example Usage (Fetch in JavaScript)

```js
fetch("https://ctrl-space-api.onrender.com/api/mission")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## 📌 Notes

* `PORT` is dynamically set from `process.env.PORT` for deployment.
* `data.json` contains the full structured dataset (mission, spacecraft, target, intercept).
* Built with **Express.js**.

---

## 👨‍💻 Author

* Project by \[Your Name]
* Open to contributions 🚀

```

