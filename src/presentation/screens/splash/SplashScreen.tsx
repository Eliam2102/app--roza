import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <View style={styles.iconCircle}>
                    <View style={styles.iconSquare}>
                        <MaterialIcons name="local-florist" size={40} color="#1c5f21" />
                    </View>
                </View>
                <Text style={styles.title}>ROZA</Text>
                <Text style={styles.subtitle}>PALMAS & ÁRBOLES</Text>
            </View>

            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#ffffff" />
                <Text style={styles.loadingText}>LOADING ASSETS...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c5f21', // Primary green
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 100,
    },
    iconCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Translucent circle
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    iconSquare: {
        width: 60,
        height: 60,
        borderRadius: 12, // Rounded corners for square
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: '900', // Heavy bold
        color: '#ffffff',
        marginBottom: 8,
        letterSpacing: 1,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '600',
        color: 'rgba(255, 255, 255, 0.9)',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
    loadingContainer: {
        position: 'absolute',
        bottom: 60,
        alignItems: 'center',
        gap: 16,
    },
    loadingText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1,
    },
});
