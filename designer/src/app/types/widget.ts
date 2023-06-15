// import { TWidgetImage } from "./widget-image";
// import { TWidgetButton } from "./widget-button";
// import { TWidgetTextInput } from "./widget-text-input";

import { WidgetTypeEnum } from "../components/widgets/enum";

export type TWidget = {
    id: number;
    type: WidgetTypeEnum;
    configuration: any; // TWidgetButton | TWidgetTextInput | TWidgetImage
    errorMsg?: string;
}