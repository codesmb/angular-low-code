// import { TWidgetButton } from "../components/widgets/button/type";
import { WidgetTypeEnum } from "../components/widgets/enum";
// import { TWidgetImage } from "../components/widgets/image/type";
// import { TWidgetTextInput } from "../components/widgets/text-input/type";

export type TWidget = {
    id: number;
    type: WidgetTypeEnum;
    configuration: any; //TWidgetButton | TWidgetTextInput | TWidgetImage
    errorMsg?: string;
}