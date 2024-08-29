import { uploadUserDataFailure, uploadUserDataRequest, uploadUserDataSuccess } from "./reducer";

export const uploadUserData = (data) => async (dispatch) => {
  dispatch(uploadUserDataRequest());

  const formData = new FormData();
  formData.append('name', data.personalData.firstName + ' ' + data.personalData.lastName);
  formData.append('email', data.personalData.email);
  formData.append('dob', data.personalData.dob);
  formData.append('education', JSON.stringify(data.education));
  formData.append('experience', JSON.stringify(data.experience));
  formData.append('projects', JSON.stringify(data.projects));
  
  if (data.resume) {
    formData.append('resume', data.resume);
  }

  try {
    const response = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('File upload failed');
    }

    const result = await response.json();
    dispatch(uploadUserDataSuccess(result));
  } catch (error) {
    dispatch(uploadUserDataFailure(error.message));
  }
};
