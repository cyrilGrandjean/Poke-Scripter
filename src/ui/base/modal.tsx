import React from 'preact/compat';

export interface NavBarProps {
    id: string
    title: string
    body: React.JSX.Element
}

export interface ModalProps {
    id: string;
    element: NavBarProps | NavBarProps[];
}

export function Modal(props: ModalProps) {
    const header = () => {
        if (Array.isArray(props.element)) {
            return <ul>
                {props.element.map((item, idx) => {
                    return <li class="nav-item">
                        <a data-toggle='tab' class={'nav-link' + !idx ? ' active' : ''}
                           href={`#${item.id}`}>{item.title}</a>
                    </li>
                })}
            </ul>
        } else {
            return <>
                <h5 class="modal-title">{props.element.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </>;
        }
    }

    const body = () => {
        if (Array.isArray(props.element)) {
            return <div class="tab-content">
                {props.element.map((item, idx) => {
                    return <div id={item.id} class={'tab-pane p-3' + !idx ? ' active' : ''}>
                        {item.body}
                    </div>
                })}
            </div>
        } else {
            return props.element.body;
        }
    }


    return <div class="modal fade noselect" id={props.id} tabIndex={-1} role="dialog"
                aria-labelledby="badgeCaseModalLabel">
        <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    {header()}
                </div>
                <div class="modal-body">
                    {body()}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
}
