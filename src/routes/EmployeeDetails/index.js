import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./index.css";
import constants from "../../components/router.constants";

export default function EmployeeDetails() {
  const params = useParams();
  let [data, setData] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios({
      url: `https://reqres.in/api/users/${params.id}`,
      method: "GET",
    })
      .then((res) => {
        if (res.status === 200) {
          setError(false);
          setData(res.data.data);
          setLoading(false);
        }
      })

      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          setError(true);
        }
      });
  }, [params.id]);

  return (
    <>
      <div class="content-block">
        <section class="card">
          <div class="card-header">
            <h3>Employee Details</h3>
          </div>
          {loading ? (
            <div class="card-body">
              <h6>Loading</h6>
            </div>
          ) : error ? (
            <div class="card-body">
              <h3>! {constants.messages.errorMessage}</h3>
            </div>
          ) : (
            <div class="card-body">
              <img className="details-img" src={data.avatar} alt="avatar" />
              <div className="details-name">
                <i class="fa fa-user name" aria-hidden="true"></i>
                <h5>
                  {data.first_name} {data.last_name}
                </h5>
              </div>
              <div className="details-email ">
                <i class="fa fa-envelope email" aria-hidden="true"></i>
                <h5>{data.email}</h5>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
