import { TWidgetButton } from "./widget-button";
import { TWidgetImage } from "./widget-image";
import { TWidgetTextInput } from "./widget-text-input";

export type TWidgetTree = {
    [key: string]: TWidgetTextInput | TWidgetImage | TWidgetButton;
}