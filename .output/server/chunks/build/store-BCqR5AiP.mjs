import { defineStore } from 'pinia';
import { w as weightUtils } from '../_/weight.mjs';
import { d as dataTypes } from '../_/dataTypes.mjs';
import { f as fetchJson } from './utils-j_mMODQ8.mjs';
import { n as navigateTo } from './server.mjs';

const Library = dataTypes.Library;
const useLighterpackStore = defineStore("lighterpack", {
  state: () => ({
    library: false,
    isSaving: false,
    syncToken: false,
    saveType: null,
    lastSaveData: null,
    loggedIn: false,
    directiveInstances: {},
    globalAlerts: [],
    activeModal: null,
    speedbump: null,
    importCSVTrigger: 0,
    activeItemDialog: null
  }),
  getters: {
    activeList(state) {
      return state.library ? state.library.getListById(state.library.defaultListId) : null;
    }
  },
  actions: {
    setSaveType(saveType) {
      this.saveType = saveType;
    },
    setSyncToken(syncToken) {
      this.syncToken = syncToken;
    },
    setLastSaveData(lastSaveData) {
      this.lastSaveData = lastSaveData;
    },
    setIsSaving(isSaving) {
      this.isSaving = isSaving;
    },
    signout() {
      fetch("/api/auth/signout", { method: "POST", credentials: "same-origin" }).catch(() => {
      });
      this.library = false;
      this.loggedIn = false;
    },
    setLoggedIn(loggedIn) {
      this.loggedIn = loggedIn;
    },
    loadLibraryData(libraryData) {
      const library = new Library();
      try {
        const parsed = JSON.parse(libraryData);
        library.load(parsed);
        this.library = library;
      } catch (_err) {
        this.globalAlerts.push({ message: "An error occurred while loading your data." });
      }
      this.lastSaveData = JSON.stringify(library.save());
    },
    clearLibraryData() {
      this.library = false;
    },
    toggleSidebar() {
      this.library.showSidebar = !this.library.showSidebar;
    },
    setDefaultList(list) {
      this.library.defaultListId = list.id;
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    setTotalUnit(unit) {
      this.library.totalUnit = unit;
    },
    toggleOptionalField(optionalField) {
      this.library.optionalFields[optionalField] = !this.library.optionalFields[optionalField];
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    updateCurrencySymbol(currencySymbol) {
      this.library.currencySymbol = currencySymbol;
    },
    newItem({ category, _isNew }) {
      this.library.newItem({ category, _isNew });
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    newCategory(list) {
      const category = this.library.newCategory({ list, _isNew: true });
      this.library.newItem({ category });
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    newList() {
      const list = this.library.newList();
      const category = this.library.newCategory({ list });
      this.library.newItem({ category });
      list.calculateTotals();
      this.library.defaultListId = list.id;
    },
    removeItem(item) {
      this.library.removeItem(item.id);
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    removeCategory(category) {
      this.library.removeCategory(category.id);
    },
    removeList(list) {
      this.library.removeList(list.id);
    },
    reorderList(args) {
      this.library.lists = arrayMove(this.library.lists, args.before, args.after);
    },
    reorderCategory(args) {
      const list = this.library.getListById(args.list.id);
      list.categoryIds = arrayMove(list.categoryIds, args.before, args.after);
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    reorderItem(args) {
      const item = this.library.getItemById(args.itemId);
      const dropCategory = this.library.getCategoryById(args.categoryId);
      const list = this.library.getListById(args.list.id);
      const originalCategory = this.library.findCategoryWithItemById(item.id, list.id);
      const oldCategoryItem = originalCategory.getCategoryItemById(item.id);
      const oldIndex = originalCategory.categoryItems.indexOf(oldCategoryItem);
      if (originalCategory === dropCategory) {
        dropCategory.categoryItems = arrayMove(dropCategory.categoryItems, oldIndex, args.dropIndex);
      } else {
        originalCategory.categoryItems.splice(oldIndex, 1);
        dropCategory.categoryItems.splice(args.dropIndex, 0, oldCategoryItem);
      }
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    addItemToCategory(args) {
      const item = this.library.getItemById(args.itemId);
      const dropCategory = this.library.getCategoryById(args.categoryId);
      if (item && dropCategory) {
        dropCategory.addItem({ itemId: item.id });
        const categoryItem = dropCategory.getCategoryItemById(item.id);
        const categoryItemIndex = dropCategory.categoryItems.indexOf(categoryItem);
        if (categoryItem && categoryItemIndex !== -1) {
          dropCategory.categoryItems = arrayMove(
            dropCategory.categoryItems,
            categoryItemIndex,
            args.dropIndex
          );
        }
        this.library.getListById(this.library.defaultListId).calculateTotals();
      }
    },
    updateListName(updatedList) {
      const list = this.library.getListById(updatedList.id);
      list.name = updatedList.name;
    },
    updateListDescription(updatedList) {
      const list = this.library.getListById(updatedList.id);
      list.description = updatedList.description;
    },
    setExternalId(args) {
      const list = this.library.getListById(args.list.id);
      list.externalId = args.externalId;
    },
    updateCategoryName(updatedCategory) {
      const category = this.library.getCategoryById(updatedCategory.id);
      category.name = updatedCategory.name;
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    updateCategoryColor(updatedCategory) {
      const category = this.library.getCategoryById(updatedCategory.id);
      category.color = updatedCategory.color;
    },
    updateItem(item) {
      this.library.updateItem(item);
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    updateItemLink(args) {
      const item = this.library.getItemById(args.item.id);
      item.url = args.url;
    },
    updateItemImageUrl(args) {
      const item = this.library.getItemById(args.item.id);
      item.imageUrl = args.imageUrl;
      this.library.optionalFields.images = true;
    },
    updateItemImage(args) {
      const item = this.library.getItemById(args.item.id);
      item.image = args.image;
      this.library.optionalFields.images = true;
    },
    updateItemUnit(unit) {
      this.library.itemUnit = unit;
    },
    removeItemImage(updateItem) {
      const item = this.library.getItemById(updateItem.id);
      item.image = "";
    },
    updateCategoryItem(args) {
      args.category.updateCategoryItem(args.categoryItem);
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    removeItemFromCategory(args) {
      args.category.removeItem(args.itemId);
      this.library.getListById(this.library.defaultListId).calculateTotals();
    },
    copyList(listId) {
      const copiedList = this.library.copyList(listId);
      this.library.defaultListId = copiedList.id;
    },
    importCSV(importData) {
      const list = this.library.newList({});
      let category;
      const newCategories = {};
      let item;
      let categoryItem;
      let row;
      let i;
      list.name = importData.name;
      for (i in importData.data) {
        row = importData.data[i];
        if (newCategories[row.category]) {
          category = newCategories[row.category];
        } else {
          category = this.library.newCategory({ list });
          newCategories[row.category] = category;
        }
        item = this.library.newItem({ category, _isNew: false });
        categoryItem = category.getCategoryItemById(item.id);
        item.name = row.name;
        item.description = row.description;
        categoryItem.qty = parseFloat(row.qty);
        item.weight = weightUtils.WeightToMg(parseFloat(row.weight), row.unit);
        item.authorUnit = row.unit;
        category.name = row.category;
      }
      list.calculateTotals();
      this.library.defaultListId = list.id;
    },
    showModal(name) {
      this.activeModal = name;
    },
    closeModal() {
      this.activeModal = null;
    },
    initSpeedbump(callback, options) {
      this.speedbump = { callback, options };
    },
    confirmSpeedbump() {
      if (this.speedbump && typeof this.speedbump.callback === "function") {
        this.speedbump.callback(true);
      }
      this.speedbump = null;
    },
    closeSpeedbump() {
      this.speedbump = null;
    },
    triggerImportCSV() {
      this.importCSVTrigger += 1;
    },
    openItemLinkDialog(item) {
      this.activeItemDialog = { type: "link", item, imageUrl: null };
    },
    openItemImageDialog(item) {
      this.activeItemDialog = { type: "image", item, imageUrl: null };
    },
    openViewImageDialog(imageUrl) {
      this.activeItemDialog = { type: "viewImage", item: null, imageUrl };
    },
    closeItemDialog() {
      this.activeItemDialog = null;
    },
    addDirectiveInstance({ key, value }) {
      this.directiveInstances[key] = value;
    },
    removeDirectiveInstance(key) {
      delete this.directiveInstances[key];
    },
    // Async actions
    init() {
      if (localStorage.library) {
        return this.loadLocal();
      }
      return fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin"
      }).then((res) => res.ok ? res.json() : null).then((data) => {
        if (data) {
          this.setSyncToken(data.syncToken);
          this.loadLibraryData(data.library);
          this.setSaveType("remote");
          this.setLoggedIn(data.username);
        }
      }).catch(() => {
      });
    },
    loadLocal() {
      const libraryData = localStorage.library;
      this.loadLibraryData(libraryData);
      this.setSaveType("local");
      this.setLoggedIn(false);
    },
    loadRemote() {
      return fetchJson("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      }).then((response) => {
        this.setSyncToken(response.syncToken);
        this.loadLibraryData(response.library);
        this.setSaveType("remote");
        this.setLoggedIn(response.username);
      }).catch((response) => {
        if (response.status == 401) {
          navigateTo("/signin");
          return void 0;
        }
        return new Promise((resolve, reject) => {
          reject("An error occurred while fetching your data, please try again later.");
        });
      });
    }
  }
});

export { useLighterpackStore as u };
//# sourceMappingURL=store-BCqR5AiP.mjs.map
