import {serviceConstants} from './constants';

export const fetchInvoices = (searchParams) => {
    const authToken = window.localStorage.getItem('AUTH-TOKEN');
    return fetch(`http://${serviceConstants.HOST_NAME}/assocpath-webapi/api/dashboard/search`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                  // 'Token' : 'd6f620f8-639f-4a12-a0f3-01ea3d0f8f69',
                  'Token' : authToken,
                },
        body : JSON.stringify({
          'Invoice_Num': searchParams && searchParams.Invoice_Num ? searchParams.Invoice_Num : '',
          'MRN': searchParams && searchParams.MRN ? searchParams.MRN : '',
          'Patient_First_Name' : searchParams && searchParams.Patient_First_Name ? searchParams.Patient_First_Name : '',
          'Patient_Last_Name' : searchParams && searchParams.Patient_Last_Name ? searchParams.Patient_Last_Name : '',
          'DateOfBirth' : searchParams && searchParams.DateOfBirth ? searchParams.DateOfBirth : '',
          'Guarantor_Name' : searchParams && searchParams.Guarantor_Name ? searchParams.Guarantor_Name : '',
          'DateOfService' : searchParams && searchParams.DateOfService ? searchParams.DateOfService : ''
        })
      })
        .then(response => response.json());
  }

  export const fetchInvoiceDetails = (Invoice_Num, Patient_ID) => {
    const authToken = window.localStorage.getItem('AUTH-TOKEN');
    return fetch(
      `http://${serviceConstants.HOST_NAME}/assocpath-webapi/api/dashboard/search/invoice`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Token: 'd6f620f8-639f-4a12-a0f3-01ea3d0f8f69',
          'Token' : authToken,
        },
        body: JSON.stringify({
          Invoice_Num: Invoice_Num,
          Patient_ID: Patient_ID,
        }),
      }
    ).then((response) => response.json());
  };