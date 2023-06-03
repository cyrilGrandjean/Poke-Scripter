import {el} from 'redom';

export class PokeScripterModal {
    private ModalSettingId = 'pokeScripterModal'

    private addSettingToMenu() {
        const aMenu = el('a', 'Poke-Scripter');
        aMenu.href = '#' + this.ModalSettingId;
        aMenu.className = 'dropdown-item';
        aMenu.setAttribute('data-toggle', 'modal');
        const liMenu = el('li', aMenu);
        document.querySelector('#startMenu ul').appendChild(liMenu);
    }

    public addPokeScripterModal() {
        this.addSettingToMenu();
        document.body.appendChild(this.createModal());
    }

    private createModal() {
        const divModalContent = el('div');
        divModalContent.className = 'modal-content';
        divModalContent.appendChild(this.createModalHeader());
        divModalContent.appendChild(this.createModalBody());
        divModalContent.appendChild(this.createModalFooter());
        const divModalDialog = el('div', divModalContent);
        divModalDialog.className = 'modal-dialog modal-dialog-scrollable modal-lg';
        divModalDialog.setAttribute('role', 'document');
        const divModal = el('div', divModalDialog);
        divModal.className = 'modal fade';
        divModal.id = this.ModalSettingId;
        divModal.tabIndex = -1;
        divModal.setAttribute('role', 'dialog');
        divModal.setAttribute('aria-labelledby', 'logBookModalLabel');
        divModal.setAttribute('aria-hidden', 'true');
        return divModal;
    }

    private createModalHeader() {
        const titleModal = el('h5', 'Poke-Scripter Settings');
        titleModal.className = 'modal-title';
        const spanCloseButton = el('span', 'x')
        spanCloseButton.setAttribute('aria-hidden', 'true');
        const closeButton = el('button', spanCloseButton);
        closeButton.type = 'button';
        closeButton.className = 'close';
        closeButton.setAttribute('data-dismiss', 'modal');
        closeButton.setAttribute('aria-lavel', 'Close');
        const div = el('div');
        div.appendChild(titleModal);
        div.appendChild(closeButton);
        div.className = 'modal-header';
        return div
    }

    private createModalBody() {
        const div = el('div');
        div.className = 'modal-body';
        return div
    }

    private createModalFooter() {
        const button = el('button', 'Close');
        button.type = 'button';
        button.className = 'btn btn-primary';
        button.setAttribute('data-dismiss', 'modal');
        const div = el('div', button);
        div.className = 'modal-footer';
        return div;
    }
}
