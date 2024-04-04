import React, { useState, useEffect } from 'react';
import { Button, Modal } from '@carbon/react';
import axios from 'axios';
import { ModalBody } from '@carbon/react';

interface ListItem {
  id: number;
  name: string;
  // Add other properties as needed
}
interface PatientMatchModalProps {
  onClose: () => void;
}

const PatientMatchModalComponent: React.FC<PatientMatchModalProps> = ({ onClose }) => {
  const [list, setList] = useState<ListItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const fetchData = async () => {
    const apiUrl = `/ws/rest/v1/patient?q=test&includeDead=true&v=custom:(uuid,display,identifiers:(identifier,uuid,preferred,location:(uuid,name),identifierType:(uuid,name,format,formatDescription,validator)),person:(uuid,display,gender,birthdate,dead,age,deathDate,birthdateEstimated,causeOfDeath,preferredName:(uuid,preferred,givenName,middleName,familyName),attributes:(uuid,display,value,attributeType,dateCreated,dateChanged),preferredAddress:(uuid,preferred,address1,address2,cityVillage,longitude,stateProvince,latitude,country,postalCode,countyDistrict,address3,address4,address5,address6,address7)))`;

    try {
      const response = await axios.get<ListItem[]>(apiUrl);
      setList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemClick = (item: ListItem) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  return (
    <div>
      <Button onClick={() => setModalIsOpen(true)}>Open Modal</Button>
      <Modal open={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} modalHeading="List of Items">
        <ModalBody>
          <ul>
            {list.map((item) => (
              <li key={item.id} onClick={() => handleItemClick(item)}>
                {item.name}
              </li>
            ))}
          </ul>
        </ModalBody>
      </Modal>

      <Modal
        open={selectedItem !== null}
        onRequestClose={() => setSelectedItem(null)}
        modalHeading="Item Details"
        modalLabel="Item Details Modal">
        {selectedItem && (
          <div>
            <p>Name: {selectedItem.name}</p>
            {/* Add other item details as needed */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PatientMatchModalComponent;
