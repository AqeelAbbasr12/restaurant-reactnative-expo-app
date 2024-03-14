import { useWindowDimensions } from 'react-native';

// Custom hook to get screen dimensions
const useScreenDimensions = () => {
    const windowDimensions = useWindowDimensions();
    const screenWidth = windowDimensions.width;
    const screenHeight = windowDimensions.height;

    return { screenWidth, screenHeight };
};

export default useScreenDimensions;