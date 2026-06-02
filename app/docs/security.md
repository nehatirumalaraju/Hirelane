# Security Documentation

## Authentication

HireLane uses Supabase Authentication for:

- User Sign Up
- User Login
- User Logout

## Database Tables

### profiles
Stores user profile information.

### applications
Stores job applications created by users.

### interviews
Stores interview records linked to applications.

## Security Strategy

### Current

- Supabase Auth configured
- Environment variables configured
- Backend service layer implemented

### Future

- Row Level Security (RLS)
- Protected Dashboard Routes
- Protected Profile Routes
- Protected Applications Routes
- Protected Interviews Routes

## User Data Isolation

Each user should only be able to:

- View their own profile
- View their own applications
- View their own interviews

## Environment Variables

Stored in:

.env.local

Required:

NEXT_PUBLIC_SUPABASE_URL

NEXT_PUBLIC_SUPABASE_ANON_KEY