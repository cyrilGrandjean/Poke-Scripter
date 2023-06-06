import React from 'preact/compat';

export interface OptionRowProps {
    name: string
}
export function OptionRow(props: OptionRowProps) {
    return <tr>
                <td>
                    <span>{props.name}</span>
                </td>
                <td>
                    <label className="form-check-label toggler-wrapper style-1 m-auto">
                        <input className="clickable" type="checkbox"></input>
                        <div className="toggler-slider">
                            <div className="toggler-knob"></div>
                        </div>
                    </label>
                </td>
            </tr>;
}
