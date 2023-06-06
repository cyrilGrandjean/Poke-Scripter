import React from 'preact/compat';
import {Action} from '../base';

export class OptionUI {
    description: string;
    enabled: KnockoutObservable<boolean>;


    constructor(description: string, action: Action) {
        this.description = description;
        this.enabled = action.enabled;
    }

    public onclick() {
        this.enabled(!this.enabled());
    }
}
export function OptionRow(props: { option: OptionUI }) {
    return <tr>
                <td>
                    <span>{props.option.description}</span>
                </td>
                <td>
                    <label className="form-check-label toggler-wrapper style-1 m-auto">
                        <input className="clickable" type="checkbox" onClick={props.option.onclick.bind(props.option)}></input>
                        <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                        </div>
                    </label>
                </td>
            </tr>;
}
