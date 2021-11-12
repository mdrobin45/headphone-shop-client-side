import React,{useState} from 'react';
import { Switch, useRouteMatch,Route, useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrders from './MyOrders/MyOrders';
import Payment from './Payment/Payment';
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from 'awesome-react-icons';


const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <div>
            {/* <div className='flex'>
                <ul>
                    <li>
                        <Link to={`${url}`}>Dashboard</Link>
                    </li>
                    <li>
                        <Link to={`${url}/myOrder`}>My Orders</Link>
                    </li>
                    <li>
                        <Link to={`${url}/payment`}>Payment</Link>
                    </li>
                    <li>
                        <Link to={`${url}/reviews`}>Reviews</Link>
                    </li>
                    <li>
                        <Link to={`${url}/make-admin`}>Make Admin</Link>
                    </li>
                </ul>  
            </div>
            
            <Switch>
                <Route exact path={path}>
                    <DashboardHome/>
                </Route>
                <Route exact path={`${path}/myOrder`}>
                    <MyOrders/>
                </Route>
                <Route exact path={`${path}/payment`}>
                    <Payment/>
                </Route>
            </Switch> */}
            <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div className="absolute right-0">
        <a href="https://github.com/abhijithvijayan/react-minimal-side-navigation">
          View on GitHub
        </a>
      </div>

      <div>
        {<button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            react-minimal-side-navigation
          </span>
        </div>

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
              // Optional
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: "About",
              itemId: "/about",
              elemBefore: () => <Icon name="user" />,
              subNav: [
                {
                  title: "Projects",
                  itemId: "/about/projects",
                  // Optional
                  elemBefore: () => <Icon name="cloud-snow" />
                },
                {
                  title: "Members",
                  itemId: "/about/members",
                  elemBefore: () => <Icon name="coffee" />
                }
              ]
            },
            {
              title: "Another Tab",
              itemId: "/another",
              subNav: [
                {
                  title: "Teams",
                  itemId: "/another/teams"
                  // Optional
                  // elemBefore: () => <Icon name="calendar" />
                }
              ]
            }
          ]}
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Settings",
                itemId: "/settings",
                elemBefore: () => <Icon name="activity" />
              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
        </div>
    );
};

export default Dashboard;