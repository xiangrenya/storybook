import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from "@storybook/react/types-6-0";

import Text from "./Text";
import Marker from "./Marker";

export default {
  title: "KMAP/覆盖物",
} as Meta;

export const marker = () => <Marker />;
marker.storyName = "标记";

export const text = () => <Text />;
text.storyName = "文本";
