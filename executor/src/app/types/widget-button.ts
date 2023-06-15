import { WidgetTypeEnum } from "../enums/widget-type";

export type TWidgetButton = {
    identifier: string;
    text: string;
    bgColor: string;
    click: string;
    type: WidgetTypeEnum;
}