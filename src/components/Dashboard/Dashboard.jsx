import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    // 3 subject marks of ten students for 12 classes. math, physics, chemistry marks of 10 students in an array of objects.? each subject will be one objects.? 12 elements in an array each having physics, chemistry and math value will be numbers between 0-100 and will have id, number and name field as well.?
    const marksArray =[
        {
            id: 1,
            name: 'Student 1',
            math: 69,
            physics: 88,
            chemistry: 57,

        },
        {
            id: 2,
            name: 'Student 2',
            math: 77,
            physics: 91,
            chemistry: 67,

        },
        {
            id: 3,
            name: 'Student 3',
            math: 98,
            physics: 59,
            chemistry: 69,

        },
        {
            id: 4,
            name: 'Student 4',
            math: 49,
            physics: 90,
            chemistry: 77,

        },
        {
            id: 5,
            name: 'Student 5',
            math: 69,
            physics: 67,
            chemistry: 59

        },
        {
            id: 6,
            name: 'Student 6',
            math: 70,
            physics: 76,
            chemistry: 68,

        },
        {
            id: 7,
            name: 'Student 7',
            math: 97,
            physics: 80,
            chemistry: 50

        },
        {
            id: 8,
            name: 'Student 8',
            math: 90,
            physics: 69,
            chemistry: 79

        },
        {
            id: 9,
            name: 'Student 9',
            math: 90,
            physics: 70,
            chemistry: 89

        },
        {
            id: 10,
            name: 'Student 10',
            math: 90,
            physics: 50,
            chemistry: 89

        },
        {
            id: 11,
            name: 'Student 11',
            math: 70,
            physics: 66,
            chemistry: 69

        },
        {
            id: 12,
            name: 'Student 12',
            math: 90,
            physics: 67,
            chemistry: 69,

        },
    ]

     // const marksArray =[
    //     {
    //         id: 1,
    //         name: 'Assignment 1',
    //         marks: 60

    //     },
    //     {
    //         id: 2,
    //         name: 'Assignment 2',
    //         marks: 59

    //     },
    //     {
    //         id: 3,
    //         name: 'Assignment 3',
    //         marks: 60

    //     },
    //     {
    //         id: 4,
    //         name: 'Assignment 4',
    //         marks: 60

    //     },
    //     {
    //         id: 5,
    //         name: 'Assignment 5',
    //         marks: 55

    //     },
    //     {
    //         id: 6,
    //         name: 'Assignment 6',
    //         marks: 57

    //     },
    //     {
    //         id: 7,
    //         name: 'Assignment 7',
    //         marks: 60

    //     },
    //     {
    //         id: 8,
    //         name: 'Assignment 8',
    //         marks: 48

    //     },
    // ]
    return (
        <div>
            <LineChart
            width={1000} height={300} data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke="#8884d8"></Line>
                <XAxis dataKey="name" />
               <YAxis></YAxis>
               <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;