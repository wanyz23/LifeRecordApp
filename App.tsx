/**
 * 人生记录应用 - Life Record App
 * 多平台生活记录与AI分析应用
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/AuthContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { THEME } from './src/constants/theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppNavigator />
        <StatusBar style="auto" backgroundColor={THEME.colors.surface} />
      </AuthProvider>
    </SafeAreaProvider>
  );
}