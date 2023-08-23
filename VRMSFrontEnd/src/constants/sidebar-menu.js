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
    },
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
        id: 5,
        icon: ProductIcon,
        path: '/AddVehicle',
        title: 'Add Vehicle',
    },

    {
        id: 6,
        icon: DashboardIcon,
        path: '/ServiceLocations',
        title: 'Service Locations',
    }, 
    {
        id: 7,
        icon: ShippingIcon,
        path: '/Bookings',
        title: 'Bookings',
    }, 
    {
        id: 8,
        icon: ShippingIcon,
        path: '/BookingsWithFeedback',
        title: 'Bookings With Feedback',
    },
    {
        id: 9,
        icon: ShippingIcon,
        path: '/WebsiteFeedback',
        title: 'Website Feedback',
    },
    {
        id: 10,
        icon: DashboardIcon,
        path: '/AddServiceLocation',
        title: 'Add Service Location',
    }, 

]




export default sidebar_menu;

