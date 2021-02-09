import React, { Component } from 'react';
//import { render } from 'react-dom';
import { AgGridReact } from '@ag-grid-community/react';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import {masterRowData} from './data';
import {rowDetailData} from './detailData';
import Search from './search'
//import detailServiceApi from '../api/detailServiceApi'

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
        field: 'Patient_Full_Name'  ,
        minWidth: 200,
        resizable: true,
        //valueGetter: this.fullNameGetter,
      },
        {headerName: 'MRN',
        field: 'MRN',
        minWidth: 150,},
        {headerName: 'DOB & Sex',
        field: 'DOB_Sex',
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
                { headerName: 'Insurance',
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
                 field: 'Pay_Code_Desc',
                 minWidth: 100,
                 resizable: true},
                {headerName: 'LP Pay Code & Desc	',
                 field: 'LP_Pay_Code' + 'LP_Pay_Code_Desc',
                 minWidth: 100,
                 resizable: true },
                {headerName: 'LP Post Date',
                 field: 'LP_PostDate',
                 minWidth: 100,
                 resizable: true },
                {headerName: 'LP Approved',
                 field: 'LP_Approved_Amount',
                 minWidth: 100,
                 resizable: true },
                {headerName: 'LP Payments',
                 field: 'LP_Pay_Amt',
                 minWidth: 100,
                 resizable: true },
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
          params.successCallback(rowDetailData);
        },
      },
      //rowData: [],
    };
  }

  // fullNameGetter = (params) => {
  //   return this.state.rowData.Patient_First_Name + ' ' + this.state.rowData.Patient_Last_Name;
  // };


  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // const requestOptions = {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: { 'Content-Type': 'application/json',
    //              'Token' : 'd6f620f8-639f-4a12-a0f3-01ea3d0f8f69'},
    //   body: JSON.stringify({
    //       'Invoice_Num' : '',
    //       'MRN': '',
    //       'Patient_First_Name' :'',
    //       'Patient_Last_Name' : '',
    //       'DateOfBirth' : '',
    //       'Guarantor_Name' : '',
    //       'DateOfService' : ''
    //   })
    // }
    // console.log(requestOptions);

    // fetch('http://34.200.212.150/assocpath-webapi/api/dashboard/search', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json',
    //             'Token' : 'd6f620f8-639f-4a12-a0f3-01ea3d0f8f69'},
    //   body : JSON.stringify({
    //     'Invoice_Num' : '',
    //     'MRN': '21070804153',
    //     'Patient_First_Name' :'',
    //     'Patient_Last_Name' : '',
    //     'DateOfBirth' : '',
    //     'Guarantor_Name' : '',
    //     'DateOfService' : ''
    //   })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ rowData: data });
    //   });

    // fetch('https://www.ag-grid.com/example-assets/master-detail-data.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ rowData: data });
    //   });
     this.setState({rowData: masterRowData});
  };

//   onFirstDataRendered = (params) => {
//     setTimeout(function () {
//       params.api.getDisplayedRowAtIndex(0).setExpanded(true);
//     }, 0);
//   };

  render() {
    return (
      <div>
        {/* <Search /> */}
        <br />
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
      </div>
      
    );
  }
}

export default AgGrid;