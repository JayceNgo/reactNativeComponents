import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

export default function BottomSheetScreen() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text>Bottom Sheet Example</Text>
      
      <Pressable
        onPress={() => {
          bottomSheetRef.current?.expand();
        }}
      >
        <Text>Open Bottom Sheet</Text>
      </Pressable>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['10%', '75%']}
        onChange={handleSheetChanges}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
