export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  return new Response('Hello from GET', { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
   }); 
}