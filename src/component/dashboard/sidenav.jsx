import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListIcon from '@mui/icons-material/List';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
  const activeStyle = 'border rounded-md bg-t-blue text-white py-2 pl-4 pr-16';
  const inactiveStyle = 'text-t-blue py-2 pl-4 pr-16'; 
  const links = [
    { name: 'My Library', route: 'library',  icon: <ListIcon /> },
    { name: 'Analytic', route: 'analytic', icon: <AssessmentIcon /> }
  ];

  return (
    <div className="flex flex-col gap-2">
      {links.map(({ name, route, icon }) => (
        <NavLink
          key={name}
          to={`/dashboard/${route.toLowerCase()}`}
          className={({ isActive, isExact }) =>
            isActive || isExact ? activeStyle : inactiveStyle
          }
        >
          <div className="flex space-x-2">
            <div>{icon}</div>
            <div>{name}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default SideNav;
