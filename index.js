import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens";
import { registerLoggerForDebug } from "remx";
import * as style from './src/style'

registerLoggerForDebug(console.log);
registerScreens();

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
