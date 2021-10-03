import { nanoid } from 'nanoid';



const addBill = (title = '', amount = 0, createdAt = 0, payers = [], settlers = []) => ({
  type: 'ADD_BILL',
  bill: {
    id: nanoid(),
    title,
    amount,
    createdAt,
    payers,
    settlers,
  },
});



export { addBill };
