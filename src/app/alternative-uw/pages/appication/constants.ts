// constants.ts
export interface createVariables {
    status: string;
    plan_name: string;
    newData:any;
    isButtonDisabled: boolean;
    isGoButtonDisabled: boolean;
    applicant_list:any;
    totalCounts: {
      total: number,
      totalAccept: number,
      totalCancel: number,
      totalReject: number,
      totalRefer: number,
      totalSTPPass: number,
      totalPending: number,
      totalSTPFail: number,
    };
  }
  
  export const Variables: createVariables = {
    status: '',
    plan_name: '',
    newData: [],
    isButtonDisabled : true,
    isGoButtonDisabled : true,
    totalCounts: {
      total: 0,
      totalAccept: 0,
      totalCancel: 0,
      totalReject: 0,
      totalRefer: 0,
      totalSTPPass: 0,
      totalPending: 0,
      totalSTPFail: 0,
    },
    applicant_list :[]
  };
  