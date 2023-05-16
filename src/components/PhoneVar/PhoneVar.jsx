import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from 'axios';

const PhoneVar = () => {

    //AXIos HTTP j ta ace sei tar organize ekta better version. eita motamoti pupular eita maje maje lokjon use kre abar use kre na...

    const [phones, setPhones] = useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            console.log(loadedData);
            const phonesData = loadedData.map(phone =>{
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1]);
                const phoneInfo ={
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            console.log(phonesData)
            setPhones(phonesData);
        })
       
      
    },[])
    return (
        <div>
            <BarChart width={1000} height={500} data={phones}
            >
                <Bar dataKey="price" fill="#8884d8"></Bar>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PhoneVar;