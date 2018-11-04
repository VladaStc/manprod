/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { ManProdTestModule } from '../../../test.module';
import { StavkeUMagacinuDeleteDialogComponent } from 'app/entities/stavke-u-magacinu/stavke-u-magacinu-delete-dialog.component';
import { StavkeUMagacinuService } from 'app/entities/stavke-u-magacinu/stavke-u-magacinu.service';

describe('Component Tests', () => {
    describe('StavkeUMagacinu Management Delete Component', () => {
        let comp: StavkeUMagacinuDeleteDialogComponent;
        let fixture: ComponentFixture<StavkeUMagacinuDeleteDialogComponent>;
        let service: StavkeUMagacinuService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [ManProdTestModule],
                declarations: [StavkeUMagacinuDeleteDialogComponent]
            })
                .overrideTemplate(StavkeUMagacinuDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(StavkeUMagacinuDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(StavkeUMagacinuService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});
