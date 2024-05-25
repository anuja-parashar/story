
                <div *ngIf='false'>
                    <div class="form-row overview-header">
                        <div class="col-sm-12">
                            <div class="card mb-3">
                                <div class="card-body applicant-details no-shadow"
                                    [ngClass]='{"border-1 border-success":ruleExtended == i}'>
                                    <div class="form-row pointer align-items-center" (click)='ruleExtended = i'>
                                        <div class="col-9 ">
                                            <h5 class="app-det-headline decisionSummaryHeader">
                                                {{ruledeci.rule.name}}
                                                <small *ngIf='ruledeci.action'>( {{ruledeci.action}} )</small>
                                            </h5>
                                            <p class="mb-0">{{ruledeci.action_message}} 

                                                <span class="ml-2" *ngIf="ruledeci.status">{{ruledeci.status}}</span>
                                            </p>
                                        </div>
                                        <div class="col-3 text-right">
                                            <i class="fa  m-0"
                                                [ngClass]='{"fa-chevron-down":ruleExtended != i,"fa-chevron-up":ruleExtended == i}'></i>
                                        </div>
                                    </div>
                                    <div class="overview-header my-3" *ngIf='ruleExtended == i'>
                                        <div class="over-text">
                                            <div class="over-title">
                                                rule_id :
                                            </div>
                                            <span>
                                                {{ruledeci.rule_id || '-'}}
                                            </span>
                                        </div>
                                        <div class="over-text">
                                            <div class="over-title">
                                                name :
                                            </div>
                                            <span>
                                                {{ruledeci.rule.name || '-'}}
                                            </span>
                                        </div>
                                        <div class="over-text">
                                            <div class="over-title">
                                                Action Decision :
                                            </div>
                                            <span>
                                                {{ruledeci.action_decision || '-'}}
                                            </span>
                                        </div>
                                        <!-- <div class="over-text">
                                            <div class="over-title">
                                                category :
                                            </div>
                                            <span>
                                                {{ruledeci.rule.category}}
                                            </span>
                                        </div>
                                        <div class="over-text">
                                            <div class="over-title">
                                                sub category :
                                            </div>
                                            <span>
                                                {{ruledeci.rule.subcategory}}
                                            </span>
                                        </div>
                                        <div class="over-text">
                                            <div class="over-title">
                                                benefit :
                                            </div>
                                            <span>
                                                {{ruledeci.rule.benefit}}
                                            </span>
                                        </div> -->
                                        <div class="over-text">
                                            <div class="over-title">
                                                Loading :
                                            </div>
                                            <span>
                                                {{ruledeci.emr}}
                                            </span>
                                        </div>
                                        <!-- <div class="over-text">
                                            <div class="over-title">
                                                status :
                                            </div>
                                            <span>
                                                {{ruledeci.status}}
                                            </span>
                                        </div>
                                        <div class="over-text">
                                            <div class="over-title">
                                                version :
                                            </div>
                                            <span>
                                                {{ruledeci.rule.version}}
                                            </span>
                                        </div> -->
                                    </div>
                                    <div *ngIf='ruleExtended == i'>
                                        <div class="form-row">
                                            <div class="col-9 mb-3">
                                                <h4 class="app-det-headline decisionSummaryHeader">
                                                    Added Subrules
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between">
                                            <!-- <div class="input-group">
                                                                                                            <div class="form-group mr-2 mb-0">
                                                                                                                <input type="text" class="form-control" placeholder="Search Subrule Name">
                                                                                                            </div>
                                                                                                        </div> -->
                                            <!-- <div class="d-flex align-items-center">
                                                                                                            <button
                                                                                                                class="btn-block d-flex align-items-center white-space-nowrap btn card-btn-1 btn-info btn-sm mr-2 px-3 py-2">
                                                                                                                <i class="asp-add-circle mr-1 text-light font-sm"></i>
                                                                                                                Create SubRule
                                                                                                            </button>
                                                                                                        </div> -->
                                        </div>
                                        <div class="divContainer mt-2"
                                            *ngIf='ruledeci.subruledecision && ruledeci.subruledecision.length > 0'>
                                            <div class="item ">
                                                <div class="itemFlag align-middle pl-2 py-2">Sub Rule ID.</div>
                                                <div class="itemHeader align-middle py-2">Subrule Name</div>
                                                <div class="itemHeader align-middle py-2">Version</div>
                                                <div class="itemHeader align-middle py-2">Category</div>
                                                <!-- <div class="itemHeader align-middle py-2">Description</div> -->
                                                <div class="itemHeader align-middle py-2">Sub category</div>
                                                <!-- <div class="itemHeader align-middle py-2">Creation Date</div> -->
                                                <div class="itemHeader align-middle py-2">Action</div>
                                                <!-- <div class="itemHeader align-middle py-2">Status</div> -->
                                                <div class="itemHeader align-middle py-2">Loading</div>
                                                <div class="itemHeader align-middle py-2">Test</div>
                                            </div>
                                            <div class="item table-row-hover"
                                                *ngFor='let subruleItem of ruledeci.subruledecision;let j = index'>
                                                <div class="itemHeader align-middle py-2 pl-2">
                                                    <h5 class="mb-0">{{subruleItem.subrule.id}}</h5>
                                                </div>
                                                <!-- <div class="itemHeader align-middle py-2 pl-2">
                                                    <h5 class="mb-0">{{j + 1}}</h5>
                                                </div> -->
                                                <div class="itemBody align-middle py-2 sorting_1">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.subrule.name}}
                                                        </span>
                                                    </h5>
                                                </div>

                                                <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.subrule.version}}
                                                        </span>
                                                    </h5>
                                                </div>
                                                <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.subrule.category}}
                                                        </span>
                                                    </h5>
                                                </div>
                                                <!-- <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.subrule.description}}
                                                        </span>
                                                    </h5>
                                                </div> -->
                                                <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.subrule.subcategory}}
                                                        </span>
                                                    </h5>
                                                </div>
                                                <!-- <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.subrule.create_date |date:"mediumDate"}}
                                                        </span>
                                                    </h5>
                                                </div> -->
                                                <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.action || "-"}}
                                                        </span>
                                                    </h5>
                                                </div>
                                                <!-- <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.status || "-"}}
                                                        </span>
                                                    </h5>
                                                </div> -->
                                                <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.emr || "-"}}
                                                        </span>
                                                    </h5>
                                                </div>
                                                <div class="itemHeader align-middle py-2">
                                                    <h5 class="mb-0">
                                                        <span>
                                                            {{subruleItem.requirements || "-"}}
                                                        </span>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
