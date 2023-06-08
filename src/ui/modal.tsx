import React from 'preact/compat';
export interface ModalProps {
    id: string;
    title: string;
    body: React.JSX.Element;
}

export function Modal(props: ModalProps) {
    return <div class="modal fade noselect" id={props.id} tabIndex={-1} role="dialog"
                aria-labelledby="badgeCaseModalLabel">
        <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{props.title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {props.body}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
}
