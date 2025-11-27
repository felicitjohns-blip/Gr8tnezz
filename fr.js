// server.js (Updated with GET /api/users route)

const express = require('express');
const db = require('./db'); 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// --- EPISODE & CATEGORY API ROUTES (Existing) ---
// ... (All existing routes: GET/POST/PUT/DELETE for /api/episodes, /api/plays, and /api/categories) ...


// --- USER MANAGEMENT API ROUTES (FR7) ---

// 🚀 FR7 (Read): Get All Users
app.get('/api/users', async (req, res) => {
    // --- AUTHENTICATION & AUTHORIZATION CHECK GOES HERE ---
    // User must be logged in AND have 'admin' role to access this list.
    // Example: if (req.user.role !== 'admin') { return res.status(403).send('Access Denied'); }

    // SQL query to fetch user details, excluding the hashed password for security
    const sql = `
        SELECT id, username, email, role 
        FROM users 
        ORDER BY username ASC;
    `;

    try {
        const { rows } = await db.query(sql);
        
        // Return the list of users
        res.status(200).json(rows);
    } catch (err) {
        console.error("Error fetching user list:", err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// FR7 (Create): Register New User (Placeholder)
app.post('/api/users', async (req, res) => {
    // This will handle user registration (including password hashing)
    res.status(501).json({ message: 'User registration endpoint not yet implemented.' });
});

// FR7 (Update): Update User Role/Details (Placeholder)
app.put('/api/users/:id', async (req, res) => {
    // This allows an admin to change another user's role or details
    res.status(501).json({ message: 'User update endpoint not yet implemented.' });
});

// FR7 (Delete): Delete User (Placeholder)
app.delete('/api/users/:id', async (req, res) => {
    // This allows an admin to delete a user account
    res.status(501).json({ message: 'User deletion endpoint not yet implemented.' });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});