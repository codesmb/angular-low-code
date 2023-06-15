import { WidgetTypeEnum } from "../enums/widget-type";

export type TWidgetTextInput = {
    identifier: string;
    text: string;
    placeholder: string;
    click: string;
    callback: string;
    type: WidgetTypeEnum;
}