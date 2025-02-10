"use client";

import React, { useState, useEffect } from "react";

import SearchForm from '../component/SearchForm';

import "../globals.css";



function page({ data }) {
   
    return (
        <div
            style={{
                justifyContent: "center", 
                height: "100vh", 
            }}
        >
            <div className="items-center justify-center m-5">
                <SearchForm />
            </div>

        </div>
    )
}

export default page