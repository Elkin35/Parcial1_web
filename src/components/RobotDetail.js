import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';

function RobotDetail({ selectedRobotId }) {
  const [robot, setRobot] = useState(null);

  useEffect(() => {
    if (selectedRobotId) {
      const fetchRobotDetail = async () => {
        const response = await fetch(`http://localhost:3001/robots/${selectedRobotId}`);
        const data = await response.json();
        setRobot(data);
      };
      fetchRobotDetail();
    }
  }, [selectedRobotId]);

  if (!robot) {
    return <div></div>;
  }

  const transformImageUrl = (url) => {
    if (url.includes('github.com') && url.includes('/blob/')) {
      return url
        .replace('https://github.com/', 'https://raw.githubusercontent.com/')
        .replace('/blob/', '/refs/heads/');
    }
    return url;
  };

  const imageUrl = transformImageUrl(robot.imagen);

  return (
    <div className="card border border-dark" style={{ backgroundColor: '#ececec' }}>
      <div className="card-body p-4">
        <div className='container-fluid text-center px-5'>
          <h2 className="card-title fs-4">{robot.nombre}</h2>
          <img src={imageUrl} alt={robot.nombre} className="img-fluid mb-3 border border-dark" />
        </div>
        <p style={{ marginBottom: 0 }}>
          <strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/> </svg> <FormattedMessage id="robot.year" defaultMessage="Año de Fabricación" />:
          </strong> {robot.añoFabricacion}
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/> </svg> <FormattedMessage id="robot.processing" defaultMessage="Capacidad de Procesamiento" />:
          </strong> {robot.capacidadProcesamiento}
        </p>
        <p style={{ marginBottom: 0 }}>
          <strong>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/> </svg> <FormattedMessage id="robot.humor" defaultMessage="Humor" />:
          </strong> {robot.humor}
        </p>
        
      </div>
    </div>
  );
}

export default RobotDetail;
