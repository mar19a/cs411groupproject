import React from "react";
import { Link } from "react-router-dom";
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
      email: 'johndoe@seekers.com',
      bio: 'John has been in the real estate industry for over 10 years and specializes in residential properties. His dedication to finding the perfect home for his clients is unmatched.',
      experience: '10 years',
      transactions: '200+',
      specialties: ['Residential Properties', 'First-time Homebuyers'],
      funFact: 'John is an amateur chef and loves to try out new recipes in his free time.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      image: JaneSmith,
      position: 'Real Estate Agent',
      phone: '987-654-3210',
      email: 'janesmith@seekers.com',
      bio: 'With a background in interior design, Jane brings her keen eye for aesthetics to the real estate industry. She is passionate about helping her clients find the perfect property that suits their needs and style.',
      experience: '8 years',
      transactions: '150+',
      specialties: ['Luxury Properties', 'Interior Design'],
      funFact: 'Jane is a certified yoga instructor and enjoys practicing in her free time.'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      image: BobJohnson,
      position: 'Real Estate Agent',
      phone: '857-908-1284',
      email: 'bobjohnson@seekers.com',
      bio: 'Bob has a strong background in commercial real estate and investment properties. His extensive knowledge in these areas allows him to provide top-notch services to his clients.',
      experience: '12 years',
      transactions: '300+',
      specialties: ['Commercial Real Estate', 'Investment Properties'],
      funFact: 'Bob is an avid hiker and has conquered multiple challenging trails around the world.'
    }
  ];

  return (
    <div>
      <h1 className="agents-title">Meet Three Of Our Expert Agents</h1>
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
              <p>Experience: {agent.experience}</p>
              <p>Successful Transactions: {agent.transactions}</p>
              <p className="agent-bio">{agent.bio}</p>
              <p><strong>Specialties:</strong> {agent.specialties.join(', ')}</p>
              <p><strong>Fun Fact:</strong> {agent.funFact}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="contact-us-button">
        <Link to="/Contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Agents;