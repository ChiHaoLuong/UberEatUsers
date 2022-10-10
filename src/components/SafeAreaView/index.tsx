
import React from 'react'
import { SafeAreaView as SafeView, SafeAreaViewProps } from 'react-native-safe-area-context'

interface SafeAreaViewCustomProps extends SafeAreaViewProps {
  children?: any
}

export const SafeAreaView = (props: SafeAreaViewCustomProps) => {
  const { style, children, ...safeViewProps } = props

  return (
    <SafeView style={style}
      {...safeViewProps}
    >
      {children}
    </SafeView>
  )
}
