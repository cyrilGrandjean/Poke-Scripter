import React from 'preact/compat';
import {OptionRow, OptionUI} from './optionRow';
export interface MenuProps {
    options: OptionUI[]
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
                    <OptionRow option={option}/>
                ))}
                </tbody>
            </table>
        </div>
    </div>;
}
