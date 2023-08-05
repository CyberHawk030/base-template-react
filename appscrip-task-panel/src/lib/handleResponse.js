const handleResponse = (responseData, type) => {
  try {
    if(type === 'success' && responseData?.data) {
      return responseData.data
    } else if (type === 'error' && responseData?.response && responseData.response.data){
        return responseData.response.data
    } else {
        return { success: false, message: 'Something went wrong' }
    }

  } catch (error) {
    return {success: false, message: 'Something went wrong'}
  }
}

export default handleResponse