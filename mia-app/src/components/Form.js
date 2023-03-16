import React,{useState} from "react"

export default function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            confirmData: true,
            employment: "",
            favContinent: ""
        }
    )
    console.log(formData.favContinent)
    
    function handleChange(event) {
        console.log(event)
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    return (
    <div>
      <form className="New-form">
            <p className="form-p">Compila il form con le tue preferenze,<br/> saremo felici di aiutarti a programmare <br/> la tua prossima avventura!</p>
           <div className="inputs">
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments}
                placeholder="Message"
                onChange={handleChange}
                name="comments"
            />
           </div>
            <div className="conferma">
               <input 
                type="checkbox" 
                id="confirmData" 
                checked={formData.confirmData}
                onChange={handleChange}
                name="confirmData"
            />
            <label htmlFor="confirmData">Confermi i tuoi dati?</label>
             
            </div>
           <br />
            
            <fieldset>
                <legend>Che tipo di viaggio ti interessa?</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Fuga per un week-end (2-5 gg)</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Vacanza normale (10-15 gg)</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Grande viaggio (>2sett.) </label>
                <br />
            </fieldset>
            <br />
            <div>
              <label  className="Continent" htmlFor="favContinent">Quale continente preferiresti?</label>
            <br />
            <br/>
            <select 
                id="favContinent" 
                value={formData.favContinent}
                onChange={handleChange}
                name="favContinent"
            >
                <option value="Europ">Europa</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Usa">America-centrale</option>
                <option value="South-America">Sud-America</option>
                <option value="Oceania">Oceania</option>
                <option value="Antartide">Antartide</option>
            
            </select>   
            </div>
           
            <br/>
            <button className="form-btn">Invia</button>
        </form>
        
    </div>
        
    )
}