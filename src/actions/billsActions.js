import { nanoid } from 'nanoid';



const addBill = (month = '', amount = 0, units = 0, createdAt = 0) => ({
  type: 'ADD_BILL',
  bill: {
    id: nanoid(),
    month,
    amount,
    units,
    createdAt,
  },
});



export { addBill };
