import { w as weightUtils } from './weight.mjs';

const colorUtils = /* @__PURE__ */ (function() {
  function getColor(index, baseColor) {
    if (baseColor) {
      const hsv = rgbToHsv(baseColor);
      hsv.s -= Math.round(hsv.s / 10 * (index % 10));
      hsv.v += Math.round((100 - hsv.v) / 10 * (index % 10));
      return hsvToRgb(hsv);
    }
    const colors = [
      { r: 27, g: 119, b: 211 },
      { r: 206, g: 24, b: 54 },
      { r: 242, g: 208, b: 0 },
      { r: 122, g: 179, b: 23 },
      { r: 130, g: 33, b: 198 },
      { r: 232, g: 110, b: 28 },
      { r: 220, g: 242, b: 51 },
      { r: 86, g: 174, b: 226 },
      { r: 226, g: 86, b: 174 },
      { r: 226, g: 137, b: 86 },
      { r: 86, g: 226, b: 207 }
    ];
    return colors[index % colors.length];
  }
  function hsvToRgb(hsv) {
    let r = 0;
    let g = 0;
    let b = 0;
    let i;
    let f;
    let p;
    let q;
    let t;
    const h = hsv.h / 360;
    const s = hsv.s / 100;
    const v = hsv.v / 100;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0:
        r = v, g = t, b = p;
        break;
      case 1:
        r = q, g = v, b = p;
        break;
      case 2:
        r = p, g = v, b = t;
        break;
      case 3:
        r = p, g = q, b = v;
        break;
      case 4:
        r = t, g = p, b = v;
        break;
      case 5:
        r = v, g = p, b = q;
        break;
    }
    return {
      r: Math.floor(r * 255),
      g: Math.floor(g * 255),
      b: Math.floor(b * 255)
    };
  }
  function rgbToHsv(rgb) {
    let rr;
    let gg;
    let bb;
    const r = rgb.r / 255;
    const g = rgb.g / 255;
    const b = rgb.b / 255;
    let h = 0;
    let s = 0;
    const v = Math.max(r, g, b);
    const diff = v - Math.min(r, g, b);
    const diffc = function(c) {
      return (v - c) / 6 / diff + 1 / 2;
    };
    if (diff == 0) {
      h = s = 0;
    } else {
      s = diff / v;
      rr = diffc(r);
      gg = diffc(g);
      bb = diffc(b);
      if (r === v) {
        h = bb - gg;
      } else if (g === v) {
        h = 1 / 3 + rr - bb;
      } else if (b === v) {
        h = 2 / 3 + gg - rr;
      }
      if (h < 0) {
        h += 1;
      } else if (h > 1) {
        h -= 1;
      }
    }
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      v: Math.round(v * 100)
    };
  }
  function rgbToString(rgb) {
    return `rgb(${rgb.r},${rgb.g},${rgb.b})`;
  }
  function stringToRgb(rgbString) {
    const trimmed = rgbString.substring(4, rgbString.length - 1);
    const split = trimmed.split(",");
    return {
      r: parseInt(split[0]),
      g: parseInt(split[1]),
      b: parseInt(split[2])
    };
  }
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  function rgbToHex(rgb) {
    return `#${componentToHex(rgb.r)}${componentToHex(rgb.g)}${componentToHex(rgb.b)}`;
  }
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
  }
  return {
    getColor,
    hsvToRgb,
    rgbToHsv,
    rgbToString,
    stringToRgb,
    hexToRgb,
    rgbToHex
  };
})();

