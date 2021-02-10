import React, { Component } from "react";

class DemoTable extends COmponent {
    state={
        rows: [{"id":1,"title":'Okadu', "stock":'3', "rate":'4.5'},
             {"id":2, "title":'SLNE', "stock":'4', "rate":'4'},
             {"id":3, "title":'Gameover', "stock":'10', "rate":'2'},
             {"id":4,"title":'Evaru', "stock":'8', "rate":'3.5'},
             {"id":5, "title":'Sahoo', "stock":'9', "rate":'3'}],
        headings: ['id','title','stock','rate']
    };

    handleTableHeader = () => {
        return this.state.headings.map((key, index)=>{
          return <th key={index}>{key}</th>
        })
      }

    render() {
        const rows = this.state.rows.map((row, index)=>{
            return(
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.stock}</td>
                <td>{row.rate}</td>
              </tr>
            )
          });
    
        return(
            <div>
                <table className="table table-hover">
            <tbody>
                <tr>{this.handleTableHeader()}</tr>
                {rows}
           </tbody>
        </table>
            </div>
        );
    }
}