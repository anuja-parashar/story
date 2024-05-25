import { TestBed, async, getTestBed, } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';

describe('AppComponent', () => {
  let injector: TestBed;
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    injector = getTestBed();
    service = injector.get(ApiService);
    httpMock = injector.get(HttpTestingController);
    // TestBed.configureTestingModule({
    //   declarations: [
    //     AppComponent
    //   ],
    //   imports: [HttpClientTestingModule],
    //   providers: [ApiService]
    // }).compileComponents();
  }));
  afterEach(() => {
    httpMock.verify();
  });
  describe('#ApiRequests', () => {
    it('Applicants List', () => {
      const applicantList = [];
      service.applicantsList(1).subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicants List Api failed`);
      });

      const req = httpMock.expectOne(`${service.API_URL}/v3/applicants?1`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant Details', () => {
      const applicantList = [];
      service.applicantDetails('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant Details Api failed`);
      });

      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/applicant_details/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant Health Details', () => {
      const applicantList = [];
      service.applicantHealthData('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant Health Details Api failed`);
      });

      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/health_data/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant Decision', () => {
      const applicantList = [];
      service.underwritingDecision('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant Decision Api failed`);
      });

      const req = httpMock.expectOne(`${service.API_URL}/api/underwriting/decision/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant Plan Overview', () => {
      const applicantList = [];
      service.overviewPlanDetails('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant Plan Overview Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/api/underwriting/overview/plan_details/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant Score', () => {
      const applicantList = [];
      service.overviewScore('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant Score  Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/overview/score/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant overview demographics', () => {
      const applicantList = [];
      service.overviewDemographics('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant overview demographics Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/overview/demographics/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant KYC', () => {
      const applicantList = [];
      service.overviewKyc('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant KYC Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/overview/kyc/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant Predective Insights', () => {
      const applicantList = [];
      service.overviewPredectiveInsights('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant Predective Insights Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/overview/predective_insights/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant environmental', () => {
      const applicantList = [];
      service.overviewEnvironmental('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant environmental Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/overview/environmental/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant location risk', () => {
      const applicantList = [];
      service.locationRiskData('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant location risk Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/location_risk_data/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
    it('Applicant financial info', () => {
      const applicantList = [];
      service.overviewFinancialInfo('EA00305486').subscribe((users: any) => {
        // expect(users.results.length).toBeGreaterThan(0);
        // applicantList = users.results
        // expect(users).toEqual(dummyUsers);
      }, err => {
        expect(err).toBe(`Applicant financial info Api failed`);
      });
      const req = httpMock.expectOne(`${service.API_URL}/v3/underwriting/overview/financial_info/EA00305486`);
      expect(req.request.method).toBe("GET");
      req.flush(applicantList);
    });
  });
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'underwritingv3orange'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('underwritingv3orange');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to underwritingv3orange!');
  // });
});
