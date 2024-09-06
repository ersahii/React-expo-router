import { Tabs } from "expo-router";

const TabsLayout = ()=>{
    return    <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        headerShown: false
      }}
    />
    <Tabs.Screen
      name="setting"
      options={{
        title: 'Setting',
        headerShown: false
      }}
    />
  </Tabs>
}
export default TabsLayout;