import React, { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import Tilt from "react-parallax-tilt";

function App() {
  const [focused, setFocused] = useState(false);
  const user = useRef();
  const pas = useRef();

  const username = useRef();
  const password = useRef();

  const handleFocus = () => {
    if (user.current) {
      user.current.style.bottom = "45px";
    }
  };

  const handleBlur = () => {
    if (user.current && username.current.value === "") {
      user.current.style.bottom = "15px";
      pas.current.style.color = "wheat";
    }
  };

  const handleFocusPassword = () => {
    if (pas.current) {
      pas.current.style.bottom = "45px";
    }
  };

  const handleBlurPassword = () => {
    if (pas.current && password.current.value === "") {
      pas.current.style.bottom = "15px";
      pas.current.style.color = "wheat";
    }
  };

  useEffect(() => {});
  return (
    <>
      <div className="container">
        <motion.h1 whileHover={{ x: -10, y: -10 }}>My Account</motion.h1>

        <div className="wrapper">
          <Tilt
            tiltEnable={true}
            tiltReverse={false}
            tiltAngleXInitial={0}
            tiltAngleYInitial={0}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="black"
            scale={1.1}
            perspective={800}
            reset={true}
            transitionSpeed={500}
          >
            <div className="content">
              <motion.h1
                style={{ color: "wheat" }}
                whileHover={{ x: 10, y: 10 }}
              >
                Login
              </motion.h1>

              {/* <h1>Login</h1> */}

              <Tilt
                tiltEnable={true}
                tiltReverse={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="black"
                scale={1.1}
                perspective={800}
                reset={true}
                transitionSpeed={500}
              >
                <div className="formInput">
                  <label
                    htmlFor="username"
                    ref={user}
                    style={{
                      transition: "0.5s ease-in-out",
                      left: "105px",
                    }}
                  >
                    Username
                  </label>
                  <input
                    onClick={handleFocus}
                    onBlur={handleBlur}
                    type="text"
                    name="username"
                    ref={username}
                  />
                  <span></span>
                </div>
              </Tilt>

              <Tilt
                tiltEnable={true}
                tiltReverse={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="black"
                scale={1.1}
                perspective={800}
                reset={true}
                transitionSpeed={500}
              >
                <div className="formInput">
                  <label
                    htmlFor="password"
                    ref={pas}
                    // style={{ top: focused ? "10px" : "5px" }}'
                    style={{
                      transition: "0.5s ease-in-out",
                      left: "105px",
                      // zIndex: "-1",
                    }}
                  >
                    Password
                  </label>
                  <input
                    onClick={handleFocusPassword}
                    onBlur={handleBlurPassword}
                    type="password"
                    name="password"
                    ref={password}
                  />

                  <span></span>
                </div>
              </Tilt>

              <Tilt
                tiltEnable={true}
                tiltReverse={false}
                tiltAngleXInitial={0}
                tiltAngleYInitial={0}
                tiltMaxAngleX={25}
                tiltMaxAngleY={25}
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="black"
                scale={1.1}
                perspective={800}
                reset={true}
                transitionSpeed={500}
              >
                <div className="sub">
                  <div className="button">
                    <h4>Login</h4>
                  </div>
                </div>
              </Tilt>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
}

export default App;
