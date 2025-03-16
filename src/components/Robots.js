import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';
import RobotDetail from './RobotDetail';

function Robots() {
  const [robots, setRobots] = useState([]);
  const [selectedRobotId, setSelectedRobotId] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      const response = await fetch('http://localhost:3001/robots');
      const data = await response.json();
      setRobots(data);
    };
    fetchRobots();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <table className="table">
            <thead className="table-active table-dark">
              <tr>
                <th><FormattedMessage id="tableHeader.id" defaultMessage="ID" /></th>
                <th><FormattedMessage id="tableHeader.name" defaultMessage="Nombre" /></th>
                <th><FormattedMessage id="tableHeader.model" defaultMessage="Modelo" /></th>
                <th><FormattedMessage id="tableHeader.company" defaultMessage="Empresa Fabricante" /></th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => setSelectedRobotId(robot.id)}>
                  <td className='fw-bold'>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-4">
          <RobotDetail selectedRobotId={selectedRobotId} />
        </div>
      </div>
    </div>
  );
}

export default Robots;
