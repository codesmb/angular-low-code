import { WidgetTypeEnum } from "../components/widgets/enum";
import { TAllWidgets } from "../types/all-widgets";

export const EXPORT_FILE_NAME_JSON = 'configuration.json';
export const EXPORT_FILE_NAME_JS = 'script.js';
export const TEMPLATE_PATH_JS = 'assets/js-template.js';
export const MASK_FOR_INSERT_CONTENT_IN_TEMPLATE_PATH_JS  = '//%{content}%';

export const ALL_WIDGETS: TAllWidgets[] = [
    {
        type: WidgetTypeEnum.image,
        title: 'Image',
        active: true,
    },
    {
        type: WidgetTypeEnum.button,
        title: 'Button',
        active: true,
    },
    {
        type: WidgetTypeEnum.textInput,
        title: 'Text Input',
        active: true,
    },
];

export const ERRORS_TXT = {
    widgetsSameIds: 'Same Ids',
    wrongLoadJsTemplate: 'Wrong load file:' + TEMPLATE_PATH_JS,
    createJsSaveFileError: 'Error with safe js file',
    createJsonSaveFileError: 'Error with safe json file',
}