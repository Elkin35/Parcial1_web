import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <div className="card-body">
                <div className='container-fluid text-center'>
                    <h2 className="card-title">{robot.nombre}</h2>
                    <img src={imageUrl} alt={robot.nombre} className="img-fluid mb-3 border border-dark" />
                </div>
                <p style={{ marginBottom: 0 }}>→<strong>Año de Fabricación:</strong> {robot.añoFabricacion}</p>
                <p style={{ marginBottom: 0 }}>→<strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</p>
                <p style={{ marginBottom: 0 }}>→<strong>Humor:</strong> {robot.humor}</p>
            </div>
        </div>
    );
}

export default RobotDetail;
