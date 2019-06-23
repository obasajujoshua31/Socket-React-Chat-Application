export default interface Chat {
    userId: string;
    receiverId: string;
}


export interface NewChat {
    senderId: string;
    receiverId: string;
    message: string;
    date?: Date;
    chatId?: string
} 
