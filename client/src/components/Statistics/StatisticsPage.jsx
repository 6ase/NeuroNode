import axios from 'axios';
import React, { PureComponent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const getIntroOfPage = (label, namesArr) => {
  let obj = {};
  for (let i = 0; i < namesArr.length; i++) {
    obj = { ...obj, ...namesArr[i] };
  }
  if (obj[label]) {
    return `Переходы из ноды: ${obj[label]}`;
  }

  return '';
};

function CustomTooltip({
  active, payload, label, namesArr,
}) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label, namesArr)}</p>
      </div>
    );
  }

  return null;
}

export default function StatisticsPage() {
  const [projectStat, setProjectStat] = useState([]);
  const [projectStatName, setProjectStatName] = useState([]);
  const { staticId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios(`http://localhost:3001/stat/byid/${staticId}`)
      .then((res) => {
        setProjectStat(res.data.newData);
        setProjectStatName(res.data.namesArr);
      });
  }, []);
  const toProject = (projectId) => {
    const path = `/projectselect/${projectId}`;
    navigate(path);
  };
  return (
    <>
      <ResponsiveContainer width="40%" aspect={3}>
        <BarChart
          width={500}
          height={300}
          data={projectStat}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip namesArr={projectStatName} />} />
          <Legend />
          <Bar dataKey="Nodes" barSize={10} fill="#000000" />
        </BarChart>
      </ResponsiveContainer>
      <Button onClick={() => toProject(staticId)}>Back to project</Button>
    </>
  );
}