const ERROR_CODE = {
  UNKNOWN_SYSTEM_ERROR: 'UNKNOWN_SYSTEM_ERROR',
  PA_NO_START: 'ERR_PA_NO_START',
  PA_NO_OFFSET: 'ERR_PA_NO_OFFSET',
  PA_NO_COUNT: 'ERR_PA_NO_COUNT',
  PA_NO_CATEGORY: 'ERR_PA_NO_CATEGORY',
  PA_MONTH_FORMAT: 'ERR_PA_MONTH_FORMAT',
  PA_NO_KEY_WORD: 'ERR_PA_NO_KEY_WORD',
  PA_KEY_WORD_EMPTY: 'ERR_PA_KEY_WORD_EMPTY',
  PA_NO_CONTENT: 'ERR_PA_NO_CONTENT',
  PA_NOT_OBJECT: 'ERR_PA_NOT_OBJECT',
  PA_NO_YEAR: 'ERR_PA_NO_YEAR',
  PA_NO_MONTH: 'ERR_PA_NO_MONTH',
  PA_NO_DAY: 'ERR_PA_NO_DAY',
  PA_NO_TITLE: 'ERR_PA_NO_TITLE',
  PA_FORMAT_NOT_MATCH: 'ERR_PA_FORMAT_NOT_MATCH',
  PA_NO_ID: 'ERR_PA_NO_ID',
  DB_UPDATE_NOTEPAD_FAILED: 'ERR_UPDATE_NOTEPAD_FAILED'
}

exports.ERROR_CODE = ERROR_CODE;

exports.buildSuccessRes = function (body) {
  return {
    isSuccess: true,
    data: body
  };
}

exports.buildFailedRes = function (errorCode, errorMsg = '') {
  return errorMsg === '' ? {
    isSuccess: false,
    errorCode: errorCode || ERROR_CODE.UNKNOWN_SYSTEM_ERROR
  } : {
      isSuccess: false,
      errorCode: errorCode || ERROR_CODE.UNKNOWN_SYSTEM_ERROR,
      errorMsg: errorMsg
    }
}