import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Colors from '@/src/core/constants/Colors';
import { Text } from '@/src/presentation/components/Themed';

const CLIENTS = [
    {
        id: '1',
        initials: 'JR',
        name: 'Juan Rodriguez',
        type: 'Mayoreo',
        phone: '+52 55 1234 5678',
        projects: 3,
        color: 'blue'
    },
    {
        id: '2',
        initials: 'VS',
        name: 'Viveros Santa Fe',
        type: 'Minoreo',
        phone: '+52 33 9876 5432',
        projects: 1,
        color: 'orange'
    },
    {
        id: '3',
        initials: 'MG',
        name: 'Maria González',
        type: 'Mayoreo',
        phone: '+52 81 2345 6789',
        projects: 5,
        color: 'purple'
    },
    {
        id: '4',
        initials: 'HA',
        name: 'Hotel Los Arcos',
        type: 'Mayoreo',
        phone: '+52 99 8765 4321',
        projects: 0,
        color: 'teal'
    },
    {
        id: '5',
        initials: 'CR',
        name: 'Club Residencial',
        type: 'Minoreo',
        phone: '+52 55 4433 2211',
        projects: 12,
        color: 'rose'
    }
];

const FILTERS = ['Todos', 'Mayoreo', 'Minoreo', 'Recientes'];

export default function SettingsScreen() {
    // We call it SettingsScreen because it's wired to 'two', but visually it's Clients
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? 'light'];
    const insets = useSafeAreaInsets();
    const [activeFilter, setActiveFilter] = useState('Todos');

    const renderClient = ({ item }: { item: typeof CLIENTS[0] }) => {
        let badgeBg = theme.background;
        let badgeColor = theme.textSecondary;

        // Simple logic for colors
        const getAvatarColors = (color: string) => {
            const opacity = colorScheme === 'dark' ? 0.3 : 0.2;
            switch (color) {
                case 'blue': return { bg: `rgba(59, 130, 246, ${opacity})`, text: '#3b82f6', border: `rgba(59, 130, 246, 0.5)` };
                case 'orange': return { bg: `rgba(249, 115, 22, ${opacity})`, text: '#f97316', border: `rgba(249, 115, 22, 0.5)` };
                case 'purple': return { bg: `rgba(168, 85, 247, ${opacity})`, text: '#a855f7', border: `rgba(168, 85, 247, 0.5)` };
                case 'teal': return { bg: `rgba(20, 184, 166, ${opacity})`, text: '#14b8a6', border: `rgba(20, 184, 166, 0.5)` };
                case 'rose': return { bg: `rgba(244, 63, 94, ${opacity})`, text: '#f43f5e', border: `rgba(244, 63, 94, 0.5)` };
                default: return { bg: theme.background, text: theme.text, border: theme.cardBorder };
            }
        };

        const colors = getAvatarColors(item.color);

        return (
            <TouchableOpacity style={[styles.card, { backgroundColor: theme.surface, borderColor: theme.cardBorder }]}>
                <View style={[styles.avatar, { backgroundColor: colors.bg, borderColor: colors.border }]}>
                    <Text style={[styles.avatarText, { color: colors.text }]}>{item.initials}</Text>
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.cardRow}>
                        <Text style={styles.clientName}>{item.name}</Text>
                        <View style={[styles.badge, { backgroundColor: item.type === 'Mayoreo' ? theme.moneyBg : theme.background }]}>
                            <Text style={[styles.badgeText, { color: item.type === 'Mayoreo' ? theme.money : theme.textSecondary }]}>{item.type}</Text>
                        </View>
                    </View>
                    <Text style={[styles.phoneText, { color: theme.textSecondary }]}>{item.phone}</Text>
                    <View style={styles.projectRow}>
                        <MaterialIcons name={item.projects === 0 ? "check-circle" : "folder-open"} size={16} color={item.projects === 0 ? theme.money : theme.textSecondary} />
                        <Text style={[styles.projectText, { color: item.projects === 0 ? theme.money : theme.textSecondary }]}>
                            {item.projects === 0 ? 'Sin proyectos activos' : `${item.projects} ${item.projects === 1 ? 'Proyecto activo' : 'Proyectos activos'}`}
                        </Text>
                    </View>
                </View>
                <MaterialIcons name="chevron-right" size={24} color={theme.textSecondary} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <View style={[styles.header, {
                backgroundColor: theme.surface,
                borderBottomColor: theme.cardBorder,
                paddingTop: insets.top + 10
            }]}>
                <View style={styles.headerTop}>
                    <Text style={styles.headerTitle}>Clientes</Text>
                    <View style={styles.headerIcons}>
                        <TouchableOpacity style={styles.iconButton}>
                            <MaterialIcons name="search" size={24} color={theme.primary} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                            <MaterialIcons name="tune" size={24} color={theme.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.searchContainer, { backgroundColor: colorScheme === 'dark' ? 'rgba(255,255,255,0.1)' : '#f3f4f6' }]}>
                    <MaterialIcons name="search" size={20} color={theme.textSecondary} style={{ marginLeft: 12 }} />
                    <TextInput
                        style={[styles.searchInput, { color: theme.text }]}
                        placeholder="Buscar por nombre o teléfono..."
                        placeholderTextColor={theme.textSecondary}
                    />
                </View>
            </View>

            {/* Filters */}
            <View style={styles.filterContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterScroll}>
                    {FILTERS.map((filter) => (
                        <TouchableOpacity
                            key={filter}
                            style={[
                                styles.filterChip,
                                {
                                    backgroundColor: activeFilter === filter ? theme.primary : theme.surface,
                                    borderColor: activeFilter === filter ? theme.primary : theme.cardBorder
                                }
                            ]}
                            onPress={() => setActiveFilter(filter)}
                        >
                            <Text style={[styles.filterText, { color: activeFilter === filter ? '#fff' : theme.textSecondary }]}>{filter}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* List */}
            <FlatList
                data={CLIENTS}
                keyExtractor={(item) => item.id}
                renderItem={renderClient}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />

            {/* FAB */}
            <TouchableOpacity style={[styles.fab, { backgroundColor: theme.primary, shadowColor: theme.primary }]}>
                <MaterialIcons name="add" size={28} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // paddingTop is dynamic
        paddingBottom: 16,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    headerIcons: {
        flexDirection: 'row',
        gap: 8,
    },
    iconButton: {
        padding: 8,
        borderRadius: 999,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 44,
        borderRadius: 12,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 8,
        fontSize: 14,
    },
    filterContainer: {
        paddingVertical: 12,
    },
    filterScroll: {
        paddingHorizontal: 16,
        gap: 12,
    },
    filterChip: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 999,
        borderWidth: 1,
    },
    filterText: {
        fontSize: 14,
        fontWeight: '500',
    },
    listContent: {
        padding: 16,
        gap: 16,
        paddingBottom: 100,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginRight: 16,
    },
    avatarText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardContent: {
        flex: 1,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    clientName: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 8,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '600',
    },
    phoneText: {
        fontSize: 14,
        marginBottom: 8,
    },
    projectRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    projectText: {
        fontSize: 12,
        fontWeight: '500',
    },
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 56,
        height: 56,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
    },
});
