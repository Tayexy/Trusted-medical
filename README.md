# Trusted Medical Website

Trusted Medical is a modern web application designed to help individuals, families, and organizations make better healthcare decisions. The platform connects users with professional medical consultants and provides reliable health information through consultations and blog articles.

The website allows users to learn about medical services, read health-related articles, book consultations, and subscribe for health insights.

---

## Features

* Medical consultation booking
* Health advisory services information
* Blog section with medical articles
* Email subscription for health insights
* Responsive design for mobile, tablet, and desktop
* Client testimonials slider
* Clean and modern user interface

---

## Tech Stack

The project was built using modern web technologies:

* **React** – Frontend library for building the user interface
* **Vite** – Fast development build tool
* **Firebase** – Backend services and hosting
* **Swiper.js** – Used for the testimonial slider
* **EmailJS** – Sends emails directly from the contact/booking forms
* **React Toastify** – Displays success and error notifications
* **Tailwind CSS** – Utility-first CSS framework for styling

---

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/trusted-medical.git
```

### 2. Navigate to the project folder

```bash
cd trusted-medical
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

## Project Structure

```
src
│
├── components
│   ├── Blog.jsx
│   ├── BlogPost.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│
├── pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Booking.jsx
│
├── data
│   └── blogData.js
│
├── assets
│   └── images
│
└── App.jsx
```

---

## Key Libraries

### Swiper.js

Used to create the testimonial slider and interactive carousels.

### Firebase

Provides backend services such as hosting, authentication, or database features if required.

### EmailJS

Allows users to send booking requests or contact messages directly from the website without a backend server.

### React Toastify

Displays user notifications such as:

* Booking successful
* Form submission confirmation
* Error alerts

---

## Future Improvements

* Online doctor availability system
* Patient dashboard
* Appointment history
* Secure medical document uploads
* Live chat consultation

---

## Author

**Taiye Goodness Olawuyi**

Developer and creator of the Trusted Medical platform.

---

## License

This project is open-source and available for learning and development purposes.
