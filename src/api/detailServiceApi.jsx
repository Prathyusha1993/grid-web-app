export const detailServiceApi = () => {
    fetch('http://34.200.212.150/assocpath-webapi/api/dashboard/search/invoice')
      .then(response => response.json())
      .then(data => {
        this.setState({ rowData: data });
      });
}; 