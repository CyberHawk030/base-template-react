import React from 'react'
import { Table } from 'react-bootstrap'

const TableComponent = ({ columns, data, count, filters, setFilters }) => {
  return (
    <div className="tw-w-full tw-font-roboto">
      <Table striped responsive bordered>
        <thead>
            <tr>
                {columns.map(col => <th key={col.accessor} className='tw-text-center'>{col.header}</th>)}
            </tr>
        </thead>
        <tbody>
            {data.length ? data.map(item => {
              return <tr key={item.id}>
                {columns.map((col, idx) => {
                  return <td key={item.id+Math.random()} className='tw-text-center'>{item[col.accessor]}</td>
                })}
              </tr>
            }) : <tr><td colSpan={columns.length} className='tw-text-center'>No Records Found</td></tr>}
        </tbody>
      </Table>
      <div className='tw-mt-2 tw-flex tw-justify-end tw-items-center'>
          {filters.page > 1 && <div className='box' onClick={() => setFilters({...filters, page: filters.page - 1})}>Previous</div>}
          <div className='box'>{filters.page}</div>
          {filters.page * 10 < count &&<div className='box' onClick={() => setFilters({...filters, page: filters.page + 1})}>Next</div>}
      </div>
    </div>
  )
}

export default TableComponent
