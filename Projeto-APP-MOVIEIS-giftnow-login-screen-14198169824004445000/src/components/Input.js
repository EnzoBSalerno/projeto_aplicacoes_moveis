import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants/theme';
import { Ionicons } from '@expo/vector-icons';

const Input = ({
  label,
  placeholder,
  error,
  password,
  value,
  onChangeText,
  iconName,
  onFocus = () => {},
  keyboardType,
  autoCapitalize,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(Boolean(password));

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[
        styles.inputContainer,
        {
          borderColor: error
            ? COLORS.danger
            : isFocused
              ? COLORS.primary
              : COLORS.background,
           backgroundColor: COLORS.background
        }
      ]}>
        {iconName && (
          <Ionicons
            name={iconName}
            size={20}
            color={COLORS.textLight}
            style={styles.icon}
          />
        )}

        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={Boolean(hidePassword)}
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor={COLORS.textLight}
          value={value}
          onChangeText={onChangeText}
          selectionColor={COLORS.primary}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize || 'none'}
          maxLength={maxLength ? Number(maxLength) : undefined}
        />

        {password && (
          <Ionicons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
            size={20}
            color={COLORS.textLight}
            style={styles.iconRight}
          />
        )}
      </View>

      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SIZES.padding * 0.8, // ~19px
  },
  label: {
    marginVertical: 5,
    fontSize: SIZES.font,
    color: COLORS.text,
    fontWeight: '600',
  },
  inputContainer: {
    height: 55,
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: SIZES.medium,
  },
  errorText: {
    color: COLORS.danger,
    fontSize: SIZES.small,
    marginTop: 4,
  },
});

export default Input;
