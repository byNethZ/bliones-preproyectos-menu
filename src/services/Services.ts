import { DataForm } from "../model/item.interface";

export const sendForm = async (data: DataForm) =>{
    try {
        const response = await fetch(``, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return new Error('Something goes wrong')
        
    }
}