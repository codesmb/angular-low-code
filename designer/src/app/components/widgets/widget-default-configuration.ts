import { TWidgetButton } from "./button/type";
import { WidgetTypeEnum } from "./enum";
import { TWidgetImage } from "./image/type";
import { TWidgetTextInput } from "./text-input/type";

export class WidgetDefaultConfiguration {
    static getConfiguration(type: WidgetTypeEnum): TWidgetTextInput | TWidgetButton | TWidgetImage | null {
        if (type === WidgetTypeEnum.textInput) {
          return <TWidgetTextInput>{
              identifier: '',
              text: '',
              placeholder: '',
              callback: '',
              click: ''
          };
        }
    
        if (type === WidgetTypeEnum.button) {
          return <TWidgetButton>{
            identifier: '',
            text: '',
            bgColor: '',
            click: ''
          };
        }
    
        if (type === WidgetTypeEnum.image) {
          return <TWidgetImage>{
            identifier: '',
            src: '',
            click: ''
          };
        }
    
        return null;
      }
}