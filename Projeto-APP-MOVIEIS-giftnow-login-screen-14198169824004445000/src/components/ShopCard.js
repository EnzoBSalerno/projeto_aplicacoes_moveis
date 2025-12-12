import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const ShopCard = ({ shop, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image source={{ uri: shop.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{shop.name}</Text>
          <View style={styles.ratingContainer}>
             <Ionicons name="star" size={12} color="#FFD700" style={{ marginRight: 2 }} />
             <Text style={styles.rating}>{shop.rating}</Text>
          </View>
        </View>

        <Text style={styles.category}>{shop.category}</Text>

        <View style={styles.footerRow}>
           <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={14} color={COLORS.textLight} />
              <Text style={styles.infoText}>{shop.deliveryTime}</Text>
           </View>
           <Text style={styles.dot}>•</Text>
           <Text style={[
               styles.infoText,
               { color: shop.deliveryFee === 'Grátis' ? COLORS.success : COLORS.textLight }
           ]}>
               {shop.deliveryFee === 'Grátis' ? 'Entrega Grátis' : shop.deliveryFee}
           </Text>
        </View>

        {shop.badges.length > 0 && (
            <View style={styles.badgeContainer}>
                {shop.badges.map((badge, index) => (
                    <View key={index} style={styles.badge}>
                        <Ionicons name="pricetag" size={10} color={COLORS.secondary} style={{ marginRight: 4 }} />
                        <Text style={styles.badgeText}>{badge}</Text>
                    </View>
                ))}
            </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.radius,
    marginBottom: 16,
    padding: 12,
    ...SHADOWS.light,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.background, // Fallback
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFDCB',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  rating: {
    fontSize: SIZES.small,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  category: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
    marginBottom: 6,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: SIZES.small,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  dot: {
    marginHorizontal: 6,
    color: COLORS.textLight,
    fontSize: SIZES.small,
  },
  badgeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF0F0', // Leve tom de rosa
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginRight: 6,
  },
  badgeText: {
    fontSize: 10,
    color: COLORS.secondary,
    fontWeight: '600',
  },
});

export default ShopCard;
