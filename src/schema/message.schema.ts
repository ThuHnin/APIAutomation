import{string, number} from 'zod'

export const messageResponseSchema = {
    session_id : string({
        required_error: "session id is required."
    }),
    message : string ({
        required_error: "Message is required."
    }),
    assistant_id: string ({
        required_error: "assistant id is required."
    })
}