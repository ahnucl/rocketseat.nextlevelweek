import { Request, Response } from 'express';
import knex from '../database/conection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
        
        const serializedItems = items.map( item => ({
            id: item.id,
            image: `http://localhost:3333/uploads/${item.image}`,
            title: item.title,
        }));
    
        return response.json(serializedItems);
    }
    
}

export default ItemsController;