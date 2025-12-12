import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { useUser } from '../context/UserContext';

const ProfileScreen = ({ navigation }) => {
  const { user } = useUser();

  const handleLogout = () => {
    Alert.alert(
      "Sair da conta",
      "Tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        }
      ]
    );
  };

  const renderHeader = () => (
    <TouchableOpacity
      style={styles.header}
      activeOpacity={0.7}
      onPress={() => console.log('Editar perfil')}
    >
      <Image
        source={{ uri: user?.avatar || 'https://via.placeholder.com/150' }}
        style={styles.avatar}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{user?.name || 'Usuário'}</Text>
        <Text style={styles.userEmail}>{user?.email || 'email@exemplo.com'}</Text>
        <Text style={styles.editProfile}>Ver e editar dados pessoais</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
    </TouchableOpacity>
  );

  const renderClubCard = () => (
    <TouchableOpacity
      style={styles.clubCard}
      activeOpacity={0.9}
      onPress={() => console.log('Club GiftNow')}
    >
      <View style={styles.clubContent}>
        <View style={styles.clubHeader}>
          <Ionicons name="star" size={20} color="#FFD700" style={{ marginRight: 8 }} />
          <Text style={styles.clubTitle}>Club GiftNow</Text>
        </View>
        <Text style={styles.clubDescription}>
          Ganhe cupons exclusivos e taxa de entrega grátis em pedidos selecionados.
        </Text>

        <View style={styles.clubFooter}>
          <View style={styles.clubBadge}>
            <Text style={styles.clubBadgeText}>2 cupons disponíveis</Text>
          </View>
          <Text style={styles.clubActionText}>Ver benefícios</Text>
        </View>
      </View>

      <Ionicons
        name="gift-outline"
        size={100}
        color="rgba(255, 255, 255, 0.15)"
        style={styles.clubBgIcon}
      />
    </TouchableOpacity>
  );

  const renderMenuItem = ({ icon, title, subtitle, onPress, isLogout = false }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.menuIconContainer, isLogout && styles.logoutIconContainer]}>
        <Ionicons
          name={icon}
          size={22}
          color={isLogout ? COLORS.danger : COLORS.primary}
        />
      </View>

      <View style={styles.menuTextContainer}>
        <Text style={[styles.menuTitle, isLogout && styles.logoutText]}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>

      {!isLogout && (
         <Ionicons name="chevron-forward" size={20} color={COLORS.textLight} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderHeader()}
        {renderClubCard()}

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Minha conta</Text>

          {renderMenuItem({
            icon: "receipt-outline",
            title: "Meus pedidos",
            subtitle: "Ver histórico de compras",
            onPress: () => console.log('Meus pedidos')
          })}

          {renderMenuItem({
            icon: "card-outline",
            title: "Formas de pagamento",
            onPress: () => navigation.navigate('Payment')
          })}

          {renderMenuItem({
            icon: "location-outline",
            title: "Endereços de entrega",
            subtitle: `${user?.addresses?.length || 0} endereços cadastrados`,
            onPress: () => console.log('Endereços de entrega')
          })}
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Outros</Text>

          {renderMenuItem({
            icon: "help-circle-outline",
            title: "Ajuda e suporte",
            onPress: () => console.log('Ajuda e suporte')
          })}

          {renderMenuItem({
            icon: "log-out-outline",
            title: "Sair da conta",
            isLogout: true,
            onPress: handleLogout
          })}
        </View>

        <Text style={styles.version}>Versão 1.0.0</Text>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContainer: {
    padding: SIZES.padding,
    paddingBottom: 100,
  },
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: SIZES.radius,
    ...SHADOWS.light,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    backgroundColor: COLORS.background,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  userEmail: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
  },
  editProfile: {
    fontSize: SIZES.small,
    color: COLORS.primary,
    marginTop: 4,
    fontWeight: '500',
  },
  // Club Card
  clubCard: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    marginBottom: 25,
    ...SHADOWS.medium,
  },
  clubContent: {
    padding: 20,
  },
  clubHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  clubTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  clubDescription: {
    fontSize: SIZES.font,
    color: 'rgba(255,255,255, 0.9)',
    marginBottom: 15,
    lineHeight: 20,
  },
  clubFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clubBadge: {
    backgroundColor: COLORS.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  clubBadgeText: {
    fontSize: SIZES.small,
    color: COLORS.text,
    fontWeight: 'bold',
  },
  clubActionText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.font,
  },
  clubBgIcon: {
    position: 'absolute',
    right: -20,
    bottom: -20,
  },
  // Menu
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
    fontWeight: '600',
    marginBottom: 10,
    marginLeft: 5,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
    marginBottom: 1, // Separator effect if multiple items in a block
    borderRadius: SIZES.radius,
    marginVertical: 4,
    ...SHADOWS.light,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  logoutIconContainer: {
    backgroundColor: '#FFF0F0',
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    color: COLORS.text,
  },
  menuSubtitle: {
    fontSize: SIZES.small,
    color: COLORS.textLight,
    marginTop: 2,
  },
  logoutText: {
    color: COLORS.danger,
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    color: COLORS.textLight,
    fontSize: SIZES.small,
    marginTop: 10,
    marginBottom: 20,
    opacity: 0.5,
  }
});

export default ProfileScreen;
