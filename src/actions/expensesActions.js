import { nanoid } from 'nanoid';



const addExpense = (title = '', amount = 0, createdAt = 0, payers = [], settlers = []) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: nanoid(),
    title,
    amount,
    createdAt,
    payers,
    settlers,
  },
});



export { addExpense };
