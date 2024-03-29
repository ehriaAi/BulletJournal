import { QuestionBase } from "../../../helpers/models/form-models/questionBase";

export class SwitchQuestion extends QuestionBase<boolean> {
    override type = 'switch';
    override controlType = 'checkbox';
}

export function createSwitchQuestion(key: string, label: string, item?: any) {
    return new SwitchQuestion({
        key: key,
        label: label,
        value: (item && item[key]) ? item[key] : false
    });
}


// key: 'meds',
// label: 'Did you take your meds?',
// value: false,