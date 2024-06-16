import { useState } from 'react'
import './index.css'
export default function AvatarSelector () {
  const [selectedAvatar, setSelectedAvatar] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return 

    const file = e.target.files[0]

    const src = URL.createObjectURL(file)

    setSelectedAvatar(src)
  }
  return (
    <label htmlFor="avatar" className="sign__label--avatar">
        <input type="file" onChange={handleChange} accept="image/*" id="avatar" name="avatar" hidden />
      {
        selectedAvatar !== ''
        && <img src={selectedAvatar} className='sign__label--avatar selected-avatar' loading='lazy'/>
      }
    </label>
  )
}