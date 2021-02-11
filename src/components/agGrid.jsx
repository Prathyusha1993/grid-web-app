import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
import { fetchInvoices, fetchInvoiceDetails } from "../services/invoiceService";
import CustomLoadingCellRenderer from "./AgGridSpecific/CustomLoadingCellRenderer";

class AgGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modules: [
                ClientSideRowModelModule,
                MasterDetailModule,
                MenuModule,
                ColumnsToolPanelModule,
            ],
            rowData: [],
            columnDefs: [
                {
                    headerName: "Invoice#",
                    field: "Invoice_Num",
                    cellRenderer: "agGroupCellRenderer",
                    minWidth: 150,
                },
                {
                    headerName: "Adm/Visit Date",
                    field: "Adm_Visit_Date",
                    minWidth: 150,
                    resizable: true,
                },
                {
                    headerName: "Discharge Date",
                    field: "Discharge_Date",
                    minWidth: 150,
                    resizable: true,
                },
                {
                    headerName: "Patient Name",
                    minWidth: 150,
                    resizable: true,
                    valueGetter: function addColumns(params) {
                        return (
                            params.data.Patient_First_Name +
                            " " +
                            params.data.Patient_Last_Name
                        );
                    },
                },
                { headerName: "MRN", field: "MRN", minWidth: 150 },
                {
                    headerName: "DOB & Sex",
                    minWidth: 150,
                    resizable: true,
                    valueGetter: function addColumns(params) {
                        return params.data.DOB_String + " " + params.data.Sex;
                    },
                },
                {
                    headerName: "SSN",
                    field: "SSN",
                    minWidth: 150,
                    resizable: true,
                },
                {
                    headerName: "Patient Address",
                    minWidth: 200,
                    resizable: true,
                    valueGetter: function addColumns(params) {
                        return (
                            params.data.Street_Addr_Line1 +
                            " " +
                            params.data.Street_Addr_Line2 +
                            " " +
                            params.data.City_State +
                            " " +
                            params.data.ZIP
                        );
                    },
                },
                {
                    headerName: "Guarantor Name",
                    field: "Guarantor_Name",
                    minWidth: 200,
                },
                {
                    headerName: "Guarantor Address",
                    minWidth: 150,
                    resizable: true,
                    valueGetter: function addColumns(params) {
                        return (
                            params.data.Guar_Street_Addr_l1 +
                            " " +
                            params.data.Guar_Street_Addr_l2 +
                            " " +
                            params.data.Guar_City_State +
                            " " +
                            params.data.Guar_ZIP
                        );
                    },
                },
                {
                    headerName: "Hospital",
                    field: "Hospital",
                    minWidth: 200,
                    resizable: true,
                },
                {
                    headerName: "Referring Physician",
                    field: "ReferringPhysician",
                    minWidth: 200,
                },
                {
                    headerName: "Pathologist",
                    field: "Pathologist",
                    minWidth: 200,
                },
                {
                    headerName: "Invoice FSC List",
                    field: "Invoice_FSC_List",
                    minWidth: 150,
                },
                {
                    headerName: "Total Charges",
                    field: "Total_Charges",
                    minWidth: 150,
                },
                {
                    headerName: "Invoice Balance",
                    field: "Invoice_Balance",
                    minWidth: 150,
                },
            ],
            defaultColDef: { flex: 1, sortable: true },
            detailCellRendererParams: {
                detailGridOptions: {
                    columnDefs: [
                        {
                            headerName: "ICD Codes",
                            field: "ICD_Codes",
                            minWidth: 200,
                            resizable: true,
                        },
                        {
                            headerName: "Txn Seq",
                            field: "Txn_seq",
                            minWidth: 100,
                        },
                        {
                            headerName: "Post Date",
                            field: "Post_Date_String",
                            minWidth: 150,
                        },
                        {
                            headerName: "Service Date",
                            field: "Service_Date_String",
                            minWidth: 150,
                        },
                        {
                            headerName: "CPT Code",
                            field: "CPT_Code",
                            minWidth: 150,
                        },
                        {
                            headerName: "CDM Code",
                            field: "CDM_Code",
                            minWidth: 150,
                        },
                        {
                            headerName: "CPT Desc",
                            field: "CPT_Description",
                            minWidth: 200,
                            resizable: true,
                        },
                        {
                            headerName: "Comments",
                            field: "Comments",
                            minWidth: 150,
                            resizable: true,
                        },
                        {
                            headerName: "Insurance",
                            minWidth: 200,
                            resizable: true,
                            valueGetter: function addColumns(params) {
                                return (
                                    params.data.Ins_Street_Addr_l1 +
                                    " " +
                                    params.data.Ins_Street_Addr_l2 +
                                    " " +
                                    params.data.Ins_City_State +
                                    " " +
                                    params.data.Ins_ZIP +
                                    " " +
                                    params.data.Ins_Telephone_No
                                );
                            },
                        },
                        {
                            headerName: "Charges",
                            field: "Charges",
                            minWidth: 150,
                        },
                        {
                            headerName: "Payments",
                            field: "Pay_Amount",
                            minWidth: 150,
                        },
                        {
                            headerName: "Adjust",
                            field: "Adj_Amount",
                            minWidth: 100,
                        },
                        {
                            headerName: "Credit",
                            field: "Credit_Amount",
                            minWidth: 100,
                        },
                        {
                            headerName: "FSC",
                            field: "FSC_Mnemonic",
                            minWidth: 100,
                        },
                        {
                            headerName: "Batch#",
                            field: "Batch_Num",
                            minWidth: 100,
                        },
                        {
                            headerName: "Pay Code & Desc	",
                            minWidth: 150,
                            resizable: true,
                            valueGetter: function addColumns(params) {
                                return (
                                    params.data.Pay_Code +
                                    " " +
                                    params.data.Pay_Code_Desc
                                );
                            },
                        },
                        {
                            headerName: "LP Pay Code & Desc	",
                            minWidth: 150,
                            resizable: true,
                            valueGetter: function addColumns(params) {
                                return (
                                    params.data.LP_Pay_Code +
                                    " " +
                                    params.data.LP_Pay_Code_Desc
                                );
                            },
                        },
                        {
                            headerName: "LP Post Date",
                            field: "LP_Post_Date_Strin",
                            minWidth: 150,
                            resizable: true,
                        },
                        {
                            headerName: "LP Approved",
                            field: "LP_Approved_Amount",
                            minWidth: 150,
                        },
                        {
                            headerName: "LP Payments",
                            field: "LP_Pay_Amount",
                            minWidth: 150,
                        },
                        {
                            headerName: "LP Adjust",
                            field: "LP_Adj_Amount",
                            minWidth: 150,
                        },
                        {
                            headerName: "LP CoInsurance",
                            field: "LP_CoIns_Amount",
                            minWidth: 150,
                        },
                        {
                            headerName: "LP Patient Res",
                            field: "LP_Pat_Responsibility",
                            minWidth: 150,
                        },
                        {
                            headerName: "LP Rejection Code",
                            field: "LP_Rej_Code",
                            minWidth: 200,
                        },
                    ],
                    defaultColDef: { flex: 1 },
                },
                frameworkComponents: {
                    customLoadingCellRenderer: CustomLoadingCellRenderer,
                },
                loadingCellRenderer: "customLoadingCellRenderer",
                loadingCellRendererParams: {
                    loadingMessage: "One moment please...",
                },
                getDetailRowData: function (params) {
                    fetchInvoiceDetails(
                        params.data.Invoice_Num,
                        params.data.Patient_ID
                    ).then((detailRowData) => {
                        params.successCallback(detailRowData.data);
                    });
                },
            },
            detailRowData: null,
        };
    }

    componentWillReceiveProps(nextProps) {
        const searchParams = nextProps.searchParams;
        this.fetchAndUpdateInvoicesInState(searchParams);
    }

    fetchAndUpdateInvoicesInState = (searchParams) => {
        this.setState({ rowData: null });
        fetchInvoices(searchParams).then((data) => {
            this.setState({ rowData: data.data });
        });
    };

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        //this.fetchAndUpdateInvoicesInState();
    };

    render() {
        return (
            <div>
                <br />
                <div style={{ width: "100%", height: "550px" }}>
                    <div
                        id="myGrid"
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                        className="ag-theme-alpine"
                    >
                        <AgGridReact
                            modules={this.state.modules}
                            columnDefs={this.state.columnDefs}
                            defaultColDef={this.state.defaultColDef}
                            masterDetail={true}
                            detailCellRendererParams={
                                this.state.detailCellRendererParams
                            }
                            onGridReady={this.onGridReady}
                            rowData={this.state.rowData}
                            loadingCellRenderer={this.state.loadingCellRenderer}
                            loadingCellRendererParams={
                                this.state.loadingCellRendererParams
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default AgGrid;
