import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const ClubGiftCard = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.content}>
        <View style={styles.header}>
            <Ionicons name="star" size={20} color="#FFD700" style={{ marginRight: 8 }} />
            <Text style={styles.title}>Club GiftNow</Text>
        </View>
        <Text style={styles.description}>
            Ganhe cupons exclusivos e taxa de entrega grátis em pedidos selecionados.
        </Text>

        <View style={styles.footer}>
             <View style={styles.badge}>
                 <Text style={styles.badgeText}>2 cupons disponíveis</Text>
             </View>
             <Text style={styles.actionText}>Ver benefícios</Text>
        </View>
      </View>

      {/* Elemento decorativo de fundo */}
      <Ionicons
        name="gift-outline"
        size={100}
        color="rgba(255, 255, 255, 0.15)"
        style={styles.bgIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    marginBottom: 20,
    marginTop: 10,
    ...SHADOWS.medium,
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  description: {
    fontSize: SIZES.font,
    color: 'rgba(255,255,255, 0.9)',
    marginBottom: 15,
    lineHeight: 20,
  },
  footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
  badge: {
      backgroundColor: COLORS.accent,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 8,
  },
  badgeText: {
      fontSize: SIZES.small,
      color: COLORS.text,
      fontWeight: 'bold',
  },
  actionText: {
      color: COLORS.white,
      fontWeight: 'bold',
      fontSize: SIZES.font,
  },
  bgIcon: {
      position: 'absolute',
      right: -20,
      bottom: -20,
  }
});

export default ClubGiftCard;
