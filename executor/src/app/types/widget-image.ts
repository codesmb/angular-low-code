import { WidgetTypeEnum } from "../enums/widget-type";

export type TWidgetImage = {
    identifier: string;
    src: string;
    click: string;
    type: WidgetTypeEnum;
}