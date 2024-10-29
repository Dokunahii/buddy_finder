import axios from 'axios';
import { useState } from 'react'
import { Form } from 'react-bootstrap';

export default function MapAutocomplete({inputValue, setInputValue}) {

  const api_key = import.meta.env.VITE_MAP_API_KEY

  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
      const value = e.target.value;
      setInputValue(value);

      if (value.length > 2) { // Fetch suggestions only if input length is greater than 2
          try {
              const response = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${api_key}&q=${value}`);
              setSuggestions(response.data);
          } catch (error) {
              console.error("Error fetching suggestions:", error);
          }
      } else {
          setSuggestions([]); // Clear suggestions if input is too short
      }
  };

  const handleSuggestionClick = (suggestion) => {
      setInputValue(suggestion.display_name); // Set input value to the selected suggestion
      setSuggestions([]); // Clear suggestions
  };

  return (
    <Form.Group className='mb-3' controlId='serachLocation'>
      <Form.Label>Address</Form.Label>
      <Form.Control
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search for a location..."
      />
      {suggestions.length > 0 && (
        <ul>
            {suggestions.map((suggestion) => (
                <li key={suggestion.place_id} onClick={() => handleSuggestionClick(suggestion)}>
                  {suggestion.display_name}
                </li>
            ))}
        </ul>
      )}

    </Form.Group>
  )
}
