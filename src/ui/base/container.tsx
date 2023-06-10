import React from 'preact/compat';


export interface ContainerProps {
    id: string;
    title: string;
    visible: boolean;
    body: React.JSX.Element
}

export function Container(props: ContainerProps) {
    return <div id={props.id + "Container"} class="card sortable border-secondary mb-3"
                data-bind={"visible: " + props.visible}>
        <div class="card-header p-0" data-toggle="collapse" href={"#" + props.id + "Body"}>
            <span>{props.title}</span>
        </div>
        <div id={props.id + "Body"} class="card-body p-0 show table-responsive">
            {props.body}
        </div>
    </div>
}
