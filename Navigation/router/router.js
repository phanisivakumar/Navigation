import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Nav } from "../screens/Nav";
import { Another } from "../screens/Another";

const AppNavigator = createSwitchNavigator({
  routeNavigation: {
    screen: Nav
  },
  routeAnother: {
    screen: Another
  }
});

export const AppContainer = createAppContainer(AppNavigator);
