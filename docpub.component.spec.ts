import {
    async,
    TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { DocpubComponent, DocpubModule } from './index';
import { PubSubServiceContract, Title } from 'microui-contracts';
import { PubSubService } from 'microui-contracts/mocks';
@Component({
    selector: 'as-test',
    template: '<as-docpub></as-docpub>'
})
class TestComponent {
}

let docpubCompiled;
let docpubCmp: DocpubComponent;

describe('DocpubComponent', () => {
    let pubsub: PubSubServiceContract;
    beforeEach(() => {
        pubsub = new PubSubService();
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [DocpubModule],
            providers: [
                {
                    provide: Title,
                    useValue: 'This title was injected!'
                },
                {
                    provide: PubSubServiceContract,
                    // You want to map to an "Instance" value rather than a class, 
                    // since the state needs to be shared between host and the micro ui  
                    useValue: pubsub
                }]
        });
    });

    /*it('Testing Expiration Date', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(DocpubComponent);
            fixture.detectChanges();

            docpubCompiled = fixture.nativeElement;
            docpubCmp = fixture.debugElement.children[0].componentInstance;
            let item = docpubCompiled.querySelectorAll('#expDate')[0];
            console.log(item.getAttribute('ng-reflect-model'));
            expect(item.getAttribute('ng-reflect-model')).toBeTruthy('ngOnInit()');
        });
    }));*/

    it('Testing Exceeding length', async(() => {
        TestBed.compileComponents().then(() => {
            let fixture = TestBed.createComponent(DocpubComponent);
            fixture.detectChanges();
            fixture.componentInstance.displayName = 'Name Changed';
            fixture.detectChanges();
            docpubCompiled = fixture.nativeElement;
            let displayModelName = docpubCompiled.querySelectorAll('#display')[0].getAttribute('ng-reflect-model');
            console.log(displayModelName);
            expect(displayModelName.length).toBeLessThan(40);
        });
    }));
});
