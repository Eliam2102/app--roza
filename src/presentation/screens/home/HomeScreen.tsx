import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '@/src/core/constants/Colors';
import { Text } from '@/src/presentation/components/Themed';

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <View style={[styles.header, {
                backgroundColor: theme.surface,
                paddingTop: insets.top + 12,
            }]}>
                <View style={styles.headerLeft}>
                    <View style={styles.avatarBorder}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop' }}
                            style={styles.avatar}
                        />
                    </View>
                    <View>
                        <Text style={styles.greetingSubtitle}>Bienvenido de nuevo,</Text>
                        <Text style={styles.greetingTitle}>Carlos Ruiz</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.notifButton}>
                    <MaterialIcons name="notifications" size={26} color={theme.text} />
                    <View style={styles.notifBadge} />
                </TouchableOpacity>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 20 }]}
            >

                {/* Main Action Buttons */}
                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity style={[styles.bigButton, { backgroundColor: theme.primary }]}>
                        <View style={[styles.bigButtonIconBox, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                            <MaterialIcons name="add" size={24} color="#fff" />
                        </View>
                        <Text style={[styles.bigButtonText, { color: '#fff' }]}>Nueva Cotización</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.bigButton, { backgroundColor: theme.surface }]}>
                        <View style={[styles.bigButtonIconBox, { backgroundColor: '#f3f4f6' }]}>
                            <MaterialIcons name="person-add" size={24} color="#1f2937" />
                        </View>
                        <Text style={[styles.bigButtonText, { color: theme.text }]}>Nuevo Cliente</Text>
                    </TouchableOpacity>
                </View>

                {/* Resumen de Hoy */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Resumen de Hoy</Text>
                    <TouchableOpacity>
                        <Text style={[styles.seeAllText, { color: theme.primary }]}>Ver todo</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.summaryCard, { backgroundColor: theme.surface }]}>
                    {/* Item 1 */}
                    <TouchableOpacity style={styles.summaryItem}>
                        <View style={[styles.summaryIconBox, { backgroundColor: '#eff6ff' }]}>
                            <MaterialIcons name="assignment" size={24} color="#3b82f6" />
                        </View>
                        <View style={styles.summaryContent}>
                            <Text style={styles.summaryCount}>3 Cotizaciones</Text>
                            <Text style={styles.summaryLabel}>Pendientes de revisión</Text>
                        </View>
                        <MaterialIcons name="chevron-right" size={20} color={theme.textSecondary} />
                    </TouchableOpacity>

                    <View style={[styles.separator, { backgroundColor: theme.background }]} />

                    {/* Item 2 */}
                    <TouchableOpacity style={styles.summaryItem}>
                        <View style={[styles.summaryIconBox, { backgroundColor: '#f0fdf4' }]}>
                            <MaterialIcons name="local-florist" size={24} color="#16a34a" />
                        </View>
                        <View style={styles.summaryContent}>
                            <Text style={styles.summaryCount}>2 Proyectos</Text>
                            <Text style={styles.summaryLabel}>En progreso hoy</Text>
                        </View>
                        <MaterialIcons name="chevron-right" size={20} color={theme.textSecondary} />
                    </TouchableOpacity>
                </View>

                {/* Proyecto Activo */}
                <View style={[styles.sectionHeader, { marginTop: 24 }]}>
                    <Text style={styles.sectionTitle}>Proyecto Activo</Text>
                </View>

                <TouchableOpacity style={styles.activeProjectCard}>
                    <ImageBackground
                        source={{ uri: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&w=2940&auto=format&fit=crop' }}
                        style={styles.projectBackground}
                        imageStyle={{ borderRadius: 20 }}
                    >
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)']}
                            style={styles.gradientOverlay}
                        >
                            <View style={styles.projectContent}>
                                <View style={styles.statusBadge}>
                                    <Text style={styles.statusText}>EN PROGRESO</Text>
                                </View>
                                <Text style={styles.projectTitle}>Residencia Familia Torres</Text>
                                <View style={styles.locationRow}>
                                    <MaterialIcons name="location-on" size={16} color="#e5e5e5" />
                                    <Text style={styles.locationText}>San Pedro, Valle Oriente</Text>
                                </View>
                            </View>

                            <View style={styles.arrowButton}>
                                <MaterialIcons name="arrow-forward" size={24} color="#fff" />
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    avatarBorder: {
        width: 52,
        height: 52,
        borderRadius: 26,
        padding: 2,
        backgroundColor: '#dca569', // Gold-ish border from image
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
    },
    greetingSubtitle: {
        fontSize: 13,
        color: '#6b7280',
        fontWeight: '500',
    },
    greetingTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    notifButton: {
        padding: 8,
    },
    notifBadge: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#ef4444',
        borderWidth: 1.5,
        borderColor: '#fff',
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    bigButton: {
        flex: 1,
        borderRadius: 16,
        padding: 16,
        height: 120, // Rectangular shape
        justifyContent: 'space-between',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
    },
    bigButtonIconBox: {
        width: 40,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigButtonText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
    },
    seeAllText: {
        fontSize: 13,
        fontWeight: '600',
    },
    summaryCard: {
        borderRadius: 20,
        padding: 20,
        elevation: 1,
        shadowColor: '#000',
        shadowOpacity: 0.03,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
    },
    summaryItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    summaryIconBox: {
        width: 48,
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    summaryContent: {
        flex: 1,
    },
    summaryCount: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    summaryLabel: {
        fontSize: 13,
        color: '#6b7280',
    },
    separator: {
        height: 1,
        width: '100%',
        marginVertical: 16,
    },
    activeProjectCard: {
        height: 220,
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 16,
    },
    projectBackground: {
        width: '100%',
        height: '100%',
    },
    gradientOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    projectContent: {
        flex: 1,
    },
    statusBadge: {
        backgroundColor: '#22c55e',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    statusText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    projectTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    locationText: {
        color: '#e5e5e5',
        fontSize: 13,
        fontWeight: '500',
    },
    arrowButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(255,255,255,0.2)',
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
});
