import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const Checkbox = ({ label, isChecked = false, onPress, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[
        styles.box,
        isChecked ? styles.checkedBox : styles.uncheckedBox
      ]}>
        {isChecked && (
          <Ionicons name="checkmark" size={14} color={COLORS.white} />
        )}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZES.padding * 0.5,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 6, // Cantos arredondados (friendly)
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginRight: 10,
  },
  checkedBox: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  uncheckedBox: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.textLight,
  },
  label: {
    flex: 1,
    color: COLORS.text,
    fontSize: SIZES.font,
  },
});

export default Checkbox;
