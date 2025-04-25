import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./requestapi.css";

export default function RequestExternal() {
  const navigate = useNavigate();

  const [apiKey, setApiKey] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}${endpoint}`;

      const config = {
        method: method,
        url: url,
        headers: {
          Authorization: apiKey,
        },
      };

      if (method === "GET" || method === "DELETE") {
        config.params = extractQueryParams(endpoint);
      } else {
        config.data = {
          api_key: apiKey,
          endpoint: endpoint.split("?")[0],
          path_parameters: extractPathParams(endpoint),
          query_parameters: extractQueryParams(endpoint),
        };
      }

      const res = await axios(config);
      console.log(res.data);
      navigate("/Affiliator", { state: { classes: res.data } });
    } catch (err) {
      console.log(err.response?.data?.error || err.message);
      alert("Error: " + (err.response?.data?.error || err.message));
    }
  };

  const extractQueryParams = (url) => {
    const queryString = url.split("?")[1];
    if (!queryString) return {};
    return Object.fromEntries(new URLSearchParams(queryString));
  };

  const extractPathParams = (url) => {
    const path = url.split("?")[0];
    return path.split("/").filter(Boolean); // ["gymclass", "1"]
  };

  const goBack = () => {
    navigate("/Affiliator");
  };

  return (
    <div className="container-api">
      <div className="form-wrapper">
        <div className="header-row">
          <button className="back-button" onClick={goBack}>
            &#x2039;
          </button>
          <h1 className="heading">Request API</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="apiKey">
              API Key<span className="required">*</span>
            </label>
            <input
              id="apiKey"
              type="text"
              placeholder="Enter your API key"
              required
              className="input"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="baseUrl">
              Base URL<span className="required">*</span>
            </label>
            <input
              id="baseUrl"
              type="text"
              placeholder="e.g. http://localhost:8088"
              required
              className="input"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="endpoint">
              Endpoint & Parameters<span className="required">*</span>
            </label>
            <input
              id="endpoint"
              type="text"
              placeholder="/gymclass/1?sort=name&order=asc"
              required
              className="input"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="method">Method</label>
            <select
              id="method"
              className="input"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>

          <div className="button-container">
            <button type="submit" className="button">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
