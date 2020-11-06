import React from "react";
import { kmap, KMapContext, ButtonGroup, Button } from "../common/index";

const point = [120.82032592775812, 31.2659392554352]
// @ts-ignore
@kmap({ zoom: 10, center: point })
export default class extends React.Component {
  static contextType = KMapContext;
  kmap = this.context;
  textId: string = "";
  addText = () => {
    this.kmap.addText({
      point,
      htmlText: "中华人民共和国",
      textType: "text-add-ungroup",
      style: "height: auto",
      ended: (res: { data: string }) => {
        this.textId = res.data;
      },
    });
  };

  removeTextById = () => {
    this.kmap.removeTextById({
      id: this.textId,
    });
  };

  render() {
    return (
      <ButtonGroup>
        <Button onClick={this.addText}>添加文本(未分组)</Button>
        <Button onClick={this.removeTextById}>通过id删除文本</Button>
      </ButtonGroup>
    );
  }
}
