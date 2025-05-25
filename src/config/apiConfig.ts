// src/config/apiConfig.ts
import {API_BASE_URL, TFNWS_API_KEY} from '@env';

if (!TFNWS_API_KEY) {
  console.error(
    'API Key is missing. Please ensure TFNWS_API_KEY is set in your .env file.',
  );
}

if (!API_BASE_URL) {
  console.error(
    'API Base URL is missing. Please ensure API_BASE_URL is set in your .env file.',
  );
}

export const TransportApiConfig = {
  apiKey: TFNWS_API_KEY,
  baseUrl: API_BASE_URL, // Example: 'https://api.transport.nsw.gov.au/v1/tp'
  // According to the swagger file, outputFormat should be rapidJSON [cite: 486]
  defaultParams: {
    outputFormat: 'rapidJSON', // [cite: 484, 486, 529, 530, 566, 567, 631, 632, 662, 663]
    coordOutputFormat: 'EPSG:4326', // Common coordinate format used in several endpoints [cite: 535, 569, 643, 665]
    version: '10.2.1.42', // API version from swagger [cite: 16, 92, 148, 250, 517]
  },
};

// Function to log API configuration on startup for verification (optional)
export const logApiConfig = () => {
  if (__DEV__) { // Only log in development mode
    console.log('Transport API Configuration Loaded:');
    console.log(`- Base URL: ${TransportApiConfig.baseUrl}`);
    console.log(`- API Key Loaded: ${!!TransportApiConfig.apiKey}`);
    console.log(`- Default Output Format: ${TransportApiConfig.defaultParams.outputFormat}`);
  }
};