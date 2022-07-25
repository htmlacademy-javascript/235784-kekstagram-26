const UPLOAD_TO_SERVER = 'https://26.javascript.pages.academy/kekstagram';

const uploadData = (formData, onSuccess, onFail) => {
  fetch(UPLOAD_TO_SERVER, {
    method: 'POST',
    body:formData
  })
    .then((response) => {
      if(response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {uploadData};
