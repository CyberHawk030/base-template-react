import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { Spinner } from 'react-bootstrap'
import { getCustomerData } from '../../../api/user'
import TableComponent from '../../../components/Table'
import {useAsyncDebounce} from 'react-table'
import {toast} from 'react-toastify'

const initialFilters = {
  search: '',
  page: 1
}

const CustomerDetails = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)
  const [filters, setFilters] = useState(initialFilters)
  const firstRef = useRef(true)

  const columns = useMemo(() => ([
    {
      header: 'ID',
      accessor: 'id'
    }, {
      header: 'Name',
      accessor: 'name'
    }, {
      header: 'Email',
      accessor: 'email'
    }, {
      header: 'Phone Number',
      accessor: 'phNum',
    }, {
      header: 'Country',
      accessor: 'country'
    }
  ]), [])

  const debounceFilter = useAsyncDebounce((filters) => {
    fetchData(filters)
  }, 1000)



  const fetchData = async (filters) => {
    try {
      
      setLoading(true)

      let {success, data, count, message} = await getCustomerData(filters)
      if(success){
        setData(data)
        setCount(count)
      } else {
        toast.error(message)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if(firstRef.current){
      fetchData(filters)
    }
  }, [filters])

  useEffect(() => {
    if(!firstRef.current){
      debounceFilter(filters)
    }
    firstRef.current = false
  }, [debounceFilter, filters])

  return (
    <div className="tw-w-full tw-rounded-md tw-shadow-2xl tw-shadow-slate-200 shadow tw-p-4 mt-3">
      <div className='tw-flex tw-flex-col sm:tw-flex-row tw-justify-normal sm:tw-justify-between tw-items-center tw-font-roboto'>
        <h4>Customer Details</h4>
        <input 
          className='tw-bg-transparent tw-rounded tw-border border-[1px] tw-border-black tw-outline-none tw-w-auto tw-px-2 py-0.5' 
          onChange={(e) => setFilters({...filters, search: e.target.value})}
          value={filters.search}
          placeholder='Search...'
        />
      </div>
      {loading ? (
        <div className="tw-flex tw-justify-center tw-items-center">
          <Spinner />
        </div>
      ) : (
        <TableComponent columns={columns} count={count} data={data} filters={filters} setFilters={setFilters} />
      )}
    </div>
  )
}

export default CustomerDetails
