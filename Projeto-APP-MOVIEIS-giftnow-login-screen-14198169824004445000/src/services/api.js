import axios from 'axios';
import { Platform } from 'react-native';

// For Android Emulator, use 10.0.2.2. For iOS Simulator/Web, use localhost.
// If running on a physical device, use your machine's local IP (e.g., 192.168.1.X).
const BASE_URL = Platform.select({
  android: 'http://10.0.2.2:3000',
  ios: 'http://localhost:3000',
  default: 'http://localhost:3000',
});

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
