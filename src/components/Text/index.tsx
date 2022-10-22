import { ColorValue, LayoutChangeEvent, StyleProp, StyleSheet, Text as RNText, TextProps, TextStyle, View } from 'react-native'
import React from 'react'
import { colors } from '../../theme'
import { CustomSpacingProps, getCustomSpacingStyles } from '../../utils/interface'

interface TextComponentProps extends CustomSpacingProps {
  text: string
  color?: ColorValue
  size?: number
  fontWeight?: TextStyle["fontWeight"]
  style?: StyleProp<TextStyle>
  lineHeight?: number
  // TextProps
  numberOfLines?: number
  onLayout?: (event: LayoutChangeEvent) => void
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
}

export const Text = (props: TextComponentProps) => {
  const { color, fontWeight, size, text, style, lineHeight, numberOfLines, onLayout, textAlign, ...customSpacingProps } = props

  const customSpacingStyle = getCustomSpacingStyles({ ...customSpacingProps })

  const defaultStyle: StyleProp<TextStyle>[] = [
    color ? { color: color } : { color: colors.black[500] },
    size ? { fontSize: size } : {},
    fontWeight ? { fontWeight } : {},
    lineHeight ? { lineHeight } : {},
    textAlign ? { textAlign } : {}
  ]

  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[defaultStyle, customSpacingStyle, style]}
      onLayout={onLayout}
    >{text}</RNText>
  )
}

