import React from 'react';



class AddBillForm extends React.Component {
  constructor(props) {
    super(props);

    this.fields = [{
      label: 'Month',
      id: 'month',
      type: 'text',
    },{
      label: 'Total Amount',
      id: 'amount',
      type: 'text',
    },{
      label: 'Total Units',
      id: 'units',
      type: 'number',
    }];
  }

  render() {
    return (
      <div>
        <h2>
          Add a bill
        </h2>
        <form>
          {this.fields.map(field => (
            <div key={field.id}>
              <label htmlFor={'bill-' + field.id}>
                {field.label}
              </label>
              <input id={'bill-' + field.id} type={field.type} />
            </div>
          ))}
        </form>
      </div>
    );
  }
}



export default AddBillForm;
