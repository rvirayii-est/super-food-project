import { nanoid } from 'nanoid';
// icons
import bxsDashboard from '@iconify/icons-bx/bxs-dashboard';
import bxsTruck from '@iconify/icons-bx/bxs-truck';
import multipleUsers from '@iconify/icons-gridicons/multiple-users';
import bxsStore from '@iconify/icons-bx/bxs-store';
// import tagsIcon from '@iconify/icons-fa/tags';
// import fileExcelFilled from '@iconify/icons-ant-design/file-excel-filled';

export const DASHBOARD_ROUTES = [
  {
    id: nanoid(),
    routeName: "/admin/dashboard",
    name: "Dashboard",
    icon: bxsDashboard,
  },
  {
    id: nanoid(),
    routeName: "/admin/users",
    name: "Users",
    icon: multipleUsers,
  },
  {
    id: nanoid(),
    routeName: "/admin/deliveries",
    name: "Delivieries",
    icon: bxsTruck,
    // icon: tagsIcon,
    // icon: fileExcelFilled,
  },
  {
    id: nanoid(),
    routeName: "/admin/merchants",
    name: "Merchants",
    icon: bxsStore,
    // icon: bxCabinet,
  },
];
