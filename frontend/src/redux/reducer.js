
const USERDATA_UPDATE = 'USERDATA_UPDATE';
const USERDATA_UPLOAD_REQUEST = 'USERDATA_UPLOAD_REQUEST';
const USERDATA_UPLOAD_SUCCESS = 'USERDATA_UPLOAD_SUCCESS';
const USERDATA_UPLOAD_FAILURE = 'USERDATA_UPLOAD_FAILURE';

const initialState = {
  userData: {
    personalData:{firstName: '',
      lastName: '',
      email: '',
      dob: '',},
    education: [],
    experience: [],
    projects: [],
    resume: null,
    consent: false,
  },
  loading: false,
  error: null,
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERDATA_UPDATE:
      return { ...state, userData: { ...state.userData, ...action.payload } };
    case USERDATA_UPLOAD_REQUEST:
      return { ...state, loading: true, error: null };
    case USERDATA_UPLOAD_SUCCESS:
      return { ...state, loading: false, error: null };
    case USERDATA_UPLOAD_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export const updateUserData = (data) => ({
  type: USERDATA_UPDATE,
  payload: data,
});

export const uploadUserDataRequest = () => ({
  type: USERDATA_UPLOAD_REQUEST,
});

export const uploadUserDataSuccess = (data) => ({
  type: USERDATA_UPLOAD_SUCCESS,
  payload: data,
});

export const uploadUserDataFailure = (error) => ({
  type: USERDATA_UPLOAD_FAILURE,
  payload: error,
});
