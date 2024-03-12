import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { db } from '../firebase';
import {addDoc,} from 'firebase/firestore'; // Import addDoc from firebase/firestore

function AddBusRoute() {
  const [busNum, setBusNum] = useState('');
  const [busRoute, setBusRoute] = useState('');
  const [vehNo, setVehNo] = useState('');
  const [staffName, setStaffName] = useState('');
  const [staffMob, setStaffMob] = useState('');

  const Push = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'busroutes'), {
        busNum: busNum,
        busRoute: busRoute,
        vehNo: vehNo,
        staffName: staffName,
        staffMob: staffMob,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className='body'>
      <div className='container1'>
        <Form>
          <Form.Group className='mb-1' controlId='formBasicEmail'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Bus Number'
              value={busNum}
              onChange={(e) => setBusNum(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-1' controlId='formBasicEmail'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Bus Route'
              value={busRoute}
              onChange={(e) => setBusRoute(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Vehicle Number '
              value={vehNo}
              onChange={(e) => setVehNo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Staff Name'
              value={staffName}
              onChange={(e) => setStaffName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-1' controlId='formBasicPassword'>
            <Form.Control
              size='sm'
              type='text'
              placeholder='Staff Mobile '
              value={staffMob}
              onChange={(e) => setStaffMob(e.target.value)}
            />
          </Form.Group>

          <Button size='sm' variant='primary' type='submit' onClick={Push}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddBusRoute;
