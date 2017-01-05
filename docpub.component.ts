import { Component, Inject } from '@angular/core';
import { Title, PubSubServiceContract } from 'microui-contracts';

@Component({
    moduleId: module.id,
    selector: 'as-docpub',
    template: require('./docpub.component.html')
})
export class DocpubComponent {
    public selectedPlanName: string;
    constructor(private pubsub: PubSubServiceContract, @Inject(Title) public title: string) {
        this.selectedPlanName = 'Select';
    }
}
