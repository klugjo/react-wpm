export interface IAction {
    type: string;
    payload?: any;
}

export interface IAppState {
    quotes?: string[];
    error?: string;
}