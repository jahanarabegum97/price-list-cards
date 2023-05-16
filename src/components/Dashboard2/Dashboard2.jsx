
// self practice

// import React, { PureComponent } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//   },
// ];

// export default function app(){
//     return (
//       <ResponsiveContainer width="100%" aspect={3}>
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" tick={{stroke:'blue'}}/>
//           <YAxis tick={{stroke:'purple'}} />
//           <Tooltip />
//           {/* <Legend /> */}
//           <Bar dataKey="pv" fill="#8884d8" />
//           <Bar dataKey="uv" fill="#82ca9d" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
// }



// eita assignment 9 er jonno kra
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

   const marksArray =[
        {
            id: 1,
            name: 'Assignment 1',
            marks: 60

        },
        {
            id: 2,
            name: 'Assignment 2',
            marks: 59

        },
        {
            id: 3,
            name: 'Assignment 3',
            marks: 60

        },
        {
            id: 4,
            name: 'Assignment 4',
            marks: 60

        },
        {
            id: 5,
            name: 'Assignment 5',
            marks: 55

        },
        {
            id: 6,
            name: 'Assignment 6',
            marks: 57

        },
        {
            id: 7,
            name: 'Assignment 7',
            marks: 60

        },
        {
            id: 8,
            name: 'Assignment 8',
            marks: 48

        },
    ]

export default function app(){
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={marksArray}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{stroke:"blue"}} />
          <YAxis tick={{stroke:"purple"}}/>
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="marks" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }

