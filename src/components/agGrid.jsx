import React, { Component } from "react";
import { AgGridReact } from 'ag-grid-react'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


class AgGrid extends Component {
    state={
        modules: [
            ClientSideRowModelModule,
            MasterDetailModule,
            MenuModule,
            ColumnsToolPanelModule,
        ],
        columnDefs: [
            {
              field: 'Invoice_Num',
              cellRenderer: 'agGroupCellRenderer',
            },
            { field: 'Adm_Visit_Date',
            //cellRenderer: 'agGroupCellRenderer' 
            },
            { field: 'Discharge_Date' },
            {field: 'Patient_First_Name'},
            {field: 'Patient_Last_Name'},
            {field: 'MRN'},
            {field: 'DOB'},
            {field: 'Sex'},
            {field: 'SSN'},
            {field: 'Street_Addr'},
            {field: 'Guarantor_Name'},
            {field: 'Guar_Street_Addr'},
            {field: 'Hospital'},
            {field: 'RefferinigPhysician'},
            {field: 'Pathologist'},
            {field: 'Invoice_FSC_List'},
            {field: 'Total_Charges'},
            {field: 'Invoice_Balance'},
          ],
        rowData: [
            {Invoice_Num: 1345, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1346, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "male",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1347, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1348, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "male",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1349, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1350, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1351, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
            {Invoice_Num: 1352, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" }
        ],
        defaultColDef: {sortable:true, editable:true, filter:true},
        detailCellRendererParams: {
            detailGridOptions: {
              columnDefs: [
                { field: 'ICD_Codes' },
                { field: 'Insurance' },
                {field: 'Ins_Street_Addr',
                //   minWidth: 150,
                },
                {field: 'Ins_Telephone_No',},
                {field: 'Txn_ser',
                //   minWidth: 150,
                },
                { field: 'PostedDate' },
                { field: 'ServiceDate' },
                { field: 'CPT_Code' },
                { field: 'CDM_Code' },
                { field: 'CPT_Description' },
                { field: 'Comments' },
                { field: 'Charges' },
                { field: 'Pay_Amount' },
                { field: 'Adj_Amount' },
                { field: 'Credit_Amount' },
                { field: 'FSC_Mnemonic' },
                { field: 'Batch_Num' },
                { field: 'Pay_Code' },
                { field: 'Pay_Code_Desc' },
                { field: 'LP_Pay_Code' },
                { field: 'LP_Pay_Code_Desc' },
                { field: 'LP_PostDate' },
                { field: 'LP_Approved_Amount' },
                { field: 'LP_Pay_Amt' },
                { field: 'LP_Adj_Amt' },
                { field: 'LP_Coins_Amt' },
                { field: 'LP_Pat_Res' },
                { field: 'LP_Rej_Code' },
              ],
            //   defaultColDef: { flex: 1 },
            },
            getDetailRowData: function (params) {
              params.successCallback(params.data.callRecords);
            },
          },
    };

    render(){
        return(
            <div className="ag-theme-alpine" style={{ width: '100%', height:'350px' }}>
                <AgGridReact
                    modules={this.state.modules}
                    rowData = {this.state.rowData} 
                    columnDefs = {this.state.columnDefs}
                    defaultColDef={this.state.defaultColDef}
                    masterDetail={true}
                    detailCellRendererParams={this.state.detailCellRendererParams}
                />
            </div>
        );
    }
}

export default AgGrid;