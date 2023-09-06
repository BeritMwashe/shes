import React from 'react';
import Card from './Card';
import './HomePage.css'; // Import the CSS file
import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const allusers =() =>{
 
    navigate("/seedfund", { replace: true });

  }
  return (
    <div>
      <h1>Home Page</h1>
      <div className="card-container">
        <Card  
        toClick={allusers}      
          title="All Users"
          content="Display all user information here."
          icon="users"
          bgColor="#3498db" // Blue background
        />
        <Card
          title="All Seed Funds"
          content="Display all seed fund information here."
          icon="money"
          bgColor="#ff69b4"  // Purple background
        />
        <Card
          title="All SHEIQ"
          content="Display all seed loan information here."
          icon="money"
          bgColor="#9b59b6" 
          // Pink background
        />
        <Card
          title="Approved Loans"
          content="Display all seed loan information here."
          icon="check"
          bgColor="#084A2F" // Blue background
        />
        <Card
          title="Denied loans"
          content="Display all seed loan information here."
          icon="times"
          bgColor="#863404" // Purple background
        />
        <Card
          title="Disbursed loans"
          content="Display all seed loan information here."
          icon="check-circle"
          bgColor="#3498db" // Pink background
        />
         <Card
          title="She loans"
          content="Display all seed loan information here."
          icon="check-circle"
          bgColor="#ff69b4" // Pink background
        />
        <Card
          title="News"
          content="Display all seed loan information here."
          icon="check-circle"
          bgColor="#9b59b6"// Pink background
        />
       
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default HomePage;