const defaultOptionalFields = {
  images: false,
  price: false,
  worn: true,
  consumable: true,
  listDescription: false
};
class Item {
  /**
   * @param {{ id: any, unit?: string }} options
   */
  constructor({ id, unit }) {
    this.id = id;
    this.name = "";
    this.description = "";
    this.weight = 0;
    this.authorUnit = "oz";
    if (unit) {
      this.authorUnit = unit;
    }
    this.price = 0;
    this.image = "";
    this.imageUrl = "";
    this.url = "";
  }
  save() {
    return this;
  }
  /**
   * @param {object} input
   */
  load(input) {
    Object.assign(this, input);
    if (typeof this.price === "string") {
      this.price = parseFloat(this.price);
    }
  }
}
class Category {
  /**
   * @param {{ library: any, id: any, _isNew?: any }} options
   */
  constructor({ library, id, _isNew }) {
    this.library = library;
    this.id = id;
    this.name = "";
    this.categoryItems = [];
    this.subtotalWeight = 0;
    this.subtotalWornWeight = 0;
    this.subtotalConsumableWeight = 0;
    this.subtotalPrice = 0;
    this.subtotalConsumablePrice = 0;
    this.subtotalQty = 0;
    this._isNew = _isNew;
  }
  /**
   * @param {Partial<CategoryItem>} partialCategoryItem
   */
  addItem(partialCategoryItem) {
    const tempCategoryItem = {
      qty: 1,
      worn: 0,
      consumable: false,
      star: 0,
      itemId: null,
      _isNew: false
    };
    Object.assign(tempCategoryItem, partialCategoryItem);
    this.categoryItems.push(tempCategoryItem);
  }
  /**
   * @param {Partial<CategoryItem>} categoryItem
   */
  updateCategoryItem(categoryItem) {
    const oldCategoryItem = this.getCategoryItemById(categoryItem.itemId);
    if (oldCategoryItem) Object.assign(oldCategoryItem, categoryItem);
  }
  /**
   * @param {any} itemId
   */
  removeItem(itemId) {
    const categoryItem = this.getCategoryItemById(itemId);
    const index = this.categoryItems.indexOf(
      /** @type {CategoryItem} */
      categoryItem
    );
    this.categoryItems.splice(index, 1);
  }
  calculateSubtotal() {
    this.subtotalWeight = 0;
    this.subtotalWornWeight = 0;
    this.subtotalConsumableWeight = 0;
    this.subtotalPrice = 0;
    this.subtotalConsumablePrice = 0;
    this.subtotalQty = 0;
    for (const i in this.categoryItems) {
      const categoryItem = this.categoryItems[i];
      const item = this.library.getItemById(categoryItem.itemId);
      if (!item) {
        continue;
      }
      this.subtotalWeight += item.weight * categoryItem.qty;
      this.subtotalPrice += item.price * categoryItem.qty;
      if (this.library.optionalFields.worn && categoryItem.worn) {
        this.subtotalWornWeight += item.weight * (categoryItem.qty > 0 ? 1 : 0);
      }
      if (this.library.optionalFields.consumable && categoryItem.consumable) {
        this.subtotalConsumableWeight += item.weight * categoryItem.qty;
        this.subtotalConsumablePrice += item.price * categoryItem.qty;
      }
      this.subtotalQty += categoryItem.qty;
    }
  }
  /**
   * @param {any} id
   * @returns {CategoryItem | null}
   */
  getCategoryItemById(id) {
    for (const i in this.categoryItems) {
      const categoryItem = this.categoryItems[i];
      if (categoryItem.itemId === id) return categoryItem;
    }
    return null;
  }
  /**
   * @param {any} index
   */
  getExtendedItemByIndex(index) {
    const categoryItem = this.categoryItems[index];
    const item = this.library.getItemById(categoryItem.itemId);
    const extendedItem = Object.assign({}, item);
    Object.assign(extendedItem, categoryItem);
    return extendedItem;
  }
  save() {
    const out = Object.assign({}, this);
    delete out.library;
    delete /** @type {any} */
    out.template;
    delete out._isNew;
    return out;
  }
  /**
   * @param {object} input
   */
  load(input) {
    delete /** @type {any} */
    input._isNew;
    Object.assign(this, input);
    this.categoryItems.forEach((categoryItem, index) => {
      delete categoryItem._isNew;
      if (typeof categoryItem.price !== "undefined") {
        delete categoryItem.price;
      }
      if (!categoryItem.star) {
        categoryItem.star = 0;
      }
      if (!this.library.getItemById(categoryItem.itemId)) {
        this.categoryItems.splice(index, 1);
      }
    });
  }
}
class List {
  /**
   * @param {{ id: any, library: any }} options
   */
  constructor({ id, library }) {
    this.library = library;
    this.id = id;
    this.name = "";
    this.categoryIds = [];
    this.chart = null;
    this.description = "";
    this.externalId = "";
    this.totalWeight = 0;
    this.totalWornWeight = 0;
    this.totalConsumableWeight = 0;
    this.totalBaseWeight = 0;
    this.totalPackWeight = 0;
    this.totalPrice = 0;
    this.totalConsumablePrice = 0;
    this.totalQty = 0;
  }
  /**
   * @param {any} categoryId
   */
  addCategory(categoryId) {
    this.categoryIds.push(categoryId);
  }
  /**
   * @param {any} categoryId
   * @returns {boolean}
   */
  removeCategory(categoryId) {
    const catId = parseInt(categoryId);
    let index = this.categoryIds.indexOf(catId);
    if (index === -1) {
      index = this.categoryIds.indexOf(`${catId}`);
      if (index === -1) {
        console.warn(`Unable to delete category, it does not exist in this list:${catId}`);
        return false;
      }
    }
    this.categoryIds.splice(index, 1);
    return true;
  }
  /**
   * @param {string} type
   * @param {boolean} [linkParent]
   */
  renderChart(type, linkParent = true) {
    const chartData = { points: {}, total: 0 };
    let total = 0;
    for (const i in this.categoryIds) {
      const category = this.library.getCategoryById(this.categoryIds[i]);
      if (category) {
        category.calculateSubtotal();
        if (type === "consumable") {
          total += category.subtotalConsumableWeight;
        } else if (type === "worn") {
          total += category.subtotalWornWeight;
        } else if (type === "base") {
          total += category.subtotalWeight - (category.subtotalConsumableWeight + category.subtotalWornWeight);
        } else {
          total += category.subtotalWeight;
        }
      }
    }
    if (!total) return false;
    const getTooltipText = function(name, valueMg, unit) {
      return `${name}: ${weightUtils.MgToWeight(valueMg, unit)} ${unit}`;
    };
    for (const i in this.categoryIds) {
      const category = this.library.getCategoryById(this.categoryIds[i]);
      if (category) {
        const points = {};
        let categoryTotal;
        if (type === "consumable") {
          categoryTotal = category.subtotalConsumableWeight;
        } else if (type === "worn") {
          categoryTotal = category.subtotalWornWeight;
        } else if (type === "base") {
          categoryTotal = category.subtotalWeight - (category.subtotalConsumableWeight + category.subtotalWornWeight);
        } else {
          categoryTotal = category.subtotalWeight;
        }
        const tempColor = category.color || colorUtils.getColor(+i);
        category.displayColor = colorUtils.rgbToString(tempColor);
        const tempCategory = {};
        for (const j in category.categoryItems) {
          const item = category.getExtendedItemByIndex(j);
          let value = item.weight * item.qty;
          if (!value) value = 0;
          let name = getTooltipText(item.name, value, item.authorUnit);
          const color = colorUtils.getColor(+j, tempColor);
          if (item.qty > 1) name += ` x ${item.qty}`;
          const percent = value / categoryTotal;
          const tempItem = {
            value,
            id: item.id,
            name,
            color,
            percent
          };
          if (linkParent) tempItem.parent = tempCategory;
          points[j] = tempItem;
        }
        const categoryPercent = categoryTotal / total;
        const tempCategoryData = {
          points,
          color: category.color,
          id: category.id,
          name: getTooltipText(category.name, categoryTotal, this.library.totalUnit),
          total: categoryTotal,
          percent: categoryPercent,
          visiblePoints: false
        };
        if (linkParent) tempCategoryData.parent = chartData;
        Object.assign(tempCategory, tempCategoryData);
        chartData.points[i] = tempCategory;
      }
    }
    chartData.total = total;
    return chartData;
  }
  calculateTotals() {
    let totalWeight = 0;
    let totalPrice = 0;
    let totalWornWeight = 0;
    let totalConsumableWeight = 0;
    let totalConsumablePrice = 0;
    let totalBaseWeight = 0;
    let totalPackWeight = 0;
    let totalQty = 0;
    for (const i in this.categoryIds) {
      const category = this.library.getCategoryById(this.categoryIds[i]);
      if (category) {
        category.calculateSubtotal();
        totalWeight += category.subtotalWeight;
        totalWornWeight += category.subtotalWornWeight;
        totalConsumableWeight += category.subtotalConsumableWeight;
        totalPrice += category.subtotalPrice;
        totalConsumablePrice += category.subtotalConsumablePrice;
        totalQty += category.subtotalQty;
      }
    }
    totalBaseWeight = totalWeight - (totalWornWeight + totalConsumableWeight);
    totalPackWeight = totalWeight - totalWornWeight;
    this.totalWeight = totalWeight;
    this.totalWornWeight = totalWornWeight;
    this.totalConsumableWeight = totalConsumableWeight;
    this.totalBaseWeight = totalBaseWeight;
    this.totalPackWeight = totalPackWeight;
    this.totalPrice = totalPrice;
    this.totalConsumablePrice = totalConsumablePrice;
    this.totalQty = totalQty;
  }
  save() {
    const out = Object.assign({}, this);
    delete out.library;
    delete out.chart;
    return out;
  }
  /**
   * @param {object} input
   */
  load(input) {
    Object.assign(this, input);
    this.calculateTotals();
  }
}
class Library {
  constructor() {
    this.version = "0.3";
    this.idMap = {};
    this.items = [];
    this.categories = [];
    this.lists = [];
    this.sequence = 0;
    this.defaultListId = 1;
    this.totalUnit = "oz";
    this.itemUnit = "oz";
    this.showSidebar = true;
    this.showImages = false;
    this.optionalFields = Object.assign({}, defaultOptionalFields);
    this.currencySymbol = "$";
    this.firstRun();
  }
  firstRun() {
    const firstList = this.newList();
    const firstCategory = this.newCategory({ list: firstList });
    this.newItem({ category: firstCategory });
  }
  /**
   * @param {{ category?: any, _isNew?: any }} options
   */
  newItem({ category, _isNew }) {
    const temp = new Item({ id: this.nextSequence(), unit: this.itemUnit });
    this.items.push(temp);
    this.idMap[temp.id] = temp;
    if (category) {
      category.addItem({ itemId: temp.id, _isNew });
    }
    return temp;
  }
  /**
   * @param {any} item
   */
  updateItem(item) {
    const oldItem = this.getItemById(item.id);
    Object.assign(oldItem, item);
    return oldItem;
  }
  /**
   * @param {any} id
   */
  removeItem(id) {
    const item = this.getItemById(id);
    for (const i in this.lists) {
      const category = this.findCategoryWithItemById(id, this.lists[i].id);
      if (category) {
        category.removeItem(id);
      }
    }
    this.items.splice(this.items.indexOf(item), 1);
    delete this.idMap[id];
    return true;
  }
  /**
   * @param {{ list?: any, _isNew?: any }} options
   */
  newCategory({ list, _isNew }) {
    const temp = new Category({ id: this.nextSequence(), _isNew, library: this });
    this.categories.push(temp);
    this.idMap[temp.id] = temp;
    if (list) {
      list.addCategory(temp.id);
    }
    return temp;
  }
  /**
   * @param {any} id
   * @param {any} [force]
   */
  removeCategory(id, force) {
    const category = this.getCategoryById(id);
    const list = this.findListWithCategoryById(id);
    if (list && list.categoryIds.length === 1 && !force) {
      alert("Can't remove the last category in a list!");
      return false;
    }
    if (list) {
      list.removeCategory(id);
    }
    this.categories.splice(this.categories.indexOf(category), 1);
    delete this.idMap[id];
    return true;
  }
  newList() {
    const temp = new List({ id: this.nextSequence(), library: this });
    this.lists.push(temp);
    this.idMap[temp.id] = temp;
    if (!this.defaultListId) this.defaultListId = temp.id;
    return temp;
  }
  /**
   * @param {any} id
   */
  removeList(id) {
    if (this.lists.length === 1) return;
    const list = this.getListById(id);
    for (let i = 0; i < list.categoryIds.length; i++) {
      this.removeCategory(list.categoryIds[i], true);
    }
    this.lists.splice(this.lists.indexOf(list), 1);
    delete this.idMap[id];
    if (this.defaultListId === id) {
      this.defaultListId = this.lists.length > 0 ? this.lists[0].id : -1;
    }
  }
  /**
   * @param {any} id
   */
  copyList(id) {
    const oldList = this.getListById(id);
    if (!oldList) return void 0;
    const copiedList = this.newList();
    copiedList.name = `Copy of ${oldList.name}`;
    for (const i in oldList.categoryIds) {
      const oldCategory = this.getCategoryById(oldList.categoryIds[i]);
      const copiedCategory = this.newCategory({ list: copiedList });
      copiedCategory.name = oldCategory.name;
      for (const j in oldCategory.categoryItems) {
        copiedCategory.addItem(oldCategory.categoryItems[j]);
      }
    }
    return copiedList;
  }
  /**
   * @param {string} type
   */
  renderChart(type) {
    return this.getListById(this.defaultListId).renderChart(type);
  }
  /**
   * @param {any} id
   */
  getCategoryById(id) {
    return this.idMap[id];
  }
  /**
   * @param {any} id
   */
  getItemById(id) {
    return this.idMap[id];
  }
  /**
   * @param {any} id
   */
  getListById(id) {
    return this.idMap[id];
  }
  getItemsInCurrentList() {
    const out = [];
    const list = this.getListById(this.defaultListId);
    for (let i = 0; i < list.categoryIds.length; i++) {
      const category = this.getCategoryById(list.categoryIds[i]);
      if (category) {
        for (const j in category.categoryItems) {
          const categoryItem = category.categoryItems[j];
          out.push(categoryItem.itemId);
        }
      }
    }
    return out;
  }
  /**
   * @param {any} itemId
   * @param {any} [listId]
   */
  findCategoryWithItemById(itemId, listId) {
    if (listId) {
      const list = this.getListById(listId);
      for (const i in list.categoryIds) {
        const category = this.getCategoryById(list.categoryIds[i]);
        if (category) {
          for (const j in category.categoryItems) {
            const categoryItem = category.categoryItems[j];
            if (categoryItem.itemId === itemId) return category;
          }
        }
      }
    } else {
      for (const i in this.categories) {
        const category = this.categories[i];
        if (category) {
          for (const j in category.categoryItems) {
            const categoryItem = category.categoryItems[j];
            if (categoryItem.itemId === itemId) return category;
          }
        }
      }
    }
    return void 0;
  }
  /**
   * @param {any} id
   */
  findListWithCategoryById(id) {
    for (const i in this.lists) {
      const list = this.lists[i];
      for (const j in list.categoryIds) {
        if (list.categoryIds[j] === id) return list;
      }
    }
    return void 0;
  }
  nextSequence() {
    return ++this.sequence;
  }
  save() {
    const out = {};
    out.version = this.version;
    out.totalUnit = this.totalUnit;
    out.itemUnit = this.itemUnit;
    out.defaultListId = this.defaultListId;
    out.sequence = this.sequence;
    out.showSidebar = this.showSidebar;
    out.optionalFields = this.optionalFields;
    out.currencySymbol = this.currencySymbol;
    out.items = [];
    for (const i in this.items) {
      out.items.push(this.items[i].save());
    }
    out.categories = [];
    for (const i in this.categories) {
      out.categories.push(this.categories[i].save());
    }
    out.lists = [];
    for (const i in this.lists) {
      out.lists.push(this.lists[i].save());
    }
    return out;
  }
  /**
   * @param {any} serializedLibrary
   */
  load(serializedLibrary) {
    if (serializedLibrary.version === "0.1" || !serializedLibrary.version) {
      this.upgrade01to02(serializedLibrary);
    }
    if (serializedLibrary.version === "0.2") {
      this.upgrade02to03(serializedLibrary);
    }
    this.items = [];
    Object.assign(this.optionalFields, serializedLibrary.optionalFields);
    for (const i in serializedLibrary.items) {
      const temp = new Item({ id: serializedLibrary.items[i].id });
      temp.load(serializedLibrary.items[i]);
      this.items.push(temp);
      this.idMap[temp.id] = temp;
    }
    this.categories = [];
    for (const i in serializedLibrary.categories) {
      const temp = new Category({ id: serializedLibrary.categories[i].id, library: this });
      temp.load(serializedLibrary.categories[i]);
      this.categories.push(temp);
      this.idMap[temp.id] = temp;
    }
    this.lists = [];
    for (const i in serializedLibrary.lists) {
      const temp = new List({ id: serializedLibrary.lists[i].id, library: this });
      temp.load(serializedLibrary.lists[i]);
      this.lists.push(temp);
      this.idMap[temp.id] = temp;
    }
    if (serializedLibrary.showSidebar) this.showSidebar = serializedLibrary.showSidebar;
    if (serializedLibrary.totalUnit) this.totalUnit = serializedLibrary.totalUnit;
    if (serializedLibrary.itemUnit) this.itemUnit = serializedLibrary.itemUnit;
    if (serializedLibrary.currencySymbol) this.currencySymbol = serializedLibrary.currencySymbol;
    this.version = serializedLibrary.version;
    this.sequence = serializedLibrary.sequence;
    this.defaultListId = serializedLibrary.defaultListId;
  }
  /**
   * @param {any} serializedLibrary
   */
  upgrade01to02(serializedLibrary) {
    if (!serializedLibrary.optionalFields) {
      serializedLibrary.optionalFields = Object.assign({}, defaultOptionalFields);
    }
    if (serializedLibrary.showImages) {
      serializedLibrary.optionalFields.images = true;
    } else {
      serializedLibrary.optionalFields.images = false;
    }
    serializedLibrary.version = "0.2";
  }
  /**
   * @param {any} serializedLibrary
   */
  upgrade02to03(serializedLibrary) {
    this.sequenceShouldBeCorrect(serializedLibrary);
    this.idsShouldBeInts(serializedLibrary);
    this.renameCategoryIds(serializedLibrary);
    this.fixDuplicateIds(serializedLibrary);
    serializedLibrary.version = "0.3";
  }
  /**
   * @param {any} serializedLibrary
   */
  sequenceShouldBeCorrect(serializedLibrary) {
    let sequence = 0;
    for (const list of serializedLibrary.lists) {
      if (list.id > sequence) {
        sequence = list.id;
      }
    }
    for (const category of serializedLibrary.categories) {
      if (category.id > sequence) {
        sequence = category.id;
      }
    }
    for (const item of serializedLibrary.items) {
      if (item.id > sequence) {
        sequence = item.id;
      }
    }
    serializedLibrary.sequence = sequence + 1;
  }
  /**
   * @param {any} serializedLibrary
   */
  idsShouldBeInts(serializedLibrary) {
    for (const list of serializedLibrary.lists) {
      list.categoryIds = list.categoryIds.map((categoryId) => parseInt(categoryId, 10));
    }
  }
  /**
   * @param {any} serializedLibrary
   */
  renameCategoryIds(serializedLibrary) {
    for (const category of serializedLibrary.categories) {
      if (typeof category.itemIds !== "undefined") {
        if (!category.categoryItems || category.categoryItems.length === 0) {
          category.categoryItems = category.itemIds;
          delete category.itemIds;
        } else {
          delete category.itemIds;
        }
      }
      if (typeof category.categoryItems === "undefined") {
        category.categoryItems = [];
      }
    }
  }
  /**
   * @param {any} serializedLibrary
   */
  fixDuplicateIds(serializedLibrary) {
    const foundIds = {};
    for (const item of serializedLibrary.items) {
      if (!foundIds[item.id]) {
        foundIds[item.id] = [];
      }
      foundIds[item.id].push({ type: "item", item });
    }
    for (const category of serializedLibrary.categories) {
      if (!foundIds[category.id]) {
        foundIds[category.id] = [];
      }
      foundIds[category.id].push({ type: "category", category });
    }
    for (const list of serializedLibrary.lists) {
      if (!foundIds[list.id]) {
        foundIds[list.id] = [];
      }
      foundIds[list.id].push({ type: "list", list });
    }
    for (const id in foundIds) {
      if (foundIds[id].length > 1) {
        const duplicateSet = foundIds[id];
        duplicateSet.forEach((duplicate, index) => {
          if (index === 0) {
            return;
          }
          if (duplicate.type === "item") {
            this.updateItemId(serializedLibrary, duplicate.item, ++serializedLibrary.sequence);
          } else if (duplicate.type === "category") {
            this.updateCategoryId(serializedLibrary, duplicate.category, ++serializedLibrary.sequence);
          } else if (duplicate.type === "list") {
            this.updateListId(serializedLibrary, duplicate.list, ++serializedLibrary.sequence);
          }
        });
      }
    }
  }
  /**
   * @param {any} serializedLibrary
   * @param {any} list
   * @param {any} newId
   */
  updateListId(serializedLibrary, list, newId) {
    list.id = newId;
  }
  /**
   * @param {any} serializedLibrary
   * @param {any} category
   * @param {any} newId
   */
  updateCategoryId(serializedLibrary, category, newId) {
    const oldId = category.id;
    category.id = newId;
    for (const list of serializedLibrary.lists) {
      list.categoryIds.forEach((categoryId, index) => {
        if (categoryId === oldId) {
          list.categoryIds[index] = newId;
        }
      });
    }
  }
  /**
   * @param {any} serializedLibrary
   * @param {any} item
   * @param {any} newId
   */
  updateItemId(serializedLibrary, item, newId) {
    const oldId = item.id;
    item.id = newId;
    for (const category of serializedLibrary.categories) {
      for (const categoryItem of category.categoryItems) {
        if (categoryItem.itemId === oldId) {
          categoryItem.itemId = newId;
        }
      }
    }
  }
}
const dataTypes = {
  Library};

export { colorUtils as c, dataTypes as d };
//# sourceMappingURL=dataTypes.mjs.map
