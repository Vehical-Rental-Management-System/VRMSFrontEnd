import React, {useState, useEffect} from 'react';

import allServiceProviders from '../../constants/ServiceProviders';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';


function ReservedVihicles () {
    const [search, setSearch] = useState('');
    const [ServiceProviders, setServiceProviders] = useState(allServiceProviders);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(allServiceProviders, 5));
        setServiceProviders(sliceData(allServiceProviders, page, 5));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = ServiceProviders.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setServiceProviders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setServiceProviders(sliceData(allServiceProviders, new_page, 5));
    }

    return(
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Reserved Vehicles List</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                <thead>
                        <th>Vehicle No</th>
                        <th>Fuel Tyoe</th>
                        <th>Passing Year</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Location</th>
                    </thead>

                    {ServiceProviders.length !== 0 ?
                        <tbody>
                            {ServiceProviders.map((ServiceProvider, index) => (
                                <tr key={index}>
                                    <td><span>{ServiceProvider.id}</span></td>
                                    <td><span>{ServiceProvider.email}</span></td>
                                    <td>
                                    <span>{ServiceProvider.Phone}</span>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{ServiceProvider.first_name} {ServiceProvider.last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>{ServiceProvider.Address}</span></td>
                                    <td><span>{ServiceProvider.GST_No}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {ServiceProviders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default ReservedVihicles;