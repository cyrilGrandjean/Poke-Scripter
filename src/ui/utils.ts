import {ComponentChild, render} from 'preact';

export function renderAndReplace(vnode: ComponentChild, parent: HTMLElement) {
    render(vnode, parent);
    parent.outerHTML = parent.innerHTML;
}
