import { WidgetTypeEnum } from "../enums/widget-type";
import { TWidgetButton } from "./widget-button";
import { TWidgetImage } from "./widget-image";
import { TWidgetTextInput } from "./widget-text-input";

export type TWidget = {
    id: number;
    type: WidgetTypeEnum;
    configuration: TWidgetTextInput | TWidgetImage | TWidgetButton;
    errorMsg: string;
}