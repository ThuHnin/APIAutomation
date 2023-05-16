import { TOKEN } from "./key";

export const msgHeader = {
    'Authorization': `Bearer ` + TOKEN,
    'Content-Type': 'application/json',
    'Transfer-Encoding':'chunked',
    'Accept-Encoding':'gzip, deflate, br',
    'Connection': 'keep-alive'
}