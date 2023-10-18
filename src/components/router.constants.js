const paths = {
  employee: "/employees",
  dashboard: "/dashboard",
  calls: "/calls",
  clients: "/clients",
  contacts: "/contacts",
  project: "/projects",
  settings: "/settings",
  tasks: "/tasks",
  login: "/login",
  register: "/register",
  forgetPassword: "/reset_password",
  details:"/employees/details/:id",
  logout:"logout"
};

const constants = {
  paths: paths,
  navbarLinks: [
    {
      path: paths.dashboard,
      name: "Dasboard",
    },
    {
      path: paths.employee,
      name: "Employees",
    },
    {
      path: paths.calls,
      name: "Calls",
    },
    {
      path: paths.clients,
      name: "Clients",
    },
    {
      path: paths.contacts,
      name: "Contacts",
    },
    {
      path: paths.project,
      name: "Projects",
    },
    {
      path: paths.settings,
      name: "Settings",
    },
    {
      path: paths.tasks,
      name: "Tasks",
    },
  ],

  header: {
    employee: "Employees",
    name: "",
    id: "Employees ID",
    email: "Email ID",
    first_name: "first_name",
    last_name: "last_name",
    role: "Role",
    action: "Action",
  },
  messages: {
    alertMessage: "You Are About To Logout",
    errorMessage: "User Not Found"
  },
};
export default constants;
