import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeTabs } from "./bottomTab";
import { RootStackParamList } from "./types";

const stack = createNativeStackNavigator<RootStackParamList>()
const { Navigator, Screen } = stack

const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="homeTabs"
    >
      <Screen name="homeTabs" component={HomeTabs} />
    </Navigator>
  )
}

export default RootNavigator