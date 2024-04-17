import React, { useState } from 'react';

// Uppgift 1

export let DynamicTitleEditor = () => {
    let [title, setTitle] = useState('Set new title below');

    let handleTitleChange = (e) => {
        let newTitle = e.target.value;
        setTitle(newTitle === '' ? "Set new title below" : newTitle);
    };

    return (
        <div class="lektionsUppgift">
            <p><em>Uppgift 1</em></p>
            <h2>{title}</h2>
            <input 
                type="text" 
                onChange={handleTitleChange} 
                placeholder="Enter title" 
            />        
        </div>
    );
};

///////////////////////////////////////////////////////////////////////////////////////////////

// Uppgift 2

export let InteractiveList = () => {
    let items = [
      { name: 'Forward ', description: 'One of three players whose main role is to take care of the offensive part of the game. The focus is to score goals. A forward is either "left wing", "right wing" or "center".' },
      { name: 'Defence ', description: 'One of two players whose main role is to defend. They are to keep players away from the net and help their goalie. (Either left- or right-D.' },
      { name: 'Goalie ', description: 'One player in special equipment whose main (and almost only) role is to keep the puck out of the net. The goalie stays on the ice the entire game unless the backup takes over.' }
    ];
  
    let [selectedItem, setSelectedItem] = useState([]);

    function handleItemClick(index) {
        if (selectedItem.includes(index)) {
            setSelectedItem(selectedItem.filter((itemIndex) => itemIndex !== index));
        } else {
            setSelectedItem([...selectedItem, index]);
        }
    }

      return (
        <div class="lektionsUppgift">            
            <p><em>Uppgift 2</em></p>
            <div class="hockeyLista">
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>                    
                            {item.name}
                            <button onClick={() => handleItemClick(index)}>Show description</button><br />                      
                            {selectedItem.includes(index) && <p>{item.description}</p>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      )
  };

  //////////////////////////////////////////////////////////////////////////////////////////

  // Uppgift 3

  export let MultiFieldForm = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            name: name,
            email: email,
            message: message
        };
        console.log('Form data:', formData);
    };

    return (
        <div class="lektionsUppgift">
            <p><em>Uppgift 3</em></p>
            <form className="myForm" onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <div class="labelDiv">
                        <label>Name:</label>
                    </div>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange= {(e) => setName(e.target.value)}
                    />
                </div>
                <div className="inputDiv">
                    <div class="labelDiv">
                        <label>Email:</label>
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange= {(e) => setEmail (e.target.value)}
                    />
                </div>
                <div className="inputDiv">
                    <div class="labelDiv">
                        <label>Message:</label>
                    </div>
                    <textarea        
                        name="message"
                        value={message}
                        onChange= {(e) => setMessage (e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }


