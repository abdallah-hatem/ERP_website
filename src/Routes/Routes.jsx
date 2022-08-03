import AddPaymentMethod from "../Pages/Accounts/AddPaymentMethod";
import CashAdjustment from "../Pages/Accounts/CashAdjustment/CashAdjustment";
import ChartOfAccount from "../Pages/Accounts/ChartOfAccount";
import ContraVoucher from "../Pages/Accounts/ContraVoucher/ContraVoucher";
import CreditVoucher from "../Pages/Accounts/CreditVoucher/CreditVoucher";
import CustomerReceive from "../Pages/Accounts/CustomerReceive/CustomerReceive";
import DebitVoucher from "../Pages/Accounts/DebitVoucher/DebitVoucher";
import JournalVoucher from "../Pages/Accounts/JournalVoucher/JournalVoucher";
import OpeningBalance from "../Pages/Accounts/OpeningBalance";
import PaymentMethodList from "../Pages/Accounts/PaymentMethodList";
import BankBook from "../Pages/Accounts/Report/BankBook";
import CashBook from "../Pages/Accounts/Report/CashBook";
import CashFlow from "../Pages/Accounts/Report/CashFlow";
import GeneralLedger from "../Pages/Accounts/Report/GeneralLedger";
import InventoryLedger from "../Pages/Accounts/Report/InventoryLedger";
import ProfitLoss from "../Pages/Accounts/Report/ProfitLoss";
import TrialBalance from "../Pages/Accounts/Report/TrialBalance";
import ServicePayment from "../Pages/Accounts/ServicePayment/ServicePayment";
import SupplierPayment from "../Pages/Accounts/SupplierPayment/SupplierPayment";
import VoucherApproval from "../Pages/Accounts/VoucherApproval/VoucherApproval";
import Closing from "../Pages/Closing/Closing";
import ClosingReport from "../Pages/Closing/ClosingReport";
import DueReport from "../Pages/Closing/DueReport";
import ProfitReportSaleWise from "../Pages/Closing/ProfitReportSaleWise";
import PurchaseReport from "../Pages/Closing/PurchaseReport";
import PurchaseReportCategoryWise from "../Pages/Closing/PurchaseReportCategoryWise";
import SalesReport from "../Pages/Closing/SalesReport";
import SalesReportCategoryWise from "../Pages/Closing/SalesReportCategoryWise";
import SalesReportProductWise from "../Pages/Closing/SalesReportProductWise";
import SalesReturn from "../Pages/Closing/SalesReturn";
import ShippingCostReport from "../Pages/Closing/ShippingCostReport";
import SupplierReturn from "../Pages/Closing/SupplierReturn";
import TaxReport from "../Pages/Closing/TaxReport";
import TodaysCustomerReceipt from "../Pages/Closing/TodaysCustomerReceipt";
import TodaysReport from "../Pages/Closing/TodaysReport";
import UserWiseSalesReport from "../Pages/Closing/UserWiseSalesReport";
import AddCustomer from "../Pages/Customer/AddCustomer";
import CreditCustomer from "../Pages/Customer/CreditCustomer";
import CustomerAdvance from "../Pages/Customer/CustomerAdvance";
import CustomerLedger from "../Pages/Customer/CustomerLedger";
import CustomerList from "../Pages/Customer/CustomerList";
import PaidCustomer from "../Pages/Customer/PaidCustomer";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Attendance from "../Pages/HumanResources/Attendance/Attendance";
import AttendanceReport from "../Pages/HumanResources/Attendance/AttendanceReport";
import ManageAttendance from "../Pages/HumanResources/Attendance/ManageAttendance";
import AddExpense from "../Pages/HumanResources/Expense/AddExpense";
import AddPerson from "../Pages/HumanResources/OfficeLoan/AddPerson";
import AddExpenseItem from "../Pages/HumanResources/Expense/AddExpenseItem";
import ExpenseStatement from "../Pages/HumanResources/Expense/ExpenseStatement";
import ManageExpense from "../Pages/HumanResources/Expense/ManageExpense";
import ManageExpenseItem from "../Pages/HumanResources/Expense/ManageExpenseItem";
import AddDesignation from "../Pages/HumanResources/HRM/AddDesignation";
import AddEmployee from "../Pages/HumanResources/HRM/AddEmployee";
import EmployeeProfile from "../Pages/HumanResources/HRM/EmployeeProfile";
import ManageDesignation from "../Pages/HumanResources/HRM/ManageDesignation";
import ManageEmployee from "../Pages/HumanResources/HRM/ManageEmployee";
import AddBenefits from "../Pages/HumanResources/Payroll/AddBenefits";
import AddSalarySetup from "../Pages/HumanResources/Payroll/AddSalarySetup";
import ManageBenefits from "../Pages/HumanResources/Payroll/ManageBenefits";
import ManageSalaryGenerate from "../Pages/HumanResources/Payroll/ManageSalaryGenerate";
import ManageSalarySetup from "../Pages/HumanResources/Payroll/ManageSalarySetup";
import SalaryGenerate from "../Pages/HumanResources/Payroll/SalaryGenerate";
import SalaryPayment from "../Pages/HumanResources/Payroll/SalaryPayment";
import AddCategory from "../Pages/Product/AddCategory";
import AddProduct from "../Pages/Product/AddProduct";
import AddProductCsv from "../Pages/Product/AddProductCsv";
import AddUnit from "../Pages/Product/AddUnit";
import CategoryList from "../Pages/Product/CategoryList";
import ManageProduct from "../Pages/Product/ManageProduct";
import ProductDetails from "../Pages/Product/ProductDetails";
import UnitList from "../Pages/Product/UnitList";
import UpdateProduct from "../Pages/Product/UpdateProduct";
import ManagePurchase from "../Pages/Purchase/ManagePurchase";
import NewSale from "../Pages/Sales/NewSale";
import Stock from "../Pages/Stock/Stock";
import AddSupplier from "../Pages/Supplier/AddSupplier";
import SupplierAdvance from "../Pages/Supplier/SupplierAdvance";
import SupplierLedger from "../Pages/Supplier/SupplierLedger";
import SupplierList from "../Pages/Supplier/SupplierList";
import AddLoan from "../Pages/HumanResources/OfficeLoan/AddLoan";
import AddPayment from "../Pages/HumanResources/OfficeLoan/AddPayment";
import ManagePerson from "../Pages/HumanResources/OfficeLoan/ManagePerson";
import AddNewBank from "../Pages/Bank/AddNewBank";
import ManageBank from "../Pages/Bank/ManageBank";
import BankTransaction from "../Pages/Bank/BankTransaction";
import BankLedger from "../Pages/Bank/BankLedger";
import AddService from "../Pages/Service/AddService";
import ManageService from "../Pages/Service/ManageService";
import ServiceInvoice from "../Pages/Service/ServiceInvoice";
import ManageServiceInvoice from "../Pages/Service/ManageServiceInvoice";

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
        component: <NewSale />,
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
        path: "/add-customer",
        component: <AddCustomer />,
      },
      {
        id: 0,
        title: "Customer List",
        icon: "menu-icon fa fa-cogs",
        path: "/customer-list",
        component: <CustomerList />,
      },
      {
        id: 0,
        title: "Credit Customer",
        icon: "menu-icon fa fa-cogs",
        path: "/credit-customer",
        component: <CreditCustomer />,
      },
      {
        id: 0,
        title: "Paid Customer",
        icon: "menu-icon fa fa-cogs",
        path: "/paid-customer",
        component: <PaidCustomer />,
      },
      {
        id: 0,
        title: "Customer Ledger",
        icon: "menu-icon fa fa-cogs",
        path: "/customer-ledger",
        component: <CustomerLedger />,
      },
      {
        id: 0,
        title: "Customer Advance",
        icon: "menu-icon fa fa-cogs",
        path: "/customer-advance",
        component: <CustomerAdvance />,
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
        path: "/add-supplier",
        component: <AddSupplier />,
      },
      {
        id: 0,
        title: "Supplier List",
        icon: "menu-icon fa fa-cogs",
        path: "/supplier-list",
        component: <SupplierList />,
      },
      {
        id: 0,
        title: "Supplier Ledger",
        icon: "menu-icon fa fa-cogs",
        path: "/supplier-ledger",
        component: <SupplierLedger />,
      },
      {
        id: 0,
        title: "Supplier Advance",
        icon: "menu-icon fa fa-cogs",
        path: "/supplier-advance",
        component: <SupplierAdvance />,
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
        path: "/add-category",
        component: <AddCategory />,
      },
      {
        id: 0,
        title: "Category List",
        icon: "menu-icon fa fa-cogs",
        path: "/category-list",
        component: <CategoryList />,
      },
      {
        id: 0,
        title: "Add Unit",
        icon: "menu-icon fa fa-cogs",
        path: "/add-unit",
        component: <AddUnit />,
      },
      {
        id: 0,
        title: "Unit List",
        icon: "menu-icon fa fa-cogs",
        path: "/unit-list",
        component: <UnitList />,
      },
      {
        id: 0,
        title: "Add Product",
        icon: "menu-icon fa fa-cogs",
        path: "/add-product",
        component: <AddProduct />,
      },
      {
        id: 0,
        title: "Add Product (CSV)",
        icon: "menu-icon fa fa-cogs",
        path: "/add-product-csv",
        component: <AddProductCsv />,
      },
      {
        id: 0,
        title: "Manage Product",
        icon: "menu-icon fa fa-cogs",
        path: "/manage-product",
        component: <ManageProduct />,
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
        path: "",
        component: "",
      },
      {
        id: 0,
        title: "Manage Purchase",
        icon: "menu-icon fa fa-cogs",
        path: "/manage-purchase",
        component: <ManagePurchase />,
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
        path: "/stock",
        component: <Stock />,
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
        path: "/chart-of-account",
        component: <ChartOfAccount />,
      },
      {
        id: 0,
        title: "Opening Balance",
        icon: "menu-icon fa fa-cogs",
        path: "/opening-balance",
        component: <OpeningBalance />,
      },
      {
        id: 0,
        title: "Add Payment Method",
        icon: "menu-icon fa fa-cogs",
        path: "/add-payment-method",
        component: <AddPaymentMethod />,
      },
      {
        id: 0,
        title: "Payment Method List",
        icon: "menu-icon fa fa-cogs",
        path: "/payment-method-list",
        component: <PaymentMethodList />,
      },
      {
        id: 0,
        title: "Supplier Payment",
        icon: "menu-icon fa fa-cogs",
        path: "/supplier-payment",
        component: <SupplierPayment />,
      },
      {
        id: 0,
        title: "Customer Receive",
        icon: "menu-icon fa fa-cogs",
        path: "/customer-receive",
        component: <CustomerReceive />,
      },
      {
        id: 0,
        title: "Service Payment",
        icon: "menu-icon fa fa-cogs",
        path: "/service-payment",
        component: <ServicePayment />,
      },
      {
        id: 0,
        title: "Cash Adjustment",
        icon: "menu-icon fa fa-cogs",
        path: "/cash-adjustment",
        component: <CashAdjustment />,
      },
      {
        id: 0,
        title: "Debit Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/debit-voucher",
        component: <DebitVoucher />,
      },
      {
        id: 0,
        title: "Credit Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/credit-voucher",
        component: <CreditVoucher />,
      },
      {
        id: 0,
        title: "Contra Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/contra-voucher",
        component: <ContraVoucher />,
      },
      {
        id: 0,
        title: "Journal Voucher",
        icon: "menu-icon fa fa-cogs",
        path: "/journal-voucher",
        component: <JournalVoucher />,
      },
      {
        id: 0,
        title: "Voucher Approval",
        icon: "menu-icon fa fa-cogs",
        path: "/voucher-approval",
        component: <VoucherApproval />,
      },
      {
        id: 0,
        title: "Report",
        icon: "menu-icon fa fa-cogs",
        data: [
          {
            id: 0,
            title: "Cash Book",
            icon: "menu-icon fa fa-cogs",
            path: "/cash-book",
            component: <CashBook />,
          },
          {
            id: 0,
            title: "Inventory Ledger",
            icon: "menu-icon fa fa-cogs",
            path: "/inventory-ledger",
            component: <InventoryLedger />,
          },
          {
            id: 0,
            title: "Bank Book",
            icon: "menu-icon fa fa-cogs",
            path: "/bank-book",
            component: <BankBook />,
          },
          {
            id: 0,
            title: "General Ledger",
            icon: "menu-icon fa fa-cogs",
            path: "/general-ledger",
            component: <GeneralLedger />,
          },
          {
            id: 0,
            title: "Trial Balance",
            icon: "menu-icon fa fa-cogs",
            path: "/trial-balance",
            component: <TrialBalance />,
          },
          {
            id: 0,
            title: "Profit Loss",
            icon: "menu-icon fa fa-cogs",
            path: "/profit-loss",
            component: <ProfitLoss />,
          },
          {
            id: 0,
            title: "Cash Flow",
            icon: "menu-icon fa fa-cogs",
            path: "/cash-flow",
            component: <CashFlow />,
          },
          {
            id: 0,
            title: "Coa Print",
            icon: "menu-icon fa fa-cogs",
            path: "/coa-print",
            component: "",
          },
          {
            id: 0,
            title: "Balance Sheet",
            icon: "menu-icon fa fa-cogs",
            path: "/balance-sheet",
            component: "",
          },
        ],
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
        path: "/closing",
        component: <Closing />,
      },
      {
        id: 0,
        title: "Closing Report",
        icon: "menu-icon fa fa-cogs",
        path: "/closing-report",
        component: <ClosingReport />,
      },
      {
        id: 0,
        title: "Todays Report",
        icon: "menu-icon fa fa-cogs",
        path: "/todays-report",
        component: <TodaysReport />,
      },
      {
        id: 0,
        title: "Todays Customer Receipt",
        icon: "menu-icon fa fa-cogs",
        path: "/todays-customer-receipt",
        component: <TodaysCustomerReceipt />,
      },
      {
        id: 0,
        title: "Sales Report",
        icon: "menu-icon fa fa-cogs",
        path: "/sales-report",
        component: <SalesReport />,
      },
      {
        id: 0,
        title: "User Wise Sales Report",
        icon: "menu-icon fa fa-cogs",
        path: "/user-wise-sales-report",
        component: <UserWiseSalesReport />,
      },
      {
        id: 0,
        title: "Due Report",
        icon: "menu-icon fa fa-cogs",
        path: "/due-report",
        component: <DueReport />,
      },
      {
        id: 0,
        title: "Shipping Cost Report",
        icon: "menu-icon fa fa-cogs",
        path: "/shipping-cost-report",
        component: <ShippingCostReport />,
      },
      {
        id: 0,
        title: "Purchase Report",
        icon: "menu-icon fa fa-cogs",
        path: "/purchase-report",
        component: <PurchaseReport />,
      },
      {
        id: 0,
        title: "Purchase Report (Category Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/purchase-report-category",
        component: <PurchaseReportCategoryWise />,
      },
      {
        id: 0,
        title: "Sales Report (Product Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/sales-report-product",
        component: <SalesReportProductWise />,
      },
      {
        id: 0,
        title: "Sales Report (Category Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/sales-report-category",
        component: <SalesReportCategoryWise />,
      },
      {
        id: 0,
        title: "Sales Return",
        icon: "menu-icon fa fa-cogs",
        path: "/sales-return",
        component: <SalesReturn />,
      },
      {
        id: 0,
        title: "Supplier Return",
        icon: "menu-icon fa fa-cogs",
        path: "/supplier-return",
        component: <SupplierReturn />,
      },
      {
        id: 0,
        title: "Tax Report",
        icon: "menu-icon fa fa-cogs",
        path: "/tax-report",
        component: <TaxReport />,
      },
      {
        id: 0,
        title: "Profit Report (Sale Wise)",
        icon: "menu-icon fa fa-cogs",
        path: "/profit-report-sale",
        component: <ProfitReportSaleWise />,
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
        component: "",
        data: [
          {
            id: 0,
            title: "Add Designation",
            icon: "menu-icon fa fa-cogs",
            path: "/add-designation",
            component: <AddDesignation />,
          },
          {
            id: 0,
            title: "Manage Designation",
            icon: "menu-icon fa fa-cogs",
            path: "/mange-designation",
            component: <ManageDesignation />,
          },
          {
            id: 0,
            title: "Add Employee",
            icon: "menu-icon fa fa-cogs",
            path: "/add-employee",
            component: <AddEmployee />,
          },
          {
            id: 0,
            title: "Manage Employee",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-employee",
            component: <ManageEmployee />,
          },
        ],
      },
      {
        id: 0,
        title: "Attendance",
        icon: "menu-icon fa fa-cogs",
        component: "",
        data: [
          {
            id: 0,
            title: "Attendance",
            icon: "menu-icon fa fa-cogs",
            path: "/attendance",
            component: <Attendance />,
          },
          {
            id: 0,
            title: "Manage Attendance",
            icon: "menu-icon fa fa-cogs",
            path: "/mange-attendance",
            component: <ManageAttendance />,
          },
          {
            id: 0,
            title: "Attendance Report",
            icon: "menu-icon fa fa-cogs",
            path: "/attendance-report",
            component: <AttendanceReport />,
          },
        ],
      },
      {
        id: 0,
        title: "Payroll",
        icon: "menu-icon fa fa-cogs",
        component: "",
        data: [
          {
            id: 0,
            title: "Add Benefits",
            icon: "menu-icon fa fa-cogs",
            path: "/add-benefits",
            component: <AddBenefits />,
          },
          {
            id: 0,
            title: "Manage Benefits",
            icon: "menu-icon fa fa-cogs",
            path: "/mange-benefits",
            component: <ManageBenefits />,
          },
          {
            id: 0,
            title: "Add Salary Setup",
            icon: "menu-icon fa fa-cogs",
            path: "/add-salary-setup",
            component: <AddSalarySetup />,
          },
          {
            id: 0,
            title: "Manage Salary Setup",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-salary-setup",
            component: <ManageSalarySetup />,
          },
          {
            id: 0,
            title: "Salary Generate",
            icon: "menu-icon fa fa-cogs",
            path: "/salary-generate",
            component: <SalaryGenerate />,
          },
          {
            id: 0,
            title: "Manage Salary Generate",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-salary-generate",
            component: <ManageSalaryGenerate />,
          },
          {
            id: 0,
            title: "Salary Payment",
            icon: "menu-icon fa fa-cogs",
            path: "/salary-payment",
            component: <SalaryPayment />,
          },
        ],
      },
      {
        id: 0,
        title: "Expense",
        icon: "menu-icon fa fa-cogs",
        component: "",
        data: [
          {
            id: 0,
            title: "Add Expense Item",
            icon: "menu-icon fa fa-cogs",
            path: "/add-expense-item",
            component: <AddExpenseItem />,
          },
          {
            id: 0,
            title: "Manage Expense Item",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-expense-item",
            component: <ManageExpenseItem />,
          },
          {
            id: 0,
            title: "Add Expense",
            icon: "menu-icon fa fa-cogs",
            path: "/add-expense",
            component: <AddExpense />,
          },
          {
            id: 0,
            title: "Manage Expense",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-expense",
            component: <ManageExpense />,
          },
          {
            id: 0,
            title: "Expense Statement",
            icon: "menu-icon fa fa-cogs",
            path: "/expense-statement",
            component: <ExpenseStatement />,
          },
        ],
      },
      {
        id: 0,
        title: "Office Loan",
        icon: "menu-icon fa fa-cogs",
        component: "",
        data: [
          {
            id: 0,
            title: "Add Person",
            icon: "menu-icon fa fa-cogs",
            path: "/add-person",
            component: <AddPerson />,
          },
          {
            id: 0,
            title: "Add Loan",
            icon: "menu-icon fa fa-cogs",
            path: "/add-loan",
            component: <AddLoan />,
          },
          {
            id: 0,
            title: "Add Payment",
            icon: "menu-icon fa fa-cogs",
            path: "/add-payment",
            component: <AddPayment />,
          },
          {
            id: 0,
            title: "Manage Person",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-person",
            component: <ManagePerson />,
          },
        ],
      },
      {
        id: 0,
        title: "Personal Loan",
        icon: "menu-icon fa fa-cogs",
        component: "",
        data: [
          {
            id: 0,
            title: "Add Person",
            icon: "menu-icon fa fa-cogs",
            path: "/add-person",
            component: <AddPerson />,
          },
          {
            id: 0,
            title: "Add Loan",
            icon: "menu-icon fa fa-cogs",
            path: "/add-loan",
            component: <AddLoan />,
          },
          {
            id: 0,
            title: "Add Payment",
            icon: "menu-icon fa fa-cogs",
            path: "/add-payment",
            component: <AddPayment />,
          },
          {
            id: 0,
            title: "Manage Person",
            icon: "menu-icon fa fa-cogs",
            path: "/manage-person",
            component: <ManagePerson />,
          },
        ],
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
        path: "/add-new-bank",
        component: <AddNewBank />,
      },
      {
        id: 0,
        title: "Manage Bank",
        icon: "menu-icon fa fa-cogs",
        path: "/manage-bank",
        component: <ManageBank />,
      },
      {
        id: 0,
        title: "Bank Transaction",
        icon: "menu-icon fa fa-cogs",
        path: "/bank-transaction",
        component: <BankTransaction />,
      },
      {
        id: 0,
        title: "Bank Ledger",
        icon: "menu-icon fa fa-cogs",
        path: "/bank-ledger",
        component: <BankLedger />,
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
        path: "/add-service",
        component: <AddService />,
      },
      {
        id: 0,
        title: "Manage Service",
        icon: "menu-icon fa fa-cogs",
        path: "/manage-service",
        component: <ManageService />,
      },
      {
        id: 0,
        title: "Service Invoice",
        icon: "menu-icon fa fa-cogs",
        path: "/service-invoice",
        component: <ServiceInvoice />,
      },
      {
        id: 0,
        title: "Manage Service Invoice",
        icon: "menu-icon fa fa-cogs",
        path: "/manage-service-invoice",
        component: <ManageServiceInvoice />,
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
        path: "",
        component: "",
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
        path: "",
        component: "",
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
        path: "",
        component: "",
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
        path: "",
        component: "",
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

export const singleRoutes = [
  {
    path: "product-details/:id",
    component: <ProductDetails />,
  },
  {
    path: "manage-employee/employee-profile/:id",
    component: <EmployeeProfile />,
  },
  {
    path: "update-product/:id",
    component: <UpdateProduct />,
  },
];
