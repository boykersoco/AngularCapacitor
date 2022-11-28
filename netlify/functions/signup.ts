import { Handler, HandlerEvent } from "@netlify/functions";
import Airtable from 'airtable';
const { AIRTABLE_KEY } = process.env;
const base = new Airtable({ apiKey: 'keygfddRay1Z4a79E' }).base('app4ndiY5o08WORNM');//API Key

const handler: Handler = async (event, context) => {
    try
    {
        const data = JSON.parse(event.body || '');
        if (!data.email)
        {
            return {
                statusCode: 400,
                body: 'Please Include Email.',
              };
        }

        await base('tblanz89qDSkjU7o7').create(
            {
                Email: data.email,
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify({message: 'Thanks'}),
        };
        
    }

    catch (e: any)
    {
        return {
            statusCode: 200,
            body: 'test'
          };
    }
};

export { handler };