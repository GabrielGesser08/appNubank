
import { Text, StyleSheet, Image, View, ScrollView } from 'react-native';

import logo from '../../assets/logo.png';
import mastercard from '../../assets/mastercard.png'
import setting from '../../assets/setting.png'
import Wallet from '../../assets/Wallet.png'
import pix from '../../assets/pix.png'


export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.header}>
        <Image source={logo}/>
        <Image source={setting}/>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View />
          <Image source={mastercard}/>
        </View>
        <Text style={styles.cardText}>Gabriel Gesser</Text>
      </View>
      
      <View style={styles.cardDetails}>
        <View style={styles.cardDetailsHeader}>
          <Text style={styles.cardDetailsHeaderText}>Saldo disponível</Text>
        <Image source={Wallet}/>
        </View>
        <Text style={styles.cardDetailsText}>R$145,76</Text>
      </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>

        <ScrollView 
          style={styles.footerContentScrollView}
          howsHorizontalScrollIndicator={false} 
          horizontal={true}
        >

        <View style={styles.footerCard}>
        <Image source={pix}/>
        <Text style={styles.footerCardText}>Fazer um pix</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={pix}/>
        <Text style={styles.footerCardText}>Fazer um pix</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={pix}/>
        <Text style={styles.footerCardText}>Fazer um pix</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={pix}/>
        <Text style={styles.footerCardText}>Fazer um pix</Text>
      </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820ad1',
  },

  content:{ paddingHorizontal: 30 },

  header:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
  },

  card:{
    width: '100%',
    height: 190,
    backgroundColor: '#9500f6',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'space-between',
  },

  cardDetails:{
    width: '100%',
    height: 120,
    backgroundColor: '#9500f6',
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: 'space-between'
  },

  cardHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardText:{
    color: '#fff',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "600"
  },

  cardDetailsHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  cardDetailsText:{
    color: "#fff",
    fontSize: 34,
    fontWeight: "600"
  },

  cardDetailsHeaderText:{
    color: '#fff'
  },

  footer:{
    paddingTop: 30,
    paddingLeft: 20,
  },

  footerText:{
    marginHorizontal: 20,
    paddingBottom: 30,
    color: '#fff',
    fontWeight: "600",
    fontSize: 14,
  },

  footerCard:{
    width: 100,
    height: 127,
    backgroundColor: '#9500f6',
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  footerCardText:{
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
  },

  footerContentScrollView:{
    width: 400,
    
  },
});
