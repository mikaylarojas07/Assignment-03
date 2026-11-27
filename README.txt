Mikayla Rojas Assignment-03 README file
101023576

Citation #1: 
Bootstrap code used for base styling for my tables, navbar, cards, footer, and form inputs (note that much of this code is adapted from the lectures)
https://getbootstrap.com/

Citation #2: 
Bootstrap 6.0 Documentation used for: https://getbootstrap.com/docs/6.0/content/tables/?utm_source=chatgpt.com
.table{
  --bs-table-bg: #FFF7F2;
  --bs-table-hover-bg: #FFD6E4;
  border-color: #C2477A;
}

Citation #3: 
Google Fonts embed code from: https://fonts.google.com/selection/embed

PLEASE NOTE: I wrote my own CSS code, which can be seen in style.css

Citation #4: 
Ternary operator and 'selected' attribute logic for my <option> element was adapted from MDN: 
Source 1: Understanding the ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
Source 2: Using the 'selected' attribute for <option> element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option

EX: 
<!--Using ternary operator on the select class to decide which default selected value to use when editing-->
<!--If the existing value == Low, then make the 'Low' value selected-->
    <select class="form-control" id="priorityLevelSelect" name="priorityLevel" required>
      <option value="Low" <%= assignment.priorityLevel === 'Low' ? 'selected' : '' %>>Low</option>
      <option value="Medium" <%= assignment.priorityLevel === 'Medium' ? 'selected' : '' %>>Medium</option>
      <option value="High" <%= assignment.priorityLevel === 'High' ? 'selected' : '' %>>High</option>
    </select>

Citation #5: 
Stack Overflow code for using .env to secure MONGODB connection string and keep password private by storing .env in .gitignore
https://stackoverflow.com/questions/62759524/using-dot-env-for-my-mongodb-username-password

EXAMPLE CODE FROM STACK OVERFLOW: 
In .env:
MONGODB_URI=mongodb+srv://<username>:<password>@jons-thoughts.xpo8p.mongodb.net/jons-thoughts?retryWrites=true&w=majority
In app.js: 
mongoose.connect(process.env.MONGODB_URI)

Citation #6: 
Stack Overflow code for converting date input to a formatted string (implemented on edit.ejs and list.ejs): 
https://stackoverflow.com/questions/28729634/set-values-in-input-type-date-and-time-in-javascript/58252034?utm_source=chatgpt.com

EXAMPLE CODE FROM STACK OVERFLOW: 
let dateInputFormatted = tmp.toISOString().split('T')[0];

Citation #7: 
Stack Overflow code for prompting a confirm box when deleting: 
https://stackoverflow.com/questions/9139075/how-to-show-a-confirm-message-before-delete

My code (adapted from Stack):
 <td class="text-center col-1">
    <!--Added custom class delete-btn to apply CSS styling to this unique button only (I do this multiple times throughout my code)-->
      <a href="/assignments/delete/<%= Assignmentlist[count]._id %>" 
      class="btn btn-primary btn-sm delete-btn"
      onclick="return confirm('Are you sure you want to mark this assignment as Done? This will remove the assignment from the database.')">
      <i class="fas fa-check"></i> Mark as Done</a>
  </td>
  
Citation #6: 
Fontawesome free icons used from https://www.npmjs.com/package/@fortawesome/fontawesome-free