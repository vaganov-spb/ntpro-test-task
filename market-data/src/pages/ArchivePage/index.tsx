import React, { useState, useEffect } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'
import queryString from 'query-string'
import { ColumnsType, FilterValue, SorterResult } from 'antd/lib/table/interface'
import { TableProps } from 'antd/lib/table/Table'
import { symbolsToObject } from '../../utils/symbolsToObjects'
import { textToColorMatch } from '../../utils/textToColorMatch'
import { IOrder } from './ArchiveData'

interface IArchivePageProps {
  data: IOrder[]
}

const ArchivePage = ({ data }: IArchivePageProps) => {
  const [filteredInfo, setFilteredInfo] = useState<Record<string, FilterValue | null>>({})
  const [sortedInfo, setSortedInfo] = useState<SorterResult<IOrder>>({})
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const params = queryString.parse(location.search, { arrayFormat: 'bracket' })

    const filters = {
      side: params.side || null,
      symbol: params.symbol || null,
    }
    const sorter = {
      field: 'ts',
      order: params.order || null,
    }

    // @ts-ignore
    setFilteredInfo(filters)
    setSortedInfo(sorter as SorterResult<IOrder>)
  }, [])

  const columns: ColumnsType<IOrder> = [
    {
      title: 'Side',
      dataIndex: 'side',
      filters: [
        {
          text: 'Buy',
          value: 'BUY',
        },
        {
          text: 'Sell',
          value: 'SELL',
        },
      ],
      onFilter: (value, record) => record.side === value,
      render: (text) => <div style={{ color: textToColorMatch(text) }}>{text}</div>,
      filteredValue: filteredInfo.side || null,
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Instrument',
      dataIndex: 'symbol',
      filters: symbolsToObject(),
      onFilter: (value: string | number | boolean, record) =>
        record.symbol.indexOf(`${value}`) !== -1,
      filteredValue: filteredInfo.symbol || null,
      filterSearch: true,
    },
    {
      title: 'Volume',
      dataIndex: 'qty',
    },
    {
      title: 'Timestamp',
      dataIndex: 'ts',
      sorter: (a, b) => new Date(a.ts).getTime() - new Date(b.ts).getTime(),
      sortOrder: sortedInfo.field === 'ts' ? sortedInfo.order : null,
    },
  ]

  const onChange: TableProps<IOrder>['onChange'] = (pagination, filters, sorter, _) => {
    const filtersString = queryString.stringify(
      {
        side: filters.side || [],
        symbol: filters.symbol || [],
        // @ts-ignore
        order: sorter.order || null,
      },
      { arrayFormat: 'bracket' },
    )

    navigate(`.?${filtersString}`)

    setFilteredInfo(filters)
    setSortedInfo(sorter as SorterResult<IOrder>)
  }

  return <Table columns={columns} dataSource={data} onChange={onChange} />
}

const mapStateToProps = (state) => {
  return {
    data: state.orderReducer,
  }
}

export default connect(mapStateToProps, null)(ArchivePage)
