import * as React from 'react'
import { Platform } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Theme, ThemeProvider } from '@react-navigation/native'
import { PortalHost } from '@rn-primitives/portal'

import { ThemeToggle } from '@/components/theme-toggle'
import { NAV_THEME } from '~/constants/color'
import { useColorScheme } from '~/hooks/useColorScheme'
import { setAndroidNavigationBar } from '~/utils/android-navigation-bar'
import StorageHelper from '~/utils/storage-helper'

import '@/global.css'

const LIGHT_THEME: Theme = {
    dark: false,
    colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
    dark: true,
    colors: NAV_THEME.dark,
}

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router'

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme()
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)

    React.useEffect(() => {
        ;(async () => {
            const theme = await AsyncStorage.getItem('theme')
            if (Platform.OS === 'web') {
                // Adds the background color to the html element to prevent white background on overscroll.
                document.documentElement.classList.add('bg-background')
            }
            if (!theme) {
                await AsyncStorage.setItem('theme', colorScheme)
                setIsColorSchemeLoaded(true)
                return
            }
            const colorTheme = theme === 'dark' ? 'dark' : 'light'
            if (colorTheme !== colorScheme) {
                setColorScheme(colorTheme)
                setAndroidNavigationBar(colorTheme)
                setIsColorSchemeLoaded(true)
                return
            }
            setAndroidNavigationBar(colorTheme)
            setIsColorSchemeLoaded(true)
        })().finally(() => {
            SplashScreen.hideAsync()
        })
    }, [])

    if (!isColorSchemeLoaded) {
        return null
    }

    return (
        <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
            <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
            <Stack>
                <Stack.Screen
                    name='index'
                    options={{
                        title: 'Starter Base',
                        headerRight: () => <ThemeToggle />,
                    }}
                />
            </Stack>
            <PortalHost />
        </ThemeProvider>
    )
}
