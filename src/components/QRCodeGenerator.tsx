import QRCode from 'qrcode.react'
import { useEffect, useState } from 'react'

export interface QRCodeGeneratorProps {
    text: string
    logo?: string
}

export interface ImageSettingsQRCode {
    src: string
    height: number
    width: number
    excavate: boolean
    x?: number
    y?: number
}

const QRCodeGenerator = ({ text, logo = '' }: QRCodeGeneratorProps) => {
    const [imageSettings, setImageSettings] = useState<ImageSettingsQRCode>({
        src: '',
        height: 64,
        width: 64,
        excavate: true,
    })

    useEffect(() => {
        setImageSettings((old: any) => ({
            ...old,
            src: logo,
        }))
    }, [logo])

    const imageSettingsVerify = (): ImageSettingsQRCode | undefined => {
        if (imageSettings && imageSettings.src.length <= 0) {
            return undefined
        }

        return imageSettings
    }

    return (
        <>
            {text && text.length > 0 && (
                <QRCode
                    value={text}
                    level='L'
                    renderAs='svg'
                    size={256}
                    imageSettings={imageSettingsVerify()}
                />
            )}
        </>
    )
}

export default QRCodeGenerator
