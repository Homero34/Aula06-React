import { useState } from "react";
import './Form.css'

export function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`O nome que voce cadastrou é: ${name}`);
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Entre com o seu nome:  
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

<input type="submit" />
      

    </form>
  )
}