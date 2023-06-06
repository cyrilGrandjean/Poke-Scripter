import React from 'preact/compat';
import {OptionRow, OptionRowProps} from './optionRow';
export interface MenuProps {
    options: OptionRowProps[]
}
export function Menu(props: MenuProps) {
    return <div id="pokeScripterSetting" className="card sortable border-secondary mb-3">
        <div className="card-header p-0" data-toggle="collapse" href="#pokeScripterSettingBody">
            <span>Poké-Scripter</span>
        </div>
        <div id="pokeballSelectorBody" className="card-body p-0 table-responsive">
            <table className="table table-sm m-0">
                <thead>
                <tr>
                    <th>option</th>
                    <th></th>
                </tr>
                </thead>
                <tbody id="pokeballFilters">
                {props.options.map(option => (
                    <OptionRow name={option.name}/>
                ))}
                </tbody>
            </table>
        </div>
    </div>;
}
