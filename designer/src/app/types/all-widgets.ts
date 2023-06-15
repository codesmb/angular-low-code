import { WidgetTypeEnum } from "../components/widgets/enum";

export type TAllWidgets = {
    type: WidgetTypeEnum;
    title: string;
    active: boolean;
}