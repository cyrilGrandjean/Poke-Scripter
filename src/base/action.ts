export abstract class Action {
    enabled = ko.observable(false);

    protected constructor() {
        this.enabled.subscribe((value) => {
            value ? this.start() : this.stop();
        });
    }

    protected abstract start(): void;

    protected abstract stop(): void;
}
