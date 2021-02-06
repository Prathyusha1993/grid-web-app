import React, { Component } from 'react';
//import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';

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
      columnDefs: [
        {
          headerName: 'Invoice#',
          field: 'Invoice_Num',
          cellRenderer: 'agGroupCellRenderer',
          minWidth: 150,
        },
        { headerName: 'Adm/Visit Date',
        field: 'Adm_Visit_Date',
        minWidth: 150, },
        { headerName: 'Discharge Date',
        field: 'Discharge_Date',
        minWidth: 150, },
        {headerName: 'Patient Name',
        field: 'Patient_First_Name&Patient_Last_Name'  ,
        minWidth: 200,
        resizable: true,
        valueGetter: this.fullNameGetter,
      },
        {headerName: 'MRN',
        field: 'MRN',
        minWidth: 150,},
        {headerName: 'DOB & Sex',
        field: 'DOB' + 'Sex',
        minWidth: 150,
        resizable: true},
        {headerName: 'SSN',
        field: 'SSN',
        minWidth: 150,},
        {headerName: 'Patient Address',
        field: 'Street_Addr',
        minWidth: 250,
        resizable: true},
        {headerName: 'Guarantor Name',
        field: 'Guarantor_Name',
        minWidth: 200,},
        {headerName: 'Guarantor Address',
        field: 'Guar_Street_Addr',
        minWidth: 150,
        resizable: true},
        {headerName: 'Hospital',
        field: 'Hospital',
        minWidth: 200,
        resizable: true},
        {headerName: 'Referring Physician',
        field: 'RefferinigPhysician',
        minWidth: 200,
        resizable: true},
        {headerName: 'Pathologist',
        field: 'Pathologist',
        minWidth: 200,
        resizable: true},
        {headerName: 'Invoice FSC List',
        field: 'Invoice_FSC_List',
        minWidth: 150,
        resizable: true},
        {headerName: 'Total Charges',
        field: 'Total_Charges',
        minWidth: 150,},
        {headerName: 'Invoice Balance',
        field: 'Invoice_Balance',
        minWidth: 150,},
      ],
      rowData: [
        {Invoice_Num: 1345, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_ID:"12", Patient_Full_Name: "Kiran Digavinti", Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" }, 
        {Invoice_Num: 1346, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },  
        {Invoice_Num: 1347, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969", Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" }, 
        {Invoice_Num: 1348, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
        {Invoice_Num: 1349,Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
        {Invoice_Num: 1350, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" },
        {Invoice_Num: 1351, Adm_Visit_Date: "12-23-2020",Discharge_Date: "12-27-2020",Patient_First_Name: "SIMONE B",Patient_Last_Name:"ANTINORI", MRN: 21070804153,DOB: "5/16/1969",Sex: "female",SSN: "557-73-3905",Street_Addr:"480 LUCERNE AVE,Tampa,FL,33606", Guarantor_Name:"Elena",Guar_Street_Addr:"",Hospital:"ST. JOSEPH'S HOSPITAL",RefferinigPhysician:"CAMPBELL,SYLVIA", Pathologist:"JEFFREY MD,P.BRIAN", Invoice_FSC_List:"12", Total_Charges:"1368",Invoice_Balance:"0" } 
        
    ],
      defaultColDef: { flex: 1, sortable:true },
      detailCellRendererParams: {
        detailGridOptions: {
            columnDefs: [
                { headerName: 'ICD Codes',
                field: 'ICD_Codes',
                minWidth: 550, },
                {headerName: 'Txn Seq',
                field: 'Txn_seq',
                   minWidth: 100,
                },
                { headerName: 'Post Date',
                field: 'PostedDate',
                minWidth: 100,
                resizable: true },
                { headerName: 'Service Date',
                field: 'ServiceDate',
                minWidth: 100,
                resizable: true },
                { headerName: 'CPT Code',
                field: 'CPT_Code',
                minWidth: 100, },
                { headerName: 'CDM Code',
                field: 'CDM_Code',
                minWidth: 100, },
                { headerName: 'CPT Desc',
                field: 'CPT_Description',
                minWidth: 350, 
                resizable: true},
                { headerName: 'Comments',
                field: 'Comments',
                minWidth: 200,
                resizable: true},
                { headerName: 'Insurance					',
                field: 'Insurance_Details',
                minWidth: 450, 
                resizable: true},
                { headerName: 'Charges',
                field: 'Charges',
                minWidth: 100, },
                { headerName: 'Payments',
                field: 'Pay_Amount',
                minWidth: 100, },
                { headerName: 'Adjust',
                field: 'Adj_Amount',
                minWidth: 100, },
                { headerName: 'Credit',
                field: 'Credit_Amount',minWidth: 100,
               },
                { headerName: 'FSC',
                field: 'FSC_Mnemonic',
                minWidth: 100, },
                {headerName: 'Batch#',
                 field: 'Batch_Num',minWidth: 100,
                 },
                {headerName: 'Pay Code & Desc	',
                 field: 'Pay_Code' +  'Pay_Code_Desc',
                 minWidth: 100,},
                {headerName: 'LP Pay Code & Desc	',
                 field: 'LP_Pay_Code' + 'LP_Pay_Code_Desc',
                 minWidth: 100, },
                {headerName: 'LP Post Date',
                 field: 'LP_PostDate',
                 minWidth: 100, },
                {headerName: 'LP Approved',
                 field: 'LP_Approved_Amount',
                 minWidth: 100, },
                {headerName: 'LP Payments',
                 field: 'LP_Pay_Amt',
                 minWidth: 100, },
                {headerName: 'LP Adjust',
                 field: 'LP_Adj_Amt',
                 minWidth: 100, },
                {headerName: 'LP CoInsurance',
                 field: 'LP_Coins_Amt',
                 minWidth: 100, },
                {headerName: 'LP Patient Res',
                 field: 'LP_Pat_Res',
                 minWidth: 100, },
                {headerName: 'LP Rejection Code',
                 field: 'LP_Rej_Code' ,
                 minWidth: 100,}
              ],
          defaultColDef: { flex: 1 },
        },
        getDetailRowData: function (params) {
          params.successCallback(this.state.rowDetailData);
        }.bind(this),
      },
      rowDetailData: [
        {ICD_Codes:" C50.412 Malig neoplasm of upper-outer ,C50.612 Malignant neoplasm of axillary", Insurance_Details:"UHC Chc Chc Plus Atlanta,PO BOX 740800,ATLANTA, GA,30374", 
        Txn_seq:"1", PostedDate:"7/9/2019", ServiceDate:"6/25/2019", CPT_Code:"88342", 
        CDM_Code:"4920022", CPT_Description:"IMMUNOPEROXIDASE INITIAL SPECIMEN", Comments:"Provider", Charges:"380", Pay_Amount:"0",Adj_Amount: "0",
        Credit_Amount:"0", FSC_Mnemonic:"DNB", FSC_Name:"DO NOT BILL", Batch_Num:"159176", Pay_Code:"97", Pay_Code_Desc:"CHARGE CORRECTION", LP_Pay_Code:"",
        LP_Pay_Code_Desc:"", LP_PostDate:"", LP_Approved_Amount:"0", LP_Pay_Amt:"0", LP_Adj_Amt:"0", LP_Coins_Amt:"0", LP_Pat_Res:"0", LP_Rej_Code:""},

        {ICD_Codes:" C50.412 Malig neoplasm of upper-outer ,C50.612 Malignant neoplasm of axillary", Insurance_Details:"UHC Chc Chc Plus Atlanta,PO BOX 740800,ATLANTA, GA,30374", 
        Txn_seq:"1", PostedDate:"7/9/2019", ServiceDate:"6/25/2019", CPT_Code:"88342", 
        CDM_Code:"4920022", CPT_Description:"IMMUNOPEROXIDASE INITIAL SPECIMEN", Comments:"Provider", Charges:"380", Pay_Amount:"0",Adj_Amount: "0",
        Credit_Amount:"0", FSC_Mnemonic:"DNB", FSC_Name:"DO NOT BILL", Batch_Num:"159176", Pay_Code:"97", Pay_Code_Desc:"CHARGE CORRECTION", LP_Pay_Code:"",
        LP_Pay_Code_Desc:"", LP_PostDate:"", LP_Approved_Amount:"0", LP_Pay_Amt:"0", LP_Adj_Amt:"0", LP_Coins_Amt:"0", LP_Pat_Res:"0", LP_Rej_Code:""},

        {ICD_Codes:" C50.412 Malig neoplasm of upper-outer ,C50.612 Malignant neoplasm of axillary", Insurance_Details:"UHC Chc Chc Plus Atlanta,PO BOX 740800,ATLANTA, GA,30374", 
        Txn_seq:"1", PostedDate:"7/9/2019", ServiceDate:"6/25/2019", CPT_Code:"88342", 
        CDM_Code:"4920022", CPT_Description:"IMMUNOPEROXIDASE INITIAL SPECIMEN", Comments:"Provider", Charges:"380", Pay_Amount:"0",Adj_Amount: "0",
        Credit_Amount:"0", FSC_Mnemonic:"DNB", FSC_Name:"DO NOT BILL", Batch_Num:"159176", Pay_Code:"97", Pay_Code_Desc:"CHARGE CORRECTION", LP_Pay_Code:"",
        LP_Pay_Code_Desc:"", LP_PostDate:"", LP_Approved_Amount:"0", LP_Pay_Amt:"0", LP_Adj_Amt:"0", LP_Coins_Amt:"0", LP_Pat_Res:"0", LP_Rej_Code:""},

        {ICD_Codes:" C50.412 Malig neoplasm of upper-outer ,C50.612 Malignant neoplasm of axillary", Insurance_Details:"UHC Chc Chc Plus Atlanta,PO BOX 740800,ATLANTA, GA,30374", 
        Txn_seq:"1", PostedDate:"7/9/2019", ServiceDate:"6/25/2019", CPT_Code:"88342", 
        CDM_Code:"4920022", CPT_Description:"IMMUNOPEROXIDASE INITIAL SPECIMEN", Comments:"Provider", Charges:"380", Pay_Amount:"0",Adj_Amount: "0",
        Credit_Amount:"0", FSC_Mnemonic:"DNB", FSC_Name:"DO NOT BILL", Batch_Num:"159176", Pay_Code:"97", Pay_Code_Desc:"CHARGE CORRECTION", LP_Pay_Code:"",
        LP_Pay_Code_Desc:"", LP_PostDate:"", LP_Approved_Amount:"0", LP_Pay_Amt:"0", LP_Adj_Amt:"0", LP_Coins_Amt:"0", LP_Pat_Res:"0", LP_Rej_Code:""},

        {ICD_Codes:" C50.412 Malig neoplasm of upper-outer ,C50.612 Malignant neoplasm of axillary", Insurance_Details:"UHC Chc Chc Plus Atlanta,PO BOX 740800,ATLANTA, GA,30374", 
        Txn_seq:"1", PostedDate:"7/9/2019", ServiceDate:"6/25/2019", CPT_Code:"88342", 
        CDM_Code:"4920022", CPT_Description:"IMMUNOPEROXIDASE INITIAL SPECIMEN", Comments:"Provider", Charges:"380", Pay_Amount:"0",Adj_Amount: "0",
        Credit_Amount:"0", FSC_Mnemonic:"DNB", FSC_Name:"DO NOT BILL", Batch_Num:"159176", Pay_Code:"97", Pay_Code_Desc:"CHARGE CORRECTION", LP_Pay_Code:"",
        LP_Pay_Code_Desc:"", LP_PostDate:"", LP_Approved_Amount:"0", LP_Pay_Amt:"0", LP_Adj_Amt:"0", LP_Coins_Amt:"0", LP_Pat_Res:"0", LP_Rej_Code:""}
    ],
    };
  }

  fullNameGetter = (params) => {
    return this.state.rowData.Patient_First_Name + ' ' + this.state.rowData.Patient_Last_Name;
  };


  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ rowData: data });
    //   });
    //this.setState({rowData: masterDetailData});
  };

//   onFirstDataRendered = (params) => {
//     setTimeout(function () {
//       params.api.getDisplayedRowAtIndex(0).setExpanded(true);
//     }, 0);
//   };

  render() {
    return (
      <div style={{ width: '100%', height: '550px', }}>
        <div
          id="myGrid"
          style={{
            height: '100%',
            width: '100%',
          }}
          className="ag-theme-alpine"
        >
          <AgGridReact
             modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            masterDetail={true}
            detailCellRendererParams={this.state.detailCellRendererParams}
            onGridReady={this.onGridReady}
            //onFirstDataRendered={this.onFirstDataRendered.bind(this)}
            rowData={this.state.rowData}
          />
        </div>
      </div>
    );
  }
}

export default AgGrid;