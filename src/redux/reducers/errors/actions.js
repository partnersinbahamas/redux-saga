export const ERRORS_POPULAR = 'ERRORS_POPULAR';
export const ERRORS_LATEST = 'ERRORS_LATEST';

export const popularErrorsAction = (payload) => ({type: ERRORS_POPULAR, payload});
export const latestErrorsAction = (payload) => ({type: ERRORS_LATEST, payload});