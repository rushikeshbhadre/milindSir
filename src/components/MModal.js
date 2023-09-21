import React, {useState, useCallback} from 'react';
import {
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Linking,
  Alert
} from 'react-native';
const supportedURL = 'https://www.youtube.com/watch?v=of7rgBIiNe8&pp=ygUSbWlsaW5kIHNhbXBnYW9ua2Fy';
const youtube2 = 'https://www.youtube.com/watch?v=R4hUaOH_MIQ'

const MModal = ({button}) => {
  const [showModal, setShowModal] = useState(false);
  
const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);
    await Linking.openURL(url)
    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          <View style={styles.modal}>
            <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        <Pressable onPress={() => setShowModal(!showModal)}>
          {button}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});

export default MModal;