import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const Button = ({
  title,
  onPress = () => {},
  variant = 'primary', // primary, secondary, text, social
  iconName,
  isLoading = false,
  style,
}) => {
  const getContainerStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryContainer;
      case 'secondary':
        return styles.secondaryContainer;
      case 'text':
        return styles.textContainer;
      case 'social':
        return styles.socialContainer;
      default:
        return styles.primaryContainer;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'text':
        return styles.textBtnText;
      case 'social':
        return styles.socialText;
      default:
        return styles.primaryText;
    }
  };

  if (variant === 'text') {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.textContainer, style]}>
        <Text style={styles.textBtnText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={Boolean(isLoading)}
      style={[
        styles.baseContainer,
        getContainerStyle(),
        variant === 'primary' && SHADOWS.medium, // Sombra apenas no botão principal
        style
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={variant === 'secondary' || variant === 'social' ? COLORS.primary : COLORS.white} />
      ) : (
        <View style={styles.contentContainer}>
          {iconName && (
            <Ionicons
              name={iconName}
              size={20}
              color={variant === 'social' ? COLORS.text : COLORS.white}
              style={{ marginRight: 10 }}
            />
          )}
          <Text style={getTextStyle()}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    height: 56,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: SIZES.base,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Primary
  primaryContainer: {
    backgroundColor: COLORS.primary,
  },
  primaryText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
  },

  // Secondary (Outline)
  secondaryContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  secondaryText: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: SIZES.medium,
  },

  // Social
  socialContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  socialText: {
    color: COLORS.text,
    fontWeight: '600',
    fontSize: SIZES.medium,
  },

  // Text Button (Link)
  textContainer: {
    alignItems: 'center',
    paddingVertical: SIZES.base,
  },
  textBtnText: {
    color: COLORS.textLight,
    fontSize: SIZES.font,
    fontWeight: '500',
  },
});

export default Button;
