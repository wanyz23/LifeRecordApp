# LifeRecordApp 📱

A modern React Native life recording app with analytics, mood tracking, and multi-platform support for Android, iOS, and HarmonyOS.

## ✨ Features

- **📝 Life Recording**: Create and manage personal life records with different categories
- **📊 Analytics Dashboard**: Comprehensive analytics with mood trends and activity insights
- **🎯 Multi-Category Support**: Life, Work, Study, Health, Travel, Food, Entertainment, and Social
- **📱 Cross-Platform**: Support for Android, iOS, and HarmonyOS
- **🔐 Authentication**: Secure login with biometric support
- **🎨 Modern UI**: Beautiful, responsive interface with dark/light theme support
- **📈 Data Visualization**: Interactive charts and statistics
- **🏷️ Tagging System**: Organize records with custom tags

## 🚀 Getting Started

### Prerequisites

- Node.js (>= 16.x)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)
- DevEco Studio (for HarmonyOS development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wanyz23/LifeRecordApp.git
cd LifeRecordApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the Metro bundler:
```bash
npm start
```

### Running the App

#### Android
```bash
npm run android
```

#### iOS
```bash
# Install CocoaPods dependencies first
cd ios && pod install && cd ..
npm run ios
```

#### HarmonyOS
```bash
npm run build:harmony
```

## 🧪 Testing

Run the test suite:
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 📦 Building for Production

### Android
```bash
npm run build:android
```

### iOS
```bash
npm run build:ios
```

### HarmonyOS
```bash
npm run build:harmony
```

## 🏗️ Project Structure

```
LifeRecordApp/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # App screens
│   ├── navigation/     # Navigation configuration
│   ├── services/       # API services
│   ├── types/          # TypeScript type definitions
│   ├── constants/      # App constants and themes
│   ├── contexts/       # React contexts
│   └── utils/          # Utility functions
├── android/            # Android-specific code
├── ios/                # iOS-specific code
├── harmony/            # HarmonyOS-specific code
└── __tests__/          # Test files
```

## 🛠️ Tech Stack

- **Framework**: React Native 0.81.4
- **Language**: TypeScript
- **Navigation**: React Navigation 7.x
- **State Management**: React Context
- **Testing**: Jest + React Native Testing Library
- **Icons**: Expo Vector Icons
- **Storage**: AsyncStorage + Encrypted Storage
- **Authentication**: Expo Local Authentication

## 📱 Supported Platforms

- ✅ Android (API 21+)
- ✅ iOS (iOS 13+)
- ✅ HarmonyOS (API 9+)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React Native community for the amazing framework
- Expo team for the excellent developer tools
- All contributors who help improve this project