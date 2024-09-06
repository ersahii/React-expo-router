import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";



const DrawerLayout = () => {
  return (
    <GestureHandlerRootView>
    <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
    </Drawer>
    </GestureHandlerRootView>
  );
};
export default DrawerLayout;
