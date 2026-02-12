# React Meetups

A Next.js application for browsing and managing React meetups. Users can view a list of meetups, see details of individual meetups, and add new meetups.

## Features

- Browse a list of active React meetups
- View detailed information about each meetup
- Add new meetups through a form
- Data stored in MongoDB
- Static generation with revalidation for performance

## Tech Stack

- **Frontend**: Next.js, React
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Styling**: CSS Modules

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd meetup-app-nextjs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB:
   - Ensure you have a MongoDB instance running.
   - Update the connection string in `pages/index.js` and `pages/api/new-meetup.js` if necessary.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Home Page**: View the list of meetups.
- **Meetup Details**: Click on a meetup to see more details.
- **Add New Meetup**: Navigate to `/new-meetup` to add a new meetup.

## API Routes

- `GET /api/new-meetup`: Not used (placeholder)
- `POST /api/new-meetup`: Add a new meetup to the database

## Deployment

Build the app for production:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
