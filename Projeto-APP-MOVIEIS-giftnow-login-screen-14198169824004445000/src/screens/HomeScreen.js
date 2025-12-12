import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, FONTS } from '../constants/theme';
import { CATEGORIES, SHOPS } from '../data/mock';
import SearchBar from '../components/SearchBar';
import CategoryItem from '../components/CategoryItem';
import ShopCard from '../components/ShopCard';
import { useUser } from '../context/UserContext';

const HomeScreen = ({ navigation }) => {
  const { user } = useUser();

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      {/* Top Row: Greetings & Avatar */}
      <View style={styles.topRow}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="gift" size={18} color={COLORS.primary} style={{ marginRight: 6 }} />
            <Text style={styles.appName}>GiftNow</Text>
          </View>
          <Text style={styles.greeting}>Olá, {user?.name}</Text>
        </View>
        <TouchableOpacity>
           <Image source={{ uri: user?.avatar }} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <SearchBar />

      {/* Banner Promocional */}
      <View style={styles.bannerContainer}>
        <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Club GiftNow</Text>
            <Text style={styles.bannerText}>Ganhe cupons e entrega grátis!</Text>
        </View>
        <Ionicons name="gift-outline" size={50} color={COLORS.white} style={{ opacity: 0.8 }} />
      </View>

      {/* Categories */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <FlatList
          data={CATEGORIES}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryItem
                item={item}
                onPress={() => console.log('Categoria:', item.name)}
            />
          )}
          contentContainerStyle={{ paddingRight: SIZES.padding }}
        />
      </View>

      {/* Recommended Shops Title */}
      <View style={[styles.sectionContainer, { marginBottom: 10 }]}>
        <Text style={styles.sectionTitle}>Lojas Recomendadas</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={SHOPS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            <ShopCard
                shop={item}
                onPress={() => console.log('Loja:', item.name)}
            />
        )}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA', // Fundo levemente cinza
  },
  listContent: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: 80, // Espaço para tab bar futura
    paddingTop: 10,
  },
  headerContainer: {
    marginBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  appName: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  bannerContainer: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Sombra
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  bannerContent: {
      flex: 1,
  },
  bannerTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 4,
  },
  bannerText: {
    fontSize: SIZES.font,
    color: COLORS.white,
    opacity: 0.9,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: 15,
  },
});

export default HomeScreen;
