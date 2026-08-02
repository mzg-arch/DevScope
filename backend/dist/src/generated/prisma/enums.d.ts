export declare const AnalysisStatus: {
    readonly PENDING: "PENDING";
    readonly RUNNING: "RUNNING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type AnalysisStatus = (typeof AnalysisStatus)[keyof typeof AnalysisStatus];
