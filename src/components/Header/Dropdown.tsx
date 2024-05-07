import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const title = 'Бассейны';

  const toggleDropdown = () => setIsOpen(!isOpen);

  const dropdownContent = (
    <ul className="dropdown-content">
      <li><NavLink to="maintanance">Обслуживание</NavLink></li>
      <li><NavLink to="composite">Композитные</NavLink></li>
      <li><NavLink to="frame">Каркасные</NavLink></li>
      <li><NavLink to="Concrete">Бетонные</NavLink></li>
      <li><NavLink to="Adjustable">Регулируемый</NavLink></li>
    </ul>
  );

  return (
    <div className={`dropdown ${isOpen ? 'dropdown-open' : ''}`}>
    <li onClick={toggleDropdown}>{title}</li>
    {isOpen && dropdownContent}
  </div>
  );
}
export default Dropdown;