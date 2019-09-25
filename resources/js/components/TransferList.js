import React from 'react'

const TransferList = ({transfers}) => (
    <table className="table table-striped">
        <tbody>
        <tr>
            <th>Concepto</th>
            <th>Cantidad</th>
        </tr>
        { transfers.map((transfer) => (
            <tr key={ transfer.id }>
                <td>{ transfer.description }</td>
                <td>{ transfer.amount }</td>
            </tr>
        ))}
        </tbody>
    </table>
)

export default TransferList
