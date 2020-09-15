
import bxsUser from '@iconify/icons-bx/bxs-user';
import bxsCog from '@iconify/icons-bx/bxs-cog';
import bxLogOut from '@iconify/icons-bx/bx-log-out';

export const PROFILE_DROPDOWN_ROUTES = [
  {
    id: 1,
    icon: bxsUser,
    name: "My Profile",
    routeName: "/profile/me",
  },
  {
    id: 2,
    icon: bxsCog,
    name: "Settings",
    routeName: "/profile/me",
  },
  {
    id: 3,
    icon: bxLogOut,
    name: "Logout",
    routeName: "/profile/me",
  },
];