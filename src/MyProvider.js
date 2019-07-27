import { SystemContext, system_context } from "./SystemContext";

class MyProvider extends Component {
  render() {
    return <SystemContext.Provider value={system_context} />;
  }
}
