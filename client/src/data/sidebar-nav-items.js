export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">home</i>',
      htmlAfter: ""
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">group</i>',
      to: "/users",
    },
    {
      title: "Deliveries",
      htmlBefore: '<i class="material-icons">local_shipping</i>',
      to: "/deliveries",
    },
    {
      title: "Merchants",
      htmlBefore: '<i class="material-icons">store</i>',
      to: "/merchants",
    },
    {
      title: "Map Sample",
      htmlBefore: '<i class="material-icons">map</i>',
      to: "/map-sample",
    },
  ];
}
