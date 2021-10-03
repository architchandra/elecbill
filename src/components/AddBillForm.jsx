import React from 'react';
import { connect } from 'react-redux';
import { addBill } from '../actions/billsActions';



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

  onFormSubmit = (e) => {
    e.preventDefault();
    const targetForm = e.target;
    this.props.dispatch(addBill(
      targetForm['bill-month'].value,
      targetForm['bill-amount'].value,
      targetForm['bill-units'].value
    ));
  }

  render() {
    return (
      <div>
        <h2>
          Add a bill
        </h2>
        <form onSubmit={this.onFormSubmit}>
          {this.fields.map(field => (
            <div key={field.id}>
              <label htmlFor={'bill-' + field.id}>
                {field.label}
              </label>
              <input name={'bill-' + field.id} id={'bill-' + field.id} type={field.type} required />
            </div>
          ))}
          <input type="submit" value="Add Bill" />
        </form>
      </div>
    );
  }
}



const mapStateToProps = (state) => ({
  bills: state.bills,
});
export default connect(mapStateToProps)(AddBillForm);
