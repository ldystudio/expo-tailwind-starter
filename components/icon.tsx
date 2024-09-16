import { cssInterop } from 'nativewind'
import { Iconify as ReactNativeIconify } from 'react-native-iconify'
import { XmlProps } from 'react-native-svg'

cssInterop(ReactNativeIconify, {
    className: {
        target: 'style',
        nativeStyleToProp: {
            color: true,
            opacity: true,
        },
    },
})

interface IconifyProps extends Omit<XmlProps, 'xml'> {
    icon: string
    size?: number
}

export default function Iconify(props: IconifyProps) {
    return <ReactNativeIconify size={24} className='text-foreground' {...props} />
}
