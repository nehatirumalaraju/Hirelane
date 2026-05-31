# HireLane Database Schema

## profiles
- id
- full_name
- phone
- university
- degree
- graduation_year
- preferred_role
- preferred_location

## applications
- id
- user_id
- company
- role
- location
- status
- applied_date
- deadline
- job_link
- notes

## interviews
- id
- application_id
- round_name
- interview_date
- preparation_notes
- questions_asked
- feedback
- outcome

## resumes
- id
- user_id
- file_name
- file_url
- uploaded_at