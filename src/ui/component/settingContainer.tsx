import {Container} from '../base';
import React from 'preact/compat';
import {Action} from '../../base';

export class OptionUI {
    description: string;
    modalId: string;
    enabled: KnockoutObservable<boolean>;


    constructor(description: string, action: Action, modalId: string = undefined) {
        this.description = description;
        this.modalId = modalId;
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
    const settingsCell = (modalId: string) => {
        if (modalId != '' && modalId != undefined) {
            return <img class="clickable" src="assets/images/fa-cog.svg"
                     style="width: auto; height: 41px; padding: 8px;"
                     data-toggle="modal"
                     href={`#${modalId}`}/>
        }
    }

    return <table className="table table-sm m-0">
        <tbody id="pokeballFilters">
        {props.options.map(option => (
            <tr>
                <td className="p-2" style="vertical-align: middle;">
                    <span class="m-0">{option.description}</span>
                </td>
                <td className="p-2" style="vertical-align: middle;">
                    <label className="form-check-label toggler-wrapper style-1 m-auto">
                        <input className="clickable" type="checkbox" onClick={option.onclick.bind(option)}></input>
                        <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                        </div>
                    </label>
                </td>
                <td  className="p-2" style="vertical-align: middle;">
                    {settingsCell(option.modalId)}
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
