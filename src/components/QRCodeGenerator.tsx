import QRCode from "qrcode.react"

export interface QRCodeGeneratorProps {
    text: string
}

const QRCodeGenerator = ({text}: QRCodeGeneratorProps) => {
    return <QRCode value={text} />
}

export default QRCodeGenerator