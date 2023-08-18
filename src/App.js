import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import { Routes, Route, Link, Outlet, BrowserRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import Swags from "./components/Swags/Swags";
import Live from "./components/Live/Live";
import "./App.css";
import Horoscope from "./components/Horoscope/Horoscope";
import SwagDetails from "./components/Swags/SwagDetails";
const style = {
  wrapper: "overflow-x-hidden w-[100vw] font",
};
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/swags" element={<Swags />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/live" element={<Live />} />
        <Route path="/swags/:id" element={<SwagDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
