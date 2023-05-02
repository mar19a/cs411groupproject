import React from "react";
import JaneSmith from "../../pictures/JaneSmith.jpg"
import BobJohnson from "../../pictures/BobJohnson.jpg"
import JohnDoe from "../../pictures/JohnDoe.jpg"

import './Agents.css';
const Agents = () => {
  const agents = [
    {
      id: 1,
      name: 'John Doe',
      image: JohnDoe,
      position: 'Real Estate Agent',
      phone: '617-456-7890',
      email: 'johndoe@seekers.com'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: JaneSmith,
      position: 'Real Estate Agent',
      phone: '987-654-3210',
      email: 'janesmith@seekers.com'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      image: BobJohnson,
      position: 'Real Estate Agent',
      phone: '857-908-1284',
      email: 'bobjohnson@seekers.com'
    }
  ];

  return (
    <div>
      <h1>Our Agents</h1>
      <div className="agents-container">
        {agents.map(agent => (
          <div className="agent" key={agent.id}>
            <div className="border">
            <img src={agent.image} alt={agent.name} style={{width: '100%', height: '100%', borderRadius: '50%'}} />
            </div>
            
            <div className="agent-info">
              <h2>{agent.name}</h2>
              <p>{agent.position}</p>
              <p>Phone: {agent.phone}</p>
              <p>Email: {agent.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;