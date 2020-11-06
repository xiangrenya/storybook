import React from "react";
import { kmap, KMapContext, ButtonGroup, Button } from "../common/index";
import iconUrl from "../assets/colors.svg";

// @ts-ignore
@kmap({ zoom: 10 })
export default class extends React.Component {
  static contextType = KMapContext;
  kmap = this.context;
  markerId: string = "";
  addMarker = () => {
    this.kmap.addMarker({
      url: iconUrl,
      point: [120.583, 31.294],
      ended: (res: { data: string }) => {
        this.markerId = res.data;
      },
    });
  };

  removeMarker = () => {
    this.kmap.removeMarkersById({
      id: this.markerId,
    });
  };

  render() {
    return (
      <ButtonGroup>
        <Button onClick={this.addMarker}>添加标记</Button>
        <Button onClick={this.removeMarker}>删除标记</Button>
      </ButtonGroup>
    );
  }
}
