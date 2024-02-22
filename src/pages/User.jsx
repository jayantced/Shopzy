import { useEffect } from 'react';
import SignupForm from '../auth/SignupForm';
import { useSelector, useDispatch } from 'react-redux';
import Logout from '../auth/Logout';
import Login from '../auth/Login';
import { login, selectIsLoggedIn } from '../store/user-slice';

const User = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    // const dispatch = useDispatch();

//   useEffect(() => {
//     // Dispatch the login action if the user is already logged in according to Redux state
//     if (!isLoggedIn) {
//       dispatch(login());
//     }
//   }, [dispatch, isLoggedIn]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card p-4">
            <div className="card-body">
              {isLoggedIn ? (
                <div className="text-center">
                  <h1 className="text-center mb-4">Welcome User!</h1>
                  {/* Render protected content here */}
                  <Logout />
                </div>
              ) : (
                <div>
                  <h1 className="text-center mb-4">Please Login or Signup</h1>
                  <Login />
                  <SignupForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;