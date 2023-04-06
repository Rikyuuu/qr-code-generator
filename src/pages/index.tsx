import QRCodeGenerator from '@/components/QRCodeGenerator'
import { useState } from 'react'

const Home = () => {
  const [text, setText] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event?.target.value)
  }

  return (
    <div>
      <h1>QR Code generator</h1>
      <input className="" type="text" value={text} onChange={handleInputChange} placeholder='ex : https://www.google.fr'/>
      <QRCodeGenerator text={text} />
    </div>
  )
}

export default Home