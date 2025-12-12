import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color={COLORS.textLight} style={styles.icon} />
      <TextInput
        placeholder="Buscar lojas ou presentes"
        placeholderTextColor={COLORS.textLight}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding / 2,
    height: 50,
    borderRadius: SIZES.radius,
    // Sombra suave
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    marginVertical: SIZES.base,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: SIZES.font,
    color: COLORS.text,
  },
});

export default SearchBar;
