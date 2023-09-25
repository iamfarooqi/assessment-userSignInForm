## Please implement a LoginForm component that satisfies the following requirements:

- Create a form with input fields for email and password.
- Implement form validation for the email and password fields:
- Display an error message if the email is not a valid email
- Display an error message if the email field is empty.
- Display an error message if the password field is less than 8 characters long.
- only make api call if data is valid
- Handle form submission and simulate an asynchronous API call `https://dummyjson.com/docs/users#add`:
- If the email is not "existingUser" consider the API call successful.
- If the API call fails or the email is not "existingUser," display an error message (can be anywhere noticable).
- Display error messages next to the respective input fields when applicable (only show error next to field that have error).

## Note

- You can use any testing framework or library of your choice (e.g., React Testing Library, Jest) for testing the LoginForm component.
- you can use apis from `https://dummyjson.com/docs` for data or anything if needed

## Expected Deliverables:

- Code for the LoginForm component.
- Additional test cases validating different scenarios and behavior.
- Please complete the implementation and provide your code and test cases within the given time frame.
