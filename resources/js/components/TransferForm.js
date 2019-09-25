import React from 'react'

const TransferForm = () => (
    <form className="form-inline justify-content-center">
        <div className="form-group">
            <input type="text" className="form-control" id="description" name="description"
                   aria-describedby="emailHelp" placeholder="Description"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" id="amount" name="amount"/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">Add</button>
        </div>
    </form>
)

export default TransferForm
