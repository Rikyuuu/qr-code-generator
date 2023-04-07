import QRCodeGenerator, {
    ImageSettingsQRCode,
} from '@/components/QRCodeGenerator'
import { useState } from 'react'

const Home = () => {
    const [text, setText] = useState<string>('')
    const [imageSettings, setImageSettings] = useState<ImageSettingsQRCode>({
        src: '',
        height: 64,
        width: 64,
        excavate: true,
    })

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event?.target.value)
    }

    const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageSettings((old: any) => ({
            ...old,
            src: event?.target.value,
        }))
    }

    return (
        <div>
            <h1>QR Code generator</h1>
            <br />
            <label htmlFor='text'>
                QR Code redirect uri : <br />
                <input
                    id='text'
                    className=''
                    type='text'
                    value={text}
                    onChange={handleTextChange}
                    placeholder='ex : https://www.google.fr'
                />
            </label>
            <br />
            <br />
            <label htmlFor='logo'>
                Logo inside QR code : <br />
                <input
                    id='logo'
                    className=''
                    type='text'
                    value={imageSettings.src}
                    onChange={handleLogoChange}
                    placeholder='Your logo link'
                />
            </label>
            <br />
            <br />
            <br />
            <QRCodeGenerator text={text} logo={imageSettings.src} />
        </div>
    )
}

export default Home
