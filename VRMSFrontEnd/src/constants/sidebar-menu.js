import DashboardIcon from '../assets/icons/dashboard.svg';
import ShippingIcon from '../assets/icons/shipping.svg';
import ProductIcon from '../assets/icons/product.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Summary',
    },
    {
        id: 2,
        icon: ShippingIcon,
        path: '/Users',
        title: 'Users',
    },
    {
        id: 3,
        icon: ProductIcon,
        path: '/AllVehicles',
        title: 'All vehicles',
    },
    {
        id: 4,
        icon: ProductIcon,
        path: '/AvailableVehicles',
        title: 'Available vehicles',
    },
    {
        id: 5,
        icon: ProductIcon,
        path: '/ReservedVehicles',
        title: 'Reserved vehicles',
    },
    
    {
        id: 6,
        icon: UserIcon,
        path: '/profile',
        title: 'My account',
    }
]

export default sidebar_menu;