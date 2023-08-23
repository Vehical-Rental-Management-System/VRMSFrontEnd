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
        id: 3,
        icon: ProductIcon,
        path: '/AllVehicles',
        title: 'All vehicles',
    },

 {
        id: 6,
        icon: UserIcon,
        path: '/Profile',
        title: 'My account',
    },

 {
        id: 8,
        icon: UserIcon,
        path: '/UpdateVehicle',
        title: 'Update Vehicle',
    },

  {
        id: 10,
        icon: UserIcon,
        path: '/ChangePassword',
        title: 'Change Password',
    }


]

export default sidebar_menu;