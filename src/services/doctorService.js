import axios from "../axios"

export const getTopDoctorsService = (limit) => {
    return axios.get(`/doctor/top-doctor-home?limit=${limit}`)
}

export const getAllDoctorsService = () => {
    return axios.get('/doctor/get-all-doctor')
}

export const saveDetailDoctorService = (data) => {
    return axios.post('/doctor/save-detail-doctor', data)
}

export const getInfoDoctorByIdService = (inputId) => {
    return axios.get(`/doctor/get-info-doctor-by-id?id=${inputId}`)
}