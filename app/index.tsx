import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';


type MenuItem = {
  id: string;
  title: string;
  subtitle: string;
  icon: keyof typeof Ionicons.glyphMap;
};


const DATA: MenuItem[] = [
  {
    id: '1',
    title: 'Dashboard',
    subtitle: 'Ringkasan singkat performa bisnis Anda.',
    icon: 'grid-outline',
  },
  {
    id: '2',
    title: 'Calendar',
    subtitle: 'Atur jadwal meeting dan to-do secara terstruktur.',
    icon: 'calendar-outline',
  },
  {
    id: '3',
    title: 'Tasks',
    subtitle: 'Lacak progres tugas tim secara real-time.',
    icon: 'checkbox-outline',
  },
  {
    id: '4',
    title: 'Messages',
    subtitle: 'Komunikasi cepat antar anggota tim.',
    icon: 'chatbubble-ellipses-outline',
  },
];

export default function App() {
  
  const { width } = useWindowDimensions();
  
  const isTablet = width > 600;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* --- HEADER CARD (Selalu Full Width) --- */}
        <View style={[styles.card, styles.headerCard]}>
          <View style={styles.headerLabelContainer}>
            <Text style={styles.viewLabel}>
              {isTablet ? 'TABLET VIEW' : 'MOBILE VIEW'}
            </Text>
          </View>
          
          <View style={isTablet ? styles.headerContentTablet : styles.headerContentMobile}>
            <View style={{ flex: 1 }}>
              <Text style={styles.headerTitle}>Dashboard Responsive</Text>
            </View>
            <View style={{ flex: 1 }}>
               <Text style={styles.headerSubtitle}>
                Contoh layout yang otomatis menyesuaikan tampilan tablet & ponsel.
              </Text>
            </View>
          </View>
        </View>

        {/* --- GRID CONTAINER --- */}
        <View style={styles.gridContainer}>
          {DATA.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              activeOpacity={0.8}
              style={[
                styles.card, 
                
                { width: isTablet ? '48%' : '100%' }
              ]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Ionicons name={item.icon} size={24} color="#334155" />
              </View>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}


const COLORS = {
  bg: '#0f172a',        
  cardBg: '#1e293b',    
  textWhite: '#f8fafc', 
  textGray: '#94a3b8',  
  accent: '#3b82f6'     
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  
  
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',    
    justifyContent: 'space-between', 
    gap: 16,             
  },

  
  card: {
    backgroundColor: COLORS.cardBg,
    borderRadius: 16,
    padding: 24,
    marginBottom: 0, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  
  headerCard: {
    marginBottom: 20, 
    backgroundColor: '#172033', 
    borderWidth: 1,
    borderColor: '#1e293b',
    width: '100%',
  },
  headerLabelContainer: {
    marginBottom: 12,
  },
  viewLabel: {
    color: '#3b82f6', 
    fontWeight: 'bold',
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  
  headerContentMobile: {
    flexDirection: 'column',
    gap: 10,
  },
  
  headerContentTablet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.textWhite,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.textGray,
    lineHeight: 24,
  },

  
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textWhite,
  },
  cardSubtitle: {
    fontSize: 14,
    color: COLORS.textGray,
    lineHeight: 20,
  },
});