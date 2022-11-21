import React from 'react';
import { Navigate } from 'react-router-dom';

const GuardRoute = ({ children, isLogin }) => {
//   <Route
//     {...rest}
//     element={isLogin ? children : <Navigate to="/login" replace={true} />}
//   />

    return isLogin ? children : <Navigate to="/login" />;
};

export default GuardRoute;
