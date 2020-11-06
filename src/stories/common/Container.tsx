import React from "react";
// import { KMapMM as KMap } from "kmap-service";
import { KMap } from "../../dist/kmap-service-main-mm";


export const KMapContext = React.createContext(null);

interface ContainerProps {
  containerId?: string;
  configUrl?: string;
  zoom?: number;
  center?: [number, number];
}
interface ContainerState {
  isLoaded: boolean;
}

let store: {
  [key: string]: KMap;
} = {};

class Container extends React.Component<ContainerProps, ContainerState> {
  static defaultProps = {
    containerId: "map",
    configUrl: "/kmap.config.json",
    center: [120.583, 31.294],
    zoom: 11,
  };
  state: ContainerState = {
    isLoaded: false,
  };
  constructor(props: ContainerProps) {
    super(props);
    const { containerId, configUrl, zoom, center } = props;
    // if (store[containerId as string]) return;
    if (!document.getElementById(containerId as string)) {
      const element = document.createElement("div");
      element.id = containerId as string;
      document.body.appendChild(element);
    }
    const kmap = new KMap({
      configUrl,
      containerId,
      zoom,
      center,
      onLoadMap: () => {
        console.log(kmap);
        store[containerId as string] = kmap;
        this.setState({ isLoaded: true });
      },
    });
  }
  render() {
    const kmap = store[this.props.containerId as string];
    if (!kmap) return null;
    return (
      <KMapContext.Provider value={kmap}>
        {this.props.children}
      </KMapContext.Provider>
    );
  }
}

export function kmap<T>(containerProps: ContainerProps) {
  return function (WrappedComponent: React.ComponentType<T>) {
    return class extends React.Component {
      render() {
        return (
          <Container {...containerProps}>
            <WrappedComponent {...(this.props as T)} />
          </Container>
        );
      }
    };
  };
}