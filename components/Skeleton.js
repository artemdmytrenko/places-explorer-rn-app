import { useEffect, useRef } from "react";
import { Animated } from "react-native";

const Skeleton = ({ styles, children }) => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 400,
        }),
      ])
    ).start(({ finished }) => finished);
  }, [opacity]);

  return (
    <Animated.View
      style={{
        opacity: opacity.current,
        ...styles,
      }}
    >
      {children}
    </Animated.View>
  );
};

export default Skeleton;
