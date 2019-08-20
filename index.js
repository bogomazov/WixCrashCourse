import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens";
import { registerScreens as registerExtraScreens } from "./App";
import { registerLoggerForDebug } from "remx";
import * as style from './src/style'

registerLoggerForDebug(console.log);
registerScreens();
registerExtraScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "blog.PostsList",
              options: {
                topBar: {
                  title: {
                    text: "Blog"
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
});
