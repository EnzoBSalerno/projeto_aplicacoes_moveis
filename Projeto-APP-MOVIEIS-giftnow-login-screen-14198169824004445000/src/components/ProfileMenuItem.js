import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const ProfileMenuItem = ({ icon, title, subtitle, onPress, isLogout = false }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.iconContainer, isLogout && styles.logoutIconContainer]}>
        <Ionicons
          name={icon}
          size={22}
          color={isLogout ? COLORS.danger : COLORS.primary}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.title, isLogout && styles.logoutText]}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      {!isLogout && (
         <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F0FF', // Leve roxo
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logoutIconContainer: {
    backgroundColor: '#FFF0F0', // Leve vermelho
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    color: COLORS.text,
  },
  subtitle: {
    fontSize: SIZES.small,
    color: COLORS.textLight,
    marginTop: 2,
  },
  logoutText: {
    color: COLORS.danger,
    fontWeight: '600',
  },
});

export default ProfileMenuItem;
