# Backend Services

## Authentication
- signUp(email, password)
- signIn(email, password)
- signOut()

## Profile
- createProfile(userId, email)
- getProfile(userId)
- updateProfile(userId, updates)

## Applications
- createApplication(application)
- getApplications(userId)
- updateApplication(applicationId, updates)
- deleteApplication(applicationId)

## Interviews
- createInterview(interview)
- getInterviews(applicationId)
- updateInterview(interviewId, updates)
- deleteInterview(interviewId)