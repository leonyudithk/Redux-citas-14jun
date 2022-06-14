import { typesAgendar } from "../types/types"


export const actionAddAgendaSync = (formValue) =>{
    return {
        type: typesAgendar.add,
        payload: formValue
    }

}