import React, { createRef, useEffect } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View, Image,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './src/navigation/DrawerNavigator'
import { WithSplashScreen } from './WithSplashScreen'

const navigationRef = createRef()
const nav = () => navigationRef.current

const App = () => {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    async function initialize() {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setIsReady(true);
    }

    initialize();
  }, []);
  return (
    <WithSplashScreen isAppReady={isReady}>
      {isReady && <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
        </NavigationContainer>
      </SafeAreaView>}
    </WithSplashScreen>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
  MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
})

export default App