import dataTypes from '#shared/dataTypes.js';
import weightUtils from '#shared/utils/weight.js';

const { Library } = dataTypes;

const fullUnits: Record<string, string> = {
    oz: 'ounce',
    lb: 'pound',
    g: 'gram',
    kg: 'kilogram',
};

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');

    if (!id) {
        throw createError({ statusCode: 400, message: 'No list specified!' });
    }

    let users;
    try {
        users = await getDb().collection('users').find({ 'library.lists.externalId': id }).toArray();
    } catch {
        throw createError({ statusCode: 500, message: 'An error occurred.' });
    }

    if (!users.length) {
        throw createError({ statusCode: 400, message: 'Invalid list specified.' });
    }

    if (!users[0] || typeof users[0].library === 'undefined') {
        throw createError({ statusCode: 500, message: 'Unknown error.' });
    }

    const library = new Library();
    library.load(users[0].library);

    let list: any = null;
    for (const i in library.lists) {
        if (library.lists[i].externalId && library.lists[i].externalId == id) {
            library.defaultListId = library.lists[i].id;
            list = library.lists[i];
            break;
        }
    }

    if (!list) {
        throw createError({ statusCode: 404, message: 'List not found.' });
    }

    let out = 'Item Name,Category,desc,qty,weight,unit,url,price,worn,consumable\n';

    for (const i in list.categoryIds) {
        const category = library.getCategoryById(list.categoryIds[i]);
        if (category) {
            for (const j in category.categoryItems) {
                const categoryItem = category.categoryItems[j];
                if (categoryItem) {
                    const item = library.getItemById(categoryItem.itemId);
                    const itemRow = [
                        item.name,
                        category.name,
                        item.description,
                        `${categoryItem.qty}`,
                        `${weightUtils.MgToWeight(item.weight, item.authorUnit)}`,
                        fullUnits[item.authorUnit] ?? item.authorUnit,
                        item.url,
                        `${item.price}`,
                        categoryItem.worn ? 'Worn' : '',
                        categoryItem.consumable ? 'Consumable' : '',
                    ];

                    for (let k = 0; k < itemRow.length; k++) {
                        const field = itemRow[k];
                        if (k > 0) out += ',';
                        if (typeof field === 'string' && field.indexOf(',') > -1) {
                            out += `"${field.replace(/"/g, '""')}"`;
                        } else {
                            out += field;
                        }
                    }
                    out += '\n';
                }
            }
        }
    }

    let filename = list.name || id;
    filename = filename.replace(/[^a-z0-9-]/gi, '_');

    setResponseHeader(event, 'Content-Type', 'text/csv');
    setResponseHeader(event, 'Content-Disposition', `attachment;filename=${filename}.csv`);
    return out;
});
