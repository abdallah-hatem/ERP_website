import Dashboard from "../Pages/Dashboard/Dashboard";
import Sale from "../Pages/Sales/Sale";

export const routes = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: "menu-icon fa fa-cogs",
    component: <Dashboard />,
  },
  {
    id: 0,
    title: "Sale",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "New Sale",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Manage Sale",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "POS Sale",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Sales Terms List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Add Sales Terms",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Customer",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add Customer",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Customer List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Credit Customer",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Paid Customer",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Customer Ledger",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Customer Advance",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Supplier",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add Supplier",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Supplier List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Supplier Ledger",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Supplier Advance",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Product",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add Category",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Category List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Add Unit",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Unit List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Add Product",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Add Product (CSV)",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Manage Product",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Purchase",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add Purchase",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Manage Purchase",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Stock",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Stock Report",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
    ],
  },
  {
    id: 0,
    title: "Accounts",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Chart of Accounts",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Opening Balance",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Add Payment Method",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Payment Method List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Supplier Payment",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Customer Receive",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Service Payment",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Cash Adjustment",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Debit Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Credit Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Contra Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Journal Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Voucher Approval",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Report",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Closing",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Closing Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Todays Customer Receipt",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Sales Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "User Wise Sales Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Due Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Shipping Cost Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Purchase Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Purchase Report (Category wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Sales Report (Product Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Sales Report (Category wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Sales Return",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Supplier Return",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "TAX Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Profit Report (Sale Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Human Resources",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "HRM",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Attendance",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Payroll",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Expense",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Office Loan",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Personal Loan",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Bank",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add New Bank",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Manage Bank",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Bank Transaction",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Bank Ledger",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Services",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add Service",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Manage Service",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Service Invoice",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Manage Service Invoice",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Quotation",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Add Quotation",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Manage Quotation",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "TAX",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "VAT & TAX Settings",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "TAX Settings",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Add Income Tax",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Manage Income Tax",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Tax Report",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Tax Report (Invoice Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Return",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Return",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Stock Return List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Supplier Return List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Wastage Return List",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Settings",
    icon: "menu-icon fa fa-cogs",
    data: [
      {
        id: 0,
        title: "Software Settings",
        icon: "menu-icon fa fa-cogs",
        path: "/sale",
        component: <Sale />,
      },
      {
        id: 0,
        title: "Role Permission",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "SMS",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Data Synchronizer",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
      {
        id: 0,
        title: "Update Now",
        icon: "menu-icon fa fa-cogs",
        path: "/",
        component: "",
      },
    ],
  },
  {
    id: 0,
    title: "Addons",
    icon: "menu-icon fa fa-cogs",
  },
];
