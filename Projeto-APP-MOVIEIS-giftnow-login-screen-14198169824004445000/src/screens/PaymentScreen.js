import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { COLORS, SIZES, SHADOWS } from '../constants/theme';
import { PAYMENT_METHODS, ORDER_SUMMARY } from '../data/mock';
import PaymentMethodItem from '../components/PaymentMethodItem';
import Button from '../components/Button';

const PaymentScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = React.useState(null);

  const handleSelect = (id) => {
    setSelectedMethod(id);
  };

  const handleConfirm = () => {
    if (!selectedMethod) {
      Alert.alert('Atenção', 'Selecione uma forma de pagamento para continuar.');
      return;
    }
    Alert.alert('Sucesso', 'Pagamento confirmado!');
  };

  const renderHeader = () => (
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Formas de pagamento</Text>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.footerContainer}>
        {/* Order Summary */}
        <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>{ORDER_SUMMARY.subtotal}</Text>
            </View>
            <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Entrega</Text>
                <Text style={styles.summaryValue}>{ORDER_SUMMARY.delivery}</Text>
            </View>
            <View style={styles.summaryRow}>
                <Text style={[styles.summaryLabel, { color: COLORS.success }]}>Desconto</Text>
                <Text style={[styles.summaryValue, { color: COLORS.success }]}>{ORDER_SUMMARY.discount}</Text>
            </View>
            <View style={[styles.summaryRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total</Text>
                <Text style={styles.totalValue}>{ORDER_SUMMARY.total}</Text>
            </View>
        </View>

        {/* Action Button */}
        <Button
            title="Confirmar pagamento"
            onPress={handleConfirm}
        />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {renderHeader()}

      <FlatList
        data={PAYMENT_METHODS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <PaymentMethodItem
                method={item}
                isSelected={Boolean(selectedMethod === item.id)}
                onPress={() => handleSelect(item.id)}
            />
        )}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={() => (
            <Button
                title="Adicionar novo cartão"
                variant="secondary"
                iconName="add"
                onPress={() => console.log('Add card')}
                style={{ marginTop: 10 }}
            />
        )}
      />

      {renderFooter()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
    zIndex: 1,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  listContent: {
    padding: SIZES.padding,
    paddingBottom: 20,
  },
  footerContainer: {
    padding: SIZES.padding,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    ...SHADOWS.medium,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: SIZES.font,
    color: COLORS.textLight,
  },
  summaryValue: {
    fontSize: SIZES.font,
    color: COLORS.text,
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  totalValue: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
});

export default PaymentScreen;
