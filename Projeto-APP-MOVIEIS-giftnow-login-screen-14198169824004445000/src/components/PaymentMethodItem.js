import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { useUser } from '../context/UserContext';

const PaymentMethodItem = ({ method, isSelected = false, onPress }) => {
  const { user } = useUser();
  const cardHolderName = method.name || user?.name || 'Titular do Cartão';

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        isSelected && styles.selectedContainer
      ]}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={method.icon}
          size={24}
          color={isSelected ? COLORS.primary : COLORS.text}
        />
      </View>

      <View style={styles.content}>
        {method.type === 'CREDIT_CARD' ? (
            <View>
                <Text style={styles.title}>{method.brand} •••• {method.last4}</Text>
                <Text style={styles.subtitle}>{cardHolderName.toUpperCase()}</Text>
            </View>
        ) : (
            <Text style={styles.title}>Pagar com Pix</Text>
        )}
      </View>

      <View style={styles.radioContainer}>
        {isSelected ? (
            <Ionicons name="radio-button-on" size={24} color={COLORS.primary} />
        ) : (
            <Ionicons name="radio-button-off" size={24} color={COLORS.textLight} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    ...SHADOWS.light,
  },
  selectedContainer: {
    borderColor: COLORS.primary,
    backgroundColor: '#F3F0FF', // Very light purple
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: '600',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: SIZES.small,
    color: COLORS.textLight,
    marginTop: 2,
  },
  radioContainer: {
    marginLeft: 10,
  }
});

export default PaymentMethodItem;
