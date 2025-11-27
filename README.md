# Matandoh's FM Station Web Application (SAD Project)

## Overview
This repository contains the full-stack prototype (Frontend HTML/CSS/JS and Backend Node.js/PostgreSQL API) developed for the System Analysis and Design (SAD) course.

The system is designed for Matandoh's FM Station Saturday Talk Show, allowing listeners to browse, search, and play episodes, and providing administrative tools for content creators and system management.

## 🔗 Live Prototype Link
**You can interact with the published frontend prototype here:**
[https://github.com/felicitjohns-blip/Gr8tnezz.git]

## 🚀 Key Functional Requirements (FRs) Implemented

* **FR1 & FR2:** Browse all episodes with filtering by broadcast date.
* **FR3 & FR4:** View episode details and play the audio using the integrated HTML5 player.
* **FR6:** Administrative interface for content creators (upload new episodes).
* **FR7:** Backend API support for full CRUD (Create, Read, Update, Delete) operations for Categories and Users (Admin roles).

## 💻 Tech Stack

* **Frontend (Prototype):** HTML5, CSS3, JavaScript
* **Backend (API Server):** Node.js / Express
* **Database (Persistence):** PostgreSQL (used for `episodes`, `users`, `categories`, and linking tables as seen in the ERD)
* **Security:** Password hashing using bcrypt.

## Database Schema (ERD Summary)
The system is built on four core entities and one junction table, as outlined in the SAD document:
1.  **Users:** Stores user accounts, including `username`, `email`, `password_hash`, and `role` (Admin/Content Creator).
2.  **Episodes:** Stores `title`, `description`, `presenter`, `broadcast_date`, and `audio_url`.
3.  **Categories:** Stores the `name` of the topic categories.
4.  **Plays:** Tracks listens with `episode_id`, `ip_address`, and `user_agent`.
5.  **episode_categories:** Junction table linking Episodes to Categories.

---
**Prepared by:** [Ishamel Matandoh]
**Course:** Software Engineering
**Institution:** IPMC University College.
