import { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../api/axios";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `/auth/${param.id}/verify/${param.verifyToken}`;
        await axios.get(url);

        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, []);

  return (
    <Fragment>
      {validUrl ? (
        <div>
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
