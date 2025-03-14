import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Modelo</th>
                  <th>Empresa Fabricante</th>
                </tr>
              </thead>
              <tbody>
                {robots.map((robot) => (
                  <tr key={robot.id} onClick={() => setSelectedRobotId(robot.id)}>
                    <td>{robot.id}</td>
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
    </div>
  );
}

export default Robots;