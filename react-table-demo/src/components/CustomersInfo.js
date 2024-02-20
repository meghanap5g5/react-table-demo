import { useTable, useSortBy, usePagination } from'react-table';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useMemo } from 'react';
import '../App.css';
// import { Button } from '@mui/material';

function CustomersInfo( {cust_data} ) {
    const data = useMemo(() => cust_data, []);
    const columns = useMemo(() => [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "First Name",
            accessor: "first_name",
        },
        {
            Header: "Last Name",
            accessor: "last_name",
        },
        {
            Header: "Email Address",
            accessor: "email",
        }
    ], []);
    const {getTableProps, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canNextPage, canPreviousPage, state:{pageIndex}, pageCount, gotoPage, } = useTable({ columns, data}, useSortBy, usePagination);
    return(
        <div className='container'>
            <h2>Employee Info</h2>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render("Header")}
                                    {column.isSorted && <span>{column.isSortedDesc ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon/>}</span>}
                                </th>    
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => (
                                <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                            ))}
                            </tr>
                        );
                        })
                    }
                </tbody>
            </table>
            <div className='button-container'>
                <button className=" btn " disabled = {pageIndex === 0} variant="contained" onClick={() => gotoPage(0)}>1</button>
                <button className=" btn " disabled = {!canPreviousPage} variant="contained" onClick={ previousPage }>Prev</button>
                <span>{pageIndex+1} of {pageCount}</span>
                <button className=" btn " disabled = {!canNextPage} variant="contained" onClick={ nextPage }>Next</button>
                <button className=" btn " disabled = {pageIndex >= pageCount-1} variant="contained" onClick={() => gotoPage(pageCount-1)}>{pageCount}</button>
            </div>
        </div>
    );
}

export default CustomersInfo;