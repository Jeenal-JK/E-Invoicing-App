import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/Header";
import SortableTable from "../../components/Table/SortableTable";
import SaleReturnForm from "../../containers/sale/SaleReturnForm";

function SaleReturn() {
	const data = [

		{
			Id: 1,
			Date: "01/01/2023",
			Ref_No: 1,
			Party_Name: "Khuman Praful",
			Category: "Sale Return",
			Type: "Case",
			Total: 200,
			Received: 100,
			Balance: 100,
			Status: "Unpaid",
		},

	];

	const config = [
		{
			label: "#",
			render: (data) => data.Id,
			sortValue: (data) => data.Id,
		},
		{
			label: "Date",
			render: (data) => data.Date,
			sortValue: (data) => data.Date,
		},
		{
			label: "Ref No",
			render: (data) => data.Ref_No,
			sortValue: (data) => data.Ref_No,

		},
		{
			label: "Party Name",
			render: (data) => data.Party_Name,
			sortValue: (data) => data.Party_Name,

		},
		{
			label: "Category",
			render: (data) => data.Category,
			sortValue: (data) => data.Category,

		},
		{
			label: "Type",
			render: (data) => data.Type,
			sortValue: (data) => data.Type,

		},
		{
			label: "Total",
			render: (data) => data.Total,
			sortValue: (data) => data.Total,

		},
		{
			label: "Received",
			render: (data) => data.Received,
			sortValue: (data) => data.Received,

		},
		{
			label: "Balance",
			render: (data) => data.Balance,
			sortValue: (data) => data.Balance,

		},
		{
			label: "Status",
			render: (data) => data.Status,

		},

	];

	const keyfn = (item) => item.name;

	return (
		<>
			<Header />
			<Sidebar />

			<div className="main-content">

				<div className="content-top-gap">
					<div className="card ">
						<div className="card-header">
							<span>Sale Return</span>
							<div className="invoice_No mr-3 ">
								<i className="bi bi-printer-fill fa-2x" />
							</div>
						</div>

					</div>

					<div className="card mt-3 ">
						<div className="card-header">

							<span> TRANSACTIONS   </span>
							<div className="item_right row">
								
								<div className="col">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><i className=" bi bi-search"/></span>
										</div>
										<input type="text" className="form-control" placeholder="Search Transaction" aria-label="Username" aria-describedby="basic-addon1" />
									</div>
								</div>
								<div className="col-5 ">
									{" "}
									<SaleReturnForm />
									{" "}
								</div>
							</div>

							

						</div>
						<div className="card-body panel_height">

							<SortableTable data={data} config={config} keyfn={keyfn} file={"Invoice"}/>

						</div>
					</div>

				</div>
			</div>

		</>
	);
}

export default SaleReturn;
