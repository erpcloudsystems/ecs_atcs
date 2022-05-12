// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.query_reports["Customer Supplier Summary"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": "",
			"hidden": 1
		},
		{
			"fieldname":"Customer",
			"label": __("Customer"),
			"fieldtype": "Link",
			"options": "Customer",
			"reqd": 0,
			"default": "NULL"
			
		},
		{
			"fieldname":"Supplier",
			"label": __("Supplier"),
			"fieldtype": "Link",
			"options": "Supplier",
			"reqd": 0,
			"default": "NULL"
		},
		{
			"fieldtype": "Break",
		},
		
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1,
			"width": "60px"
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1,
			"width": "60px"
		}
	]
}

erpnext.utils.add_dimensions('General Ledger', 15)


