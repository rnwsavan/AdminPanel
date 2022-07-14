import { getRequest } from "../request"

export const getdoctorData = () => {
    return getRequest('doctors');
}