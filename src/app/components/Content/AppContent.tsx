
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { hasRoutePermission } from 'utils';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { getToken } from 'utils/auth';
import { setLoginState } from 'app/redux/appStateSlice';
import { NotFound } from '../Result';


const createRoutes = (routes, permissions?: string[]) => {
  return routes.map(
    ({
      path,
      title,
      children,
      component,
      permissions: routePermission,
    }) => {
      if (!hasRoutePermission(routePermission, permissions)) {
        return null
      }
      if (children?.length > 0) {
        return createRoutes(children)
      }
      return (
        <Route key={path} path={path} element={component}>
      </Route>
      )
    }
  )
}
export default function AppContent({ routes }) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const permissions = useAppSelector(({ userLogin }) => userLogin.info.permissions);


  useEffect(() => {
    if (!getToken()) {
      dispatch(setLoginState(false))
      navigate('/')
    }
  }, [location, dispatch, navigate])



  return (
    <Routes>
      {createRoutes(routes, permissions)}
      <Route path="/404" element={<NotFound />} />
    </Routes>
  )
}