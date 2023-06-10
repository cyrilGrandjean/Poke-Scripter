import {Container} from '../base';
import React from 'preact/compat';
import {Action} from '../../base';

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
export interface SettingContainerProps {
    options: OptionUI[]
}

interface TableSettingContainerProps {
    options: OptionUI[]
}

function TableSettingContainer(props: TableSettingContainerProps) {
    return <table className="table table-sm m-0">
        <tbody id="pokeballFilters">
        {props.options.map(option => (
            <tr>
                <td>
                    <span>{option.description}</span>
                </td>
                <td>
                    <label className="form-check-label toggler-wrapper style-1 m-auto">
                        <input className="clickable" type="checkbox" onClick={option.onclick.bind(option)}></input>
                        <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                        </div>
                    </label>
                </td>
            </tr>
        ))}
        </tbody>
    </table>
}


export function SettingContainer(props: SettingContainerProps) {
    return <Container
        id="pokeScripterSetting"
        title="Poké-Scripter"
        visible={true}
        body={<TableSettingContainer options={props.options}/>}/>
}
