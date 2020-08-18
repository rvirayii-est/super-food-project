// import React from "react";
// import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, DashboardLayout, LandingLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

import UserView from "./views/admin/users.views";
import DashboardView from "./views/admin/dashboard.views";
import DeliveryView from "./views/admin/deliveries.views";
import SignUpView from "./views/signup.views";
//login
import Login from "./views/Login.views";
import MapSampleView from "./views/admin/map-sample.views";

// site
import LandingPage from "./views/site/landing-page.component";

export default [
  // SECTION SITE
  {
    path: "/",
    exact: true,
    layout: LandingLayout,
    component: LandingPage
  },
  // SECTION ADMIN
  {
    path: "/dashboard",
    layout: DashboardLayout,
    component: DashboardView
  },
  {
    path: "/merchants",
    layout: DashboardLayout,
    component: DashboardView
  },
  {
    path: "/map-sample",
    layout: DashboardLayout,
    component: MapSampleView
  },
  {
    path: "/users",
    layout: DashboardLayout,
    component: UserView
  },
  {
    path: "/deliveries",
    layout: DashboardLayout,
    component: DeliveryView
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: SignUpView
  },
  // INSERT LOGIN HERE
  {
    path: "/login",
    layout: DefaultLayout,
    component: Login
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DashboardLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }

];
