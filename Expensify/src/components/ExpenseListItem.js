import React from 'react';
import { connect } from 'react-redux';
import { removeExpense} from '../actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h1> {description} </h1>
        <p> {amount} </p>
        <p> {createdAt} </p>
        <button onClick = {() => {
            dispatch(removeExpense({ id }));
        }}> Remove </button>
    </div>
);


export default connect()(ExpenseListItem);

