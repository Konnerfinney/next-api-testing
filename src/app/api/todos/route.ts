import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos/";
const API_KEY: string = process.env.DATA_API_KEY as string;

export async function GET() {
    
    const response = await fetch(DATA_SOURCE_URL);
    const todos: Todo[] = await response.json();
    return NextResponse.json(todos);
    }

export async function DELETE(request: Request){

    const { id }: Partial<Todo> = await request.json();

    if (!id) return NextResponse.json({ 'message': 'id is required' });

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-KEY': API_KEY
        }

    });
    

    return NextResponse.json({"message":`Todo ${id} deleted`});
}
    