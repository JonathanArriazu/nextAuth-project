import React from 'react'
import Form from '../Global/Form'
import { updateUser } from '@/actions/authActions';
import Button from '../Global/Button';

const ProfileUpdate = () => {

  async function handleUpdateProfile(formData){
    const name = formData.get('name');
    const image = formData.get('image');

    const res = await updateUser({name, image})
    if(res?.msg) {
        alert(res?.msg)
    }
  }

  return (
    <div>
        <h2>Update Profile</h2>

        <Form action={handleUpdateProfile} style={{margin: '20px 0'}}>
            <input
                type='text'
                name='name'
                placeholder='name'
                required
            />
            <input
                type='text'
                name='image'
                placeholder='Image'
                required
            />
            <Button value='Update Profile'>Update Profile</Button>
        </Form>
    </div>
  )
}

export default ProfileUpdate