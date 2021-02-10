import {serviceConstants} from './constants';

export const fetchInvoices = (searchParams) => {
    return fetch(`http://${serviceConstants.HOST_NAME}/assocpath-webapi/api/dashboard/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  'Token' : serviceConstants.TOKEN},
        body : JSON.stringify({
          'Invoice_Num': searchParams && searchParams.Invoice_Num ? searchParams.Invoice_Num : '',
          'MRN': '21070804153',
          'Patient_First_Name' :'',
          'Patient_Last_Name' : '',
          'DateOfBirth' : '',
          'Guarantor_Name' : '',
          'DateOfService' : ''
        })
      })
        .then(response => response.json());
  }

  export const fetchInvoiceDetails = (Invoice_Num, Patient_ID) => {
    return fetch(
      `http://${serviceConstants.HOST_NAME}/assocpath-webapi/api/dashboard/search/invoice`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Token: "d6f620f8-639f-4a12-a0f3-01ea3d0f8f69",
        },
        body: JSON.stringify({
          Invoice_Num: Invoice_Num,
          Patient_ID: Patient_ID,
        }),
      }
    ).then((response) => response.json());
  };