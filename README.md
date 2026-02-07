# Legendary Tax Service

Luxury-forward tax prep landing experience with a production-ready API for intake submissions. This repo ships with a Vite + React front end and an Express backend that stores intake requests locally (with a clean extension point for real CRMs).

## Local Development

**Prerequisites**
- Node.js 20+

**Install**
```bash
npm install
```

**Run the API (port 8080)**
```bash
npm run dev:api
```

**Run the front end (port 3000)**
```bash
npm run dev
```

The UI submits intake requests to `POST /api/intake`, which is proxied in development to `http://localhost:8080`.

## Production Build

```bash
npm run build
npm run start
```

The server will serve the compiled `dist/` assets when `NODE_ENV=production`.

## Railway Deployment (Effortless)

1. **Create a new Railway project** → **Deploy from GitHub** and select this repository.
2. **Service settings**
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm run start`
3. **Environment Variables**
   - `NODE_ENV=production`
   - (Optional) `GEMINI_API_KEY=your_key` if you enable the concierge AI in the UI.
4. **Deploy**
   - Railway automatically provides `PORT`. The server reads it and binds correctly.

## API Endpoints

- `GET /api/health` — basic health check.
- `POST /api/intake` — submit intake data:
```json
{
  "goal": "Aggressive Growth",
  "revenue": "$100k - $250k",
  "name": "Alex Sterling",
  "email": "a.sterling@private.com"
}
```

## Notes

- Intake requests are stored in `data/intakes.json`. This is ideal for demos; for production, replace the storage logic in `server.js` with your CRM or database of choice.
