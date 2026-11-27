Mikayla Rojas Assignment-03 README file
101023576

Citations: 
Bootstrap used for card, navbar, section formatting. 

Bootstrap navbar code (adapted from lecture) https://getbootstrap.com/docs/5.0/components/navbar/: 

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

Bootstrap 6.0 Documentation used for:
.table{
  --bs-table-bg: #FFF7F2;
  --bs-table-hover-bg: #FFD6E4;
  border-color: #C2477A;
}

https://getbootstrap.com/docs/6.0/content/tables/?utm_source=chatgpt.com


Google Fonts embed code from: https://fonts.google.com/selection/embed

PLEASE NOTE: I wrote my own CSS code, which can be seen in style.css

The code below, specifically the ternary operator logic, was adapted from MDN: 
Source 1: Understanding the ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
Source 2: Using the 'selected' attribute for <option> element: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/option

<div class="form-group">
  <label for="priorityLevelSelect">Priority Level</label>
<!--Using ternary operator on the select class to decide which default selected value to use when editing-->
<!--If the existing value == Low, then make the 'Low' value selected-->
    <select class="form-control" id="priorityLevelSelect" name="priorityLevel" required>
      <option value="Low" <%= assignment.priorityLevel === 'Low' ? 'selected' : '' %>>Low</option>
      <option value="Medium" <%= assignment.priorityLevel === 'Medium' ? 'selected' : '' %>>Medium</option>
      <option value="High" <%= assignment.priorityLevel === 'High' ? 'selected' : '' %>>High</option>
    </select>
</div>