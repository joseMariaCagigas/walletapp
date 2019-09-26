import React from 'react'

const TransferForm = ({form, onChange, onSubmit}) => (
    <form className="form-inline justify-content-center" onSubmit={ onSubmit }>
        <div className="form-group">
            <input type="text" className="form-control" id="description" name="description" required
                   aria-describedby="emailHelp" placeholder="Description" value={ form.description } onChange={ onChange }/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="amount" name="amount" required
                   value={ form.amount } onChange={ onChange }/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">Add</button>
        </div>
    </form>
)

export default TransferForm
