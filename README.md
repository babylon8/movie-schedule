# Movie Schedule Web Application

A modern React.js web application that allows users to browse movie schedules by location and search for movies. Built with Vite, Tailwind CSS, and React Router.

## Features

- **Location-based browsing**: Browse movies by selecting states, cities, and theaters
- **Movie search**: Search for movies by title with real-time results
- **Movie details**: View detailed information about movies including ratings, runtime, and synopsis
- **Responsive design**: Works seamlessly on mobile and desktop devices
- **Modern UI**: Clean, user-friendly interface built with Tailwind CSS

## Technology Stack

- **Frontend**: React.js with hooks
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **Build Tool**: Vite
- **Data**: Mock JSON data for states, cities, theaters, and movie schedules

## Project Structure

```
movie-schedule-app/
├── public/
│   ├── index.html
│   └── data/
│       ├── states.json
│       ├── cities.json
│       ├── theaters.json
│       ├── schedules.json
│       └── movies.json
├── src/
│   ├── components/
│   │   └── Header.jsx
│   ├── context/
│   │   └── MovieContext.jsx
│   ├── pages/
│   │   ├── StateSelection.jsx
│   │   ├── CitySelection.jsx
│   │   ├── TheaterSchedule.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MovieSearch.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
├── package.json
├── vite.config.js (configured with src/main.jsx as entry point)
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation and Setup

1. **Navigate to the project directory**:
   ```bash
   cd movie-schedule-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production (outputs to docs/ directory)
- `npm run preview` - Preview the production build

## Usage

### Browsing by Location

1. Start from the homepage which displays all available states
2. Select a state to view its cities
3. Select a city to view its theaters and movie schedules
4. Browse through movies and their showtimes at each theater

### Searching for Movies

1. Use the search bar in the header to search for movies by title
2. Click on any movie in the search results to view its details
3. From the movie details page, you can find showtimes and additional information

### Movie Details

- View movie posters, ratings, runtime, and synopsis
- See release date and genre information
- Access showtimes and pricing information

## Data Models

The application uses the following data models:

### State Model
```json
{
  "id": "string",
  "name": "string",
  "abbreviation": "string"
}
```

### City Model
```json
{
  "id": "string",
  "name": "string",
  "state_id": "string"
}
```

### Theater Model
```json
{
  "id": "string",
  "name": "string",
  "address": "string",
  "city_id": "string",
  "phone": "string",
  "seating_capacity": "number"
}
```

### Movie Model
```json
{
  "id": "string",
  "title": "string",
  "overview": "string",
  "release_date": "string",
  "poster_path": "string",
  "vote_average": "number",
  "runtime": "number"
}
```

### Schedule Model
```json
{
  "id": "string",
  "movie_id": "string",
  "theater_id": "string",
  "showtimes": ["array of strings"],
  "date": "string",
  "ticket_price": "number"
}
```

## Deployment

The application is configured for easy deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Deployment

1.  **Create a GitHub repository** for your project.
2.  **Push your code** to the `main` branch of your repository.
3.  **Enable GitHub Pages** in your repository settings:
    - Go to **Settings** > **Pages**.
    - Under **Source**, select **Deploy from a branch**.
    - Choose the `gh-pages` branch and `/ (root)` as the directory.
    - Click **Save**.

4.  **GitHub Actions Workflow**:
    - A GitHub Actions workflow is included in `.github/workflows/deploy.yml` to automate the build and deployment process.
    - This workflow is triggered on every push to the `main` branch.
    - It builds the application and deploys the contents of the `docs/` directory to the `gh-pages` branch.

5.  **Custom Domain (Optional)**:
    - If you are using a custom domain, create a `CNAME` file in the `public/` directory with your domain name (e.g., `www.example.com`).

### .nojekyll File

Create a `.nojekyll` file in the `public/` directory to ensure that GitHub Pages serves your static assets correctly. This file prevents GitHub Pages from treating your project as a Jekyll site.

## Testing the Deployment Process

1.  **Create a GitHub repository** for your project.
2.  **Push your code** to the `main` branch of your repository.
3.  **Enable GitHub Pages** in your repository settings:
    -   Go to **Settings** > **Pages**.
    -   Under **Source**, select **Deploy from a branch**.
    -   Choose the `gh-pages` branch and `/ (root)` as the directory.
    -   Click **Save**.

The GitHub Actions workflow will automatically build and deploy your application to GitHub Pages. You can monitor the progress of the deployment in the **Actions** tab of your repository.

## Future Enhancements

- Integration with real TMDb API
- User authentication and watchlists
- Advanced filtering and sorting options
- Theater maps and directions
- Ticket booking integration
- User reviews and ratings

## License

This project is open source and available under the [MIT License](LICENSE).