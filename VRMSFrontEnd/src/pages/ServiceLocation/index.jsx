import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { toast } from 'react-toastify'

import {calculateRange, sliceData} from '../../utils/table-pagination';
import { getServiceLocations } from '../../services/adminService';

import '../styles.css';


function ServiceLocations () {
    const [search, setSearch] = useState('');
    const [serviceLocations, setServiceLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(serviceLocations, 5));
        setServiceLocations(sliceData(serviceLocations, page, 5));
        loadAllServiceLocations();
    }, []);

    const loadAllServiceLocations = async () => {
        const response = await getServiceLocations()
        if (response['status'] === 200) {
            setServiceLocations(response['data'])
        } else {
          toast.error('Error while calling get /product api')
        }
      }

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== '') {
            let search_results = serviceLocations.filter((item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setServiceLocations(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setServiceLocations(sliceData(serviceLocations, new_page, 5));
    }

    return(
        <div className='dashboard-content'>

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>Service Location List</h2>
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
                    <th>Add Line1</th>
                    <th>Add Line2</th>
                    <th>City</th>
                    <th>Zip Code</th>
                    <th>Remove</th>
                    </thead>

                    {serviceLocations.length !== 0 ?
                        <tbody>
                            {serviceLocations.map((serviceLocation, index) => (
                                <tr key={index}>
                                   <td><span>{serviceLocation.adrLine1}</span></td>
                                    <td><span>{serviceLocation.adrLine2}</span></td>
                                    <td><span>{serviceLocation.city}</span></td>
                                    <td><span>{serviceLocation.zipCode}</span></td>
                                    <td> <button className='btn btn-Info'>Remove</button> </td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {serviceLocations.length !== 0 ?
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

export default ServiceLocations;