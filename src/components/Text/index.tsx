import { View, Text as RNText, StyleProp, TextStyle, StyleSheet, TextProps as RNTextProps } from 'react-native'
import React from 'react'

interface TextProps extends RNTextProps {
  text?: string,
  style?: StyleProp<TextStyle>
  children?: any
}

export const Text = (props: TextProps) => {
  const { text, style, children, ...textProps } = props
  return (
    <RNText {...textProps} style={[styles.text, style]} >{text || children}</RNText>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "black"
  }
})